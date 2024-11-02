
import json
import requests
from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from slugify import slugify
from django.core.exceptions import FieldDoesNotExist
from django.db.models.fields import DateField
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Count
from django.urls import reverse
from django.db.models import F

from .models import (
    # FAQ,
    # CategoryGuide,
    Department,
    # Event,
    Sphere,
    Video,
    FinancialYear,
    Homepage,
    MainMenuItem,
    ShowcaseItem,
    InfrastructureProjectPart,
)

COMMON_DESCRIPTION = "South Africa's National and Provincial budget data "
COMMON_DESCRIPTION_ENDING = "from National Treasury in partnership with IMALI YETHU."


def serialize_showcase(showcase_items):
    showcase_items_dicts = [
        {
            "name": i.name,
            "description": i.description,
            "cta_text_1": i.cta_text_1,
            "cta_link_1": i.cta_link_1,
            "cta_text_2": i.cta_text_2,
            "cta_link_2": i.cta_link_2,
            "second_cta_type": i.second_cta_type,
            "thumbnail_url": i.file.url,
        }
        for i in showcase_items
    ]
    return json.dumps(
        showcase_items_dicts, cls=DjangoJSONEncoder, sort_keys=True, indent=4
    )


def homepage(request):
    year = FinancialYear.get_latest_year()
    titles = {
        "whyBudgetIsImportant",
        "howCanTheBudgetPortalHelpYou",
        "theBudgetProcess",
    }
    videos = Video.objects.filter(title_id__in=titles)

    page_data = Homepage.objects.first()
    latest_provincial_year = (
        FinancialYear.objects.filter(spheres__slug="provincial")
        # .annotate(num_depts=Count("spheres__governments__departments"))
        # .filter(num_depts__gt=0)
        .first()
    )

    showcase_items = ShowcaseItem.objects.all()

    context = {
        "selected_financial_year": None,
        "financial_years": [],
        "selected_tab": "homepage",
        "slug": year.slug,
        "title": "South African Government Budgets %s - vulekamali" % year.slug,
        "description": COMMON_DESCRIPTION + COMMON_DESCRIPTION_ENDING,
        "url_path": year.get_url_path(),
        "navbar": MainMenuItem.objects.prefetch_related("children").all(),
        "videos": videos,
        "latest_year": year.slug,
        "latest_provincial_year": latest_provincial_year
        and latest_provincial_year.slug,
        "main_heading": 'main page',
        "sub_heading": page_data.sub_heading,
        "primary_button_label": page_data.primary_button_label,
        "primary_button_url": page_data.primary_button_url,
        "secondary_button_label": page_data.secondary_button_label,
        "secondary_button_url": page_data.secondary_button_url,
        "call_to_action_sub_heading": page_data.call_to_action_sub_heading,
        "call_to_action_heading": page_data.call_to_action_heading,
        "call_to_action_link_label": page_data.call_to_action_link_label,
        "call_to_action_link_url": page_data.call_to_action_link_url,
        "showcase_items_json": serialize_showcase(showcase_items),
    }

    return render(request, "homepage.html", context)


def glossary(request):
    context = {
        "navbar": MainMenuItem.objects.prefetch_related("children").all(),
        "selected_tab": "learning-centre",
        "selected_sidebar": "glossary",
        "title": "Glossary - vulekamali",
        "description": COMMON_DESCRIPTION + COMMON_DESCRIPTION_ENDING,
        "latest_year": FinancialYear.get_latest_year().slug,
        "selected_financial_year": None,
        "financial_years": [],
    }
    return render(request, "glossary.html", context)


def about(request):
    context = {
        "title": "About - vulekamali",
        "description": COMMON_DESCRIPTION + COMMON_DESCRIPTION_ENDING,
        "selected_tab": "about",
        "selected_financial_year": None,
        "financial_years": [],
        "video": Video.objects.get(title_id="onlineBudgetPortal"),
        "navbar": MainMenuItem.objects.prefetch_related("children").all(),
        "latest_year": FinancialYear.get_latest_year().slug,
    }
    return render(request, "about.html", context)


