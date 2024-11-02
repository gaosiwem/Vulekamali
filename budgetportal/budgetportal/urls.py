
from django.contrib import admin
from django.conf import settings
from django.urls import re_path as url
from django.conf.urls import include, static, url
from django.contrib.sitemaps import views as sitemap_views
from django.core.exceptions import PermissionDenied
from django.shortcuts import redirect
from django.urls import include, path
from django.views.decorators.cache import cache_page

from . import views

CACHE_MINUTES_SECS = 60 * 5  # minutes

department_urlpatterns = [
    url(
        r"^$", cache_page(CACHE_MINUTES_SECS)(views.department_page), name="department"
    )]

urlpatterns = [
    # Homepage
    url(r"^$", cache_page(CACHE_MINUTES_SECS)
        (views.homepage), name="home"),
    url(
        r"^glossary/?$",
        cache_page(CACHE_MINUTES_SECS)(views.glossary),
        name="glossary",
    ),
    url(r"^about/?$", cache_page(CACHE_MINUTES_SECS)
        (views.about), name="about"),
    url(r"^spendingByProgramme/?$", cache_page(CACHE_MINUTES_SECS)
        (views.spendingByProgramme), name="spendingByProgramme"),
    # Department List
    url(
        r"^latest/departments$",
        views.latest_department_list,
        name="latest-department-list",
    ),
    url(
        r"^(?P<financial_year_id>\d{4}-\d{2})/departments$",
        cache_page(CACHE_MINUTES_SECS)(views.department_list),
        name="department-list",
    ),

    url(r"^performance/", include("performance.urls")),
    
    # Provincial Infrastructure projects
    url(r"^provincial-infrastructure/", include("provincial_infrastructure.urls")),

    # Infrastructure projects
    url(
        r"^infrastructure-projects/?$",
        cache_page(CACHE_MINUTES_SECS)(views.infrastructure_project_list),
        name="infrastructure-project-list",
    ),
    url(
        r"^json/infrastructure-projects.json$",
        cache_page(CACHE_MINUTES_SECS)(views.infrastructure_projects_overview_json),
    ),
    url(
        r"^json/infrastructure-projects/(?P<project_slug>[\w-]+).json$",
        cache_page(CACHE_MINUTES_SECS)(views.infrastructure_project_detail_json),
    ),
    url(
        r"^infrastructure-projects/(?P<project_slug>[\w-]+)$",
        cache_page(CACHE_MINUTES_SECS)(views.infrastructure_project_detail),
        name="infrastructure-projects",
    ),

    # Department detail
    # - National
    # url(
    #     r"^(?P<financial_year_id>\d{4}-\d{2})/national/departments/(?P<department_slug>[\w-]+)/",
    #     include((department_urlpatterns, "national"), namespace="national"),
    #     kwargs={"sphere_slug": "national", "government_slug": "south-africa"},
    #     name="national-department",
    # ),

    url(
        r"^(?P<financial_year_id>\d{4}-\d{2})/national/departments/(?P<department_slug>[\w-]+)/",
        include((department_urlpatterns, "national"), namespace="national"),
        kwargs={"sphere_slug": "national", "government_slug": "south-africa"},
        name="national-department",
    ),
    # Admin
    url(r"^admin/", admin.site.urls),
    # url(r"^admin/bulk_upload/template", bulk_upload.template_view),

    # path('admin/', admin.site.urls),
    # path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
]