def department_list_data(financial_year_id):
    selected_year = get_object_or_404(FinancialYear, slug=financial_year_id)
    page_data = {
        "financial_years": [],
        "selected_financial_year": selected_year.slug,
        "selected_tab": "departments",
        "slug": "departments",
        "title": "Department Budgets for %s - vulekamali" % selected_year.slug,
        "description": "Department budgets for the %s financial year %s"
        % (selected_year.slug, COMMON_DESCRIPTION_ENDING),
    }

    for year in FinancialYear.get_available_years():
        is_selected = year.slug == financial_year_id
        page_data["financial_years"].append(
            {
                "id": year.slug,
                "is_selected": is_selected,
                "closest_match": {
                    "is_exact_match": True,
                    "url_path": "/%s/departments" % year.slug,
                },
            }
        )

    for sphere_name in ("national", "provincial"):
        page_data[sphere_name] = []
        for government in (
            selected_year.spheres.filter(
                slug=sphere_name).first().governments.all()
        ):
            departments = []
            for department in government.departments.all():
                departments.append(
                    {
                        "name": department.name,
                        "slug": str(department.slug),
                        "vote_number": department.vote_number,
                        "url_path": department.get_url_path(),
                        "website_url": department.get_latest_website_url(),
                    }
                )
            departments = sorted(departments, key=lambda d: d["vote_number"])
            page_data[sphere_name].append(
                {
                    "name": government.name,
                    "slug": str(government.slug),
                    "departments": departments,
                }
            )

    return page_data


def infrastructure_projects_overview(request):
    """Overview page to showcase all featured infrastructure projects"""
    infrastructure_projects = InfrastructureProjectPart.objects.filter(
        featured=True
    ).order_by("project_slug").annotate(
        unique_slug=F("project_slug")
    )
    if infrastructure_projects is None:
        raise Http404()
    projects = []
    for project in infrastructure_projects:
        departments = Department.objects.filter(
            slug=slugify(project.government_institution),
            government__sphere__slug="national",
        )
        department_url = None
        if departments:
            department_url = (
                departments[0].get_latest_department_instance().get_url_path()
            )
        projects.append(
            {
                "name": project.project_name,
                "coordinates": project.clean_coordinates(project.gps_code),
                "projected_budget": project.calculate_projected_expenditure(),
                "stage": project.current_project_stage,
                "description": project.project_description,
                "provinces": project.provinces.split(","),
                "total_budget": project.project_value_rands,
                "detail": project.get_url_path(),
                "slug": project.get_url_path(),
                "page_title": "{} - vulekamali".format(project.project_name),
                "government_institution": {
                    "name": project.government_institution,
                    "url": department_url,
                },
                "nature_of_investment": project.nature_of_investment,
                "infrastructure_type": project.infrastructure_type,
                "expenditure": sorted(
                    project.build_complete_expenditure(), key=lambda e: e["year"]
                ),
                "administration_type": project.administration_type,
                "partnership_type": project.partnership_type,
                "date_of_close": project.date_of_close,
                "duration": project.duration,
                "financing_structure": project.financing_structure,
                "project_value_rand_million": project.project_value_rand_million,
                "form_of_payment": project.form_of_payment,
            }
        )
    projects = sorted(projects, key=lambda p: p["name"])
    return {
        # "dataset_url": reverse("dataset-category", args=("infrastructure-projects",)),
        "projects": projects,
        "description": "National department Infrastructure projects in South Africa",
        "slug": "infrastructure-projects",
        "selected_tab": "infrastructure-projects",
        "title": "Infrastructure Projects - vulekamali",
    }


def infrastructure_projects_overview_json(request):
    response_json = json.dumps(
        infrastructure_projects_overview(request),
        sort_keys=True,
        indent=4,
        separators=(",", ": "),
    )
    return HttpResponse(response_json, content_type="application/json")


def infrastructure_project_list(request):
    context = {
        "page": {"layout": "about", "data_key": "about"},
        "site": {"latest_year": FinancialYear.get_latest_year().slug},
    }
    return render(request, "infrastructure_project_list.html", context)


def infrastructure_project_detail_data(project_slug):
    project = InfrastructureProjectPart.objects.filter(
        project_slug=project_slug
    ).first()
    if not project:
        return HttpResponse(status=404)

    departments = Department.objects.filter(
        slug=slugify(project.government_institution),
        government__sphere__slug="national",
    )
    department_url = None
    if departments:
        department_url = departments[0].get_latest_department_instance().get_url_path()
    # dataset_url = reverse("dataset-category", args=("infrastructure-projects",))

    project_dict = {
        "name": project.project_name,
        "coordinates": project.clean_coordinates(project.gps_code),
        "projected_budget": project.calculate_projected_expenditure(),
        "stage": project.current_project_stage,
        "description": project.project_description,
        "provinces": project.provinces.split(","),
        "total_budget": project.project_value_rands,
        "detail": project.get_url_path(),
        # "dataset_url": dataset_url,
        "slug": project.get_url_path(),
        "page_title": "{} - vulekamali".format(project.project_name),
        "government_institution": {
            "name": project.government_institution,
            "url": department_url,
        },
        "nature_of_investment": project.nature_of_investment,
        "infrastructure_type": project.infrastructure_type,
        "expenditure": sorted(
            project.build_complete_expenditure(), key=lambda e: e["year"]
        ),
        "administration_type": project.administration_type,
        "partnership_type": project.partnership_type,
        "date_of_close": project.date_of_close,
        "duration": project.duration,
        "financing_structure": project.financing_structure,
        "project_value_rand_million": project.project_value_rand_million,
        "form_of_payment": project.form_of_payment,
    }
    return {
        # "dataset_url": dataset_url,
        "projects": [project_dict],
        "description": project.project_description
        or "Infrastructure projects in South Africa",
        "slug": "infrastructure-projects",
        "selected_tab": "infrastructure-projects",
        "title": f"{project.project_name} - Infrastructure Projects - vulekamali",
    }


def infrastructure_project_detail_json(request, project_slug):
    response = infrastructure_project_detail_data(project_slug)
    # For 404 - not sure why not raising a 404 exception.
    if isinstance(response, HttpResponse):
        return response

    response_json = json.dumps(
        response, sort_keys=True, indent=4, separators=(",", ": ")
    )
    return HttpResponse(response_json, content_type="application/json")


def infrastructure_project_detail(request, project_slug):
    dataset_response = infrastructure_project_detail_data(project_slug)
    # For 404 - not sure why not raising a 404 exception.
    if isinstance(dataset_response, HttpResponse):
        return dataset_response
    latest_year_slug = FinancialYear.get_latest_year().slug

    context = {
        "page": {"layout": "infrastructure_project", "data_key": "dataset"},
        "site": {
            "data": {
                "navbar": MainMenuItem.objects.prefetch_related("children").all(),
                "dataset": dataset_response,
            },
            "latest_year": latest_year_slug,
        },
        "debug": settings.DEBUG,
    }
    return render(request, "infrastructure_project.html", context)


def spendingByProgramme(request):
    return render(request, "spending_by_programme_subprogramme.html")


def latest_department_list(request):
    url = reverse("department-list",
                  args=(FinancialYear.get_latest_year().slug,))
    return redirect(url, permanent=False)


def department_list(request, financial_year_id):
    context = department_list_data(financial_year_id)
    context["navbar"] = MainMenuItem.objects.prefetch_related("children").all()
    context["latest_year"] = FinancialYear.get_latest_year().slug
    return render(request, "department_list.html", context)


def department_list_json(request, financial_year_id):
    response_json = json.dumps(
        department_list_data(financial_year_id),
        sort_keys=True,
        indent=4,
        separators=(",", ": "),
        cls=DjangoJSONEncoder,
    )
    return HttpResponse(response_json, content_type="application/json")


def department_page(
    request, financial_year_id, sphere_slug, government_slug, department_slug
):
    department = None
    selected_year = get_object_or_404(FinancialYear, slug=financial_year_id)

    years = FinancialYear.get_available_years()
    for year in years:
        if year.slug == financial_year_id:
            selected_year = year
            sphere = selected_year.spheres.filter(slug=sphere_slug).first()
            government = sphere.governments.filter(
                slug=government_slug).first()
            department = government.departments.filter(
                slug=department_slug).first()

    financial_years_context = []
    for year in years:
        closest_match, closest_is_exact = year.get_closest_match(department)
        financial_years_context.append(
            {
                "id": year.slug,
                "is_selected": year.slug == financial_year_id,
                "closest_match": {
                    "url_path": closest_match.get_url_path(),
                    "is_exact_match": closest_is_exact,
                },
            }
        )

    # contributed_datasets = []
    # for dataset in department.get_contributed_datasets():
    #     contributed_datasets.append(
    #         {
    #             "name": dataset.name,
    #             "contributor": dataset.get_organization()["name"],
    #             "url_path": dataset.get_url_path(),
    #         }
    #     )

    # ======= main budget docs =========================
    # budget_dataset = department.get_dataset(group_name="budget-vote-documents")
    # if budget_dataset:
    #     document_resource = budget_dataset.get_resource(format="PDF")
    #     if document_resource:
    #         document_resource = resource_fields(document_resource)
    #     tables_resource = budget_dataset.get_resource(
    #         format="XLS"
    #     ) or budget_dataset.get_resource(format="XLSX")
    #     if tables_resource:
    #         tables_resource = resource_fields(tables_resource)
    #     department_budget = {
    #         "name": budget_dataset.name,
    #         "document": document_resource,
    #         "tables": tables_resource,
    #     }
    # else:
    #     department_budget = None

    # # ======= adjusted budget docs =========================
    # adjusted_budget_dataset = department.get_dataset(
    #     group_name="adjusted-budget-vote-documents"
    # )
    # if adjusted_budget_dataset:
    #     document_resource = adjusted_budget_dataset.get_resource(format="PDF")
    #     if document_resource:
    #         document_resource = resource_fields(document_resource)
    #     tables_resource = adjusted_budget_dataset.get_resource(
    #         format="XLS"
    #     ) or adjusted_budget_dataset.get_resource(format="XLSX")
    #     if tables_resource:
    #         tables_resource = resource_fields(tables_resource)
    #     department_adjusted_budget = {
    #         "name": adjusted_budget_dataset.name,
    #         "document": document_resource,
    #         "tables": tables_resource,
    #     }
    # else:
    #     department_adjusted_budget = None

    # primary_department = department.get_primary_department()

    if department.government.sphere.slug == "national":
        govt_label = "National"
    elif department.government.sphere.slug == "provincial":
        govt_label = department.government.name

    context = {
        "comments_enabled": True,
        # "subprogramme_viz_data": DepartmentSubprogrammes(department),
        # "subprog_treemap_url": get_viz_url(
        #     department, "department-viz-subprog-treemap"
        # ),
        # "prog_econ4_circles_data": DepartmentProgrammesEcon4(department),
        # "prog_econ4_circles_url": get_viz_url(
        #     department, "department-viz-subprog-econ4-circles"
        # ),
        # "subprog_econ4_bars_data": DepartmentSubprogEcon4(department),
        # "subprog_econ4_bars_url": get_viz_url(
        #     department, "department-viz-subprog-econ4-bars"
        # ),
        # "expenditure_over_time": department.get_expenditure_over_time(),
        # "budget_actual": department.get_expenditure_time_series_summary(),
        # "budget_actual_programmes": department.get_expenditure_time_series_by_programme(),
        # "adjusted_budget_summary": department.get_adjusted_budget_summary(),
        # "contributed_datasets": contributed_datasets if contributed_datasets else None,
        "financial_years": financial_years_context,
        "government": {
            "name": department.government.name,
            "label": govt_label,
            "slug": str(department.government.slug),
        },
        # "government_functions": [f.name for f in department.get_govt_functions()],
        "intro": department.intro,
        # "infra_enabled": IRMSnapshot.objects.filter(
        #      sphere__slug=department.government.sphere.slug
        # ).count(),
        "is_vote_primary": department.is_vote_primary,
        "name": department.name,
        # "projects": get_department_project_summary(govt_label, department),
        "slug": str(department.slug),
        "sphere": {
            "name": department.government.sphere.name,
            "slug": department.government.sphere.slug,
        },
        "selected_financial_year": financial_year_id,
        "selected_tab": "departments",
        "title": "%s budget %s  - vulekamali" % (department.name, selected_year.slug),
        "description": "%s department: %s budget data for the %s financial year %s"
        % (
            govt_label,
            department.name,
            selected_year.slug,
            COMMON_DESCRIPTION_ENDING,
        ),
        # "department_budget": department_budget,
        # "department_adjusted_budget": department_adjusted_budget,
        # "procurement_resource_links": ProcurementResourceLink.objects.filter(
        #     sphere_slug__in=(
        #         "all",
        #         department.government.sphere.slug,
        #     )
        # ),
        # "performance_resource_links": PerformanceResourceLink.objects.filter(
        #     sphere_slug__in=(
        #         "all",
        #         department.government.sphere.slug,
        #     )
        # ),
        # "in_year_monitoring_resource_links": InYearMonitoringResourceLink.objects.filter(
        #     sphere_slug__in=(
        #         "all",
        #         department.government.sphere.slug,
        #     )
        # ),
        "vote_number": department.vote_number,
        # "vote_primary": {
        #     "url_path": primary_department.get_url_path(),
        #     "name": primary_department.name,
        #     "slug": primary_department.slug,
        # },
        # "website_url": department.get_latest_website_url(),
    }
    context["navbar"] = MainMenuItem.objects.prefetch_related("children").all()
    context["latest_year"] = FinancialYear.get_latest_year().slug
    # context["global_values"] = read_object_from_yaml(
    #     str(settings.ROOT_DIR.path("_data/global_values.yaml"))
    # )
    # context["admin_url"] = reverse(
    #     "admin:budgetportal_department_change", args=(department.pk,)
    # )
    # context["eqprs_data_enabled"] = config.EQPRS_DATA_ENABLED
    context["eqprs_data_enabled"] = True
    # context["in_year_spending_enabled"] = config.IN_YEAR_SPENDING_ENABLED

    return render(request, "department.html", context)
    
