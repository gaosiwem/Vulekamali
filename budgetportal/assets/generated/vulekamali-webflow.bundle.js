/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/webflow/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/webflow/index.js":
/*!************************************!*\
  !*** ./assets/js/webflow/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(/*! ./pages/search.js */ "./assets/js/webflow/pages/search.js");

var _project = __webpack_require__(/*! ./pages/project.js */ "./assets/js/webflow/pages/project.js");

// Webflow pages include jQuery so we don't needt to import that


$(document).ready(function () {
  var pageData = JSON.parse(document.getElementById('page-data').textContent);

  if ($("body.infrastructure-project-detail-page").length) {
    (0, _project.projectPage)(pageData);
  };

  if ($("#Infrastructure-Search-Input").length) {
    (0, _search.searchPage)(pageData);
  }
});

/***/ }),

/***/ "./assets/js/webflow/maps.js":
/*!***********************************!*\
  !*** ./assets/js/webflow/maps.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTileLayer = createTileLayer;
var provinceCode = exports.provinceCode = {
  "Eastern Cape": "EC",
  "Free State": "FS",
  "Gauteng": "GT",
  "KwaZulu-Natal": "KZN",
  "Limpopo": "LIM",
  "Mpumalanga": "MP",
  "North West": "NW",
  "Northern Cape": "NC",
  "Western Cape": "WC"
};

function createTileLayer() {
  return L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
    subdomains: 'abc'
  });
}

/***/ }),

/***/ "./assets/js/webflow/pages/project.js":
/*!********************************************!*\
  !*** ./assets/js/webflow/pages/project.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.projectPage = projectPage;

var _util = __webpack_require__(/*! ../util.js */ "./assets/js/webflow/util.js");

var _maps = __webpack_require__(/*! ../maps.js */ "./assets/js/webflow/maps.js");

var _reusableLineChart = __webpack_require__(/*! vulekamali-visualisations/src/charts/line/reusable-line-chart/reusable-line-chart.js */ "./node_modules/vulekamali-visualisations/src/charts/line/reusable-line-chart/reusable-line-chart.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

function initPointMap(lat, lon) {
  var map = L.map("project-location-map-container", {
    center: [lat, lon],
    zoom: 13,
    scrollWheelZoom: false
  });
  (0, _maps.createTileLayer)().addTo(map);
  return map;
}

function initMuniMap(lat, lon) {
  var map = L.map("project-municipal-context-map-container", {
    center: [lat, lon],
    zoom: 7,
    scrollWheelZoom: false
  });
  (0, _maps.createTileLayer)().addTo(map);
  return map;
}

function addProvinceToMap(map, provinceName) {
  $.get("https://mapit.code4sa.org/area/MDB:" + _maps.provinceCode[provinceName] + "/feature.geojson?generation=2&simplify_tolerance=0.01").done(function (response) {
    var layer = L.geoJSON(response, {
      weight: 1,
      "fillColor": "#ff9829",
      "fillOpacity": 0.2,
      "color": "#ff9829"
    }).addTo(map).bindTooltip(function (layer) {
      return layer.feature.properties.name + " Province";
    }).addTo(map);

    map.fitBounds(layer.getBounds());
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(jqXHR, textStatus, errorThrown);
  });
}

function addMuniToMap(map, provinceName, level, muniName) {
  var levelCode = levelToCode[level];
  $.get("https://mapit.code4sa.org/areas/MDB-levels:PR-" + _maps.provinceCode[provinceName] + "|" + levelCode + ".geojson?generation=2&simplify_tolerance=0.01").done(function (response) {
    var munis = response.features.filter(function (feature) {
      return feature.properties.name === muniName;
    });
    if (munis.length) {
      var muni = munis[0]; // Assume no duplicate names in a province
      var layer = L.geoJSON(muni, {
        weight: 1,
        "fillColor": "#ff9829",
        "fillOpacity": 0.2,
        "color": "#ff9829"
      }).addTo(map).bindTooltip(function (layer) {
        return layer.feature.properties.name + " " + level;
      }).addTo(map);
    } else {
      console.info("Couldn't find muni " + muniName + " by name in province");
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(jqXHR, textStatus, errorThrown);
  });
}

var levelToCode = {
  "Local Municipality": "MN",
  "Metro Municipality": "MN",
  "District Municipality": "DC"
};

function updateTextField(selector, text) {
  var match = $(selector);
  if (text === "" || text === null) {
    match.text("Not available");
    match.addClass("no-data");
  } else {
    match.text(text);
    match.removeClass("no-data");
  }
}

function initTimeSeriesChart(chartData) {
  var container = (0, _d3Selection.select)("#time-series-chart-container");
  var boundingRect = container.node().getBoundingClientRect();

  var chart = (0, _reusableLineChart.reusableLineChart)().width(boundingRect.width).height(boundingRect.height);
  var snapshots = chartData.snapshots.map(function (snapshot) {
    var chartSnapshot = _extends({}, snapshot);
    chartSnapshot["total_estimated_project_cost"] = null;
    return chartSnapshot;
  });
  container.call(chart.data(snapshots));

  return chart;
}

function updateLinkField(selector, label, url) {
  var fieldContainers = $(selector);
  fieldContainers.html('<a class="project-detail_link" href="' + url + '"></a>');
  // Set text using .text() to avoid HTML injection
  fieldContainers.find("a").text(label);
}

var buildSearchURL = function buildSearchURL(province) {
  return '/infrastructure-projects/provincial/?filter=province:' + encodeURIComponent(province);
};

function projectPage(pageData) {
  var project = pageData.project;

  // Project definition
  updateTextField(".name-field", project.name);
  updateTextField(".project-number-field", project.project_number);
  updateTextField(".budget-programme-field", project.budget_programme);
  updateTextField(".nature-of-investment-field", project.nature_of_investment);

  // Administrative details
  updateTextField(".primary-funding-source-field", project.primary_funding_source);
  updateTextField(".funding-status-field", project.funding_status);

  $("#breadcrumb-level-2").text(project.province);
  $("#breadcrumb-level-2").attr("href", buildSearchURL(project.province));
  updateLinkField(".province-field", project.province, pageData.province_depts_url);

  if (pageData.department_url) {
    updateLinkField(".department-field", project.department, pageData.department_url);
  } else {
    updateTextField(".department-field", project.department);
  }

  // Location
  updateTextField("#local-municipality-field", project.local_municipality);
  updateTextField("#district-municipality-field", project.district_municipality);
  updateTextField(".coordinates-field", (0, _util.coordsAvailable)(project.latitude, project.longitude) ? project.latitude + ', ' + project.longitude : null);

  // Implementation
  updateTextField(".program-implementing-agent-field", project.program_implementing_agent);
  updateTextField(".principle-agent-field", project.principle_agent);
  updateTextField(".main-contractor-field", project.main_contractor);
  updateTextField(".other-service-providers-field", project.other_parties);

  // Dates
  updateTextField(".status-field", project.status);
  updateTextField(".start-date-field", project.start_date);
  updateTextField(".estimated-construction-start-date-field", project.estimated_construction_start_date);
  updateTextField(".estimated-completion-date-field", project.estimated_completion_date);
  updateTextField(".contracted-construction-end-date-field", project.contracted_construction_end_date);
  updateTextField(".estimated-construction-end-date-field", project.estimated_construction_end_date);

  // Budgets and spending
  $(".total-project-cost-field").parent().remove();
  updateTextField("#total-professional-fees-field", (0, _util.formatCurrency)(project.total_professional_fees));
  updateTextField(".total-construction-costs-field", (0, _util.formatCurrency)(project.total_construction_costs));
  updateTextField(".variation-orders-field", (0, _util.formatCurrency)(project.variation_orders));
  updateTextField("#expenditure-from-previous-years-professional-fees-field", (0, _util.formatCurrency)(project.expenditure_from_previous_years_professional_fees));
  updateTextField(".expenditure-from-previous-years-construction-costs-field", (0, _util.formatCurrency)(project.expenditure_from_previous_years_construction_costs));
  updateTextField(".expenditure-from-previous-years-total-field", (0, _util.formatCurrency)(project.expenditure_from_previous_years_total));
  updateTextField(".project-expenditure-total-field", (0, _util.formatCurrency)(project.project_expenditure_total));
  updateTextField(".main-appropriation-professional-fees-field", (0, _util.formatCurrency)(project.main_appropriation_professional_fees));
  updateTextField(".main-appropriation-construction-costs-field", (0, _util.formatCurrency)(project.main_appropriation_construction_costs));
  updateTextField(".main-appropriation-total-field", (0, _util.formatCurrency)(project.main_appropriation_total));

  $(".main-appropriation-heading").text($(".main-appropriation-heading").text().replace(/ FY$/, pageData.latest_snapshot_financial_year));

  $(".quarterly-heading").text($(".quarterly-heading").text().replace(/ FY$/, pageData.latest_snapshot_financial_year));

  updateTextField("#actual-expenditure-q1-field", (0, _util.formatCurrency)(project.actual_expenditure_q1));
  updateTextField("#actual-expenditure-q2-field", (0, _util.formatCurrency)(project.actual_expenditure_q2));
  updateTextField("#actual-expenditure-q3-field", (0, _util.formatCurrency)(project.actual_expenditure_q3));
  updateTextField("#actual-expenditure-q4-field", (0, _util.formatCurrency)(project.actual_expenditure_q4));

  $(".header__download").attr("href", project.csv_download_url);

  // Maps and visualisations
  $(".embed-container").css("background-color", "#e1e1e1");

  if ((0, _util.coordsAvailable)(project.latitude, project.longitude)) {
    var locationMap = initPointMap(project.latitude, project.longitude);
    var marker = L.marker([project.latitude, project.longitude]).addTo(locationMap);
  } else {
    $("#project-location-map-container .map__no-data").css("display", "flex");
  }

  $.get("https://mapit.code4sa.org/area/MDB:" + _maps.provinceCode[project.province] + "/geometry").done(function (response) {
    var muniMap = initMuniMap(response.centre_lat, response.centre_lon);

    addProvinceToMap(muniMap, project.province);

    if (project.district_municipality === project.local_municipality & project.district_municipality != null) {
      addMuniToMap(muniMap, project.province, "Metro Municipality", project.local_municipality);
    } else {
      if (project.district_municipality != null) addMuniToMap(muniMap, project.province, "District Municipality", project.district_municipality);
      if (project.local_municipality != null) addMuniToMap(muniMap, project.province, "Local Municipality", project.local_municipality);
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error(jqXHR, textStatus, errorThrown);
  });

  initTimeSeriesChart(pageData.time_series_chart);
} // end project page

/***/ }),

/***/ "./assets/js/webflow/pages/search.js":
/*!*******************************************!*\
  !*** ./assets/js/webflow/pages/search.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPage = searchPage;

var _util = __webpack_require__(/*! ../util.js */ "./assets/js/webflow/util.js");

var _maps = __webpack_require__(/*! ../maps.js */ "./assets/js/webflow/maps.js");

var _reusableBarChart = __webpack_require__(/*! vulekamali-visualisations/src/charts/bar/reusable-bar-chart/reusable-bar-chart.js */ "./node_modules/vulekamali-visualisations/src/charts/bar/reusable-bar-chart/reusable-bar-chart.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

/**************************************************************
  Style vision:
    It would be nice if there weren't a million things updating
    and reading pageState but it seems necessary for event handlers
    to figure out the right thing to do.

  pageState is module-global and initialises fields that will be
  used later.

  searchPage is called only on the search page, and initialises
  things dependent on the page markup.

  Each interaction that should trigger a search updates pageState
  if needed (e.g. if it was a dropdown selection, it updates the
  relevant pageState.filters field) and then calls triggerSearch.

  triggerSearch always looks at the current pageState and starts
  the search requests based on that.

  The success handler of each of the search request updates anything
  it needs to in pageState, and updates the UI to reflect the response
  from the server.

  ajax requests should always cancel the relevant previous request
  if it's still in flight before being sent, and should always have
  an error handler giving some user feedback as well as technical
  information in the console to notice and understand errors.
/***************************************************************/

var pageState = {
  filters: null,
  facetsRequest: null,
  mapPointsRequest: null,
  sortField: null,
  listRequest: null,
  map: null,
  markers: null,
  resultRowTemplate: null,
  dropdownItemTemplate: null,
  statusChart: null
};

var baseLocation =
  "/provincial-infrastructure/api/v1/infrastructure-projects/full/search/";
var facetsLocation =
  "/provincial-infrastructure/api/v1/infrastructure-projects/full/search/facets/";

var facetPlurals = {
  government_label: "governments",
  sector: "sectors",
  department: "departments",
  status: "project statuses",
  primary_funding_source: "funding sources"
};

function onPopstate(event) {
  loadSearchStateFromCurrentURL();
  triggerSearch(false);
}

function pushState() {
  window.history.pushState(null, "", urlFromSearchState());
}

function loadSearchStateFromCurrentURL() {
  var queryString = window.location.search.substring(1);
  var params = new URLSearchParams(queryString);

  var textQuery = params.get("q");
  if (textQuery) $("#Infrastructure-Search-Input").val(textQuery);

  var filterParams = params.getAll("filter");
  pageState.filters = {};
  filterParams.forEach(function (param) {
    var pieces = param.split(/:/);
    var key = pieces.shift();
    var val = pieces.join(':');
    pageState.filters[key] = val;
  });

  var sortField = params.get("order_by");
  pageState.sortField = sortField || "status_order";
}

function urlFromSearchState() {
  var params = new URLSearchParams();
  params.set("q", $("#Infrastructure-Search-Input").val());

  for (var fieldName in pageState.filters) {
    params.append("filter", fieldName + ':' + pageState.filters[fieldName]);
  }

  params.set("order_by", pageState.sortField);
  var queryString = params.toString();
  return window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + queryString;
}

function clearFilters() {
  pageState.filters = {};
  $("#Infrastructure-Search-Input").val("");
  triggerSearch();
}

function buildFacetSearchURL() {
  var params = new URLSearchParams();
  params.set("q", $("#Infrastructure-Search-Input").val());
  for (var fieldName in pageState.filters) {
    var paramValue = fieldName + "_exact:" + pageState.filters[fieldName];
    params.append("selected_facets", paramValue);
  }
  return facetsLocation + "?" + params.toString();
}

function buildAllCoordinatesSearchURL() {
  var params = new URLSearchParams();
  params.set("q", $("#Infrastructure-Search-Input").val());
  for (var fieldName in pageState.filters) {
    params.set(fieldName, pageState.filters[fieldName]);
  }
  params.set("fields", "url_path,name,latitude,longitude");
  params.set("limit", "1000");
  return baseLocation + "?" + params.toString();
}

function buildListSearchURL() {
  var params = new URLSearchParams();
  params.set("q", $("#Infrastructure-Search-Input").val());
  for (var fieldName in pageState.filters) {
    params.set(fieldName, pageState.filters[fieldName]);
  }
  params.set("fields", "url_path,name,status,estimated_completion_date");
  params.set("ordering", pageState.sortField);
  params.set("limit", "20");
  return baseLocation + "?" + params.toString();
}

function updateFacets() {
  if (pageState.facetsRequest !== null) pageState.facetsRequest.abort();
  pageState.facetsRequest = $.get(buildFacetSearchURL()).done(function (response) {
    resetFacets();
    showFacetResults(response);
  }).fail(function (jqXHR, textStatus, errorThrown) {
    if (textStatus !== "abort") {
      alert("Something went wrong when searching. Please try again.");
      console.error(jqXHR, textStatus, errorThrown);
    }
  });
}

function updateMapPoints(url) {
  getLoadingSpinner().show();

  if (pageState.mapPointsRequest !== null) {
    pageState.mapPointsRequest.abort();
  }

  pageState.mapPointsRequest = $.get(url).done(function (response) {
    addMapPoints(response);
    if (response.next) {
      updateMapPoints(response.next);
    } else {
      getLoadingSpinner().hide();
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    if (textStatus !== "abort") {
      alert("Something went wrong when loading map data. Please try again.");
      console.error(jqXHR, textStatus, errorThrown);
    }
  });
}

function updateResultList(url) {
  if (pageState.listRequest !== null) pageState.listRequest.abort();
  pageState.listRequest = $.get(url).done(function (response) {
    populateDownloadCSVButton(response);
    addListResults(response);
  }).fail(function (jqXHR, textStatus, errorThrown) {
    if (textStatus !== "abort") {
      alert("Something went wrong when searching. Please try again.");
      console.error(jqXHR, textStatus, errorThrown);
    }
  });
}

function addMapPoints(response) {
  var newMarkers = [];
  response.results.forEach(function (project) {
    if (!project.latitude || !project.longitude) return;

    var latitude = parseFloat(project.latitude);
    if (latitude < -34.5916 || latitude > -21.783733) {
      console.log("Ignoring latitude " + latitude);
      return;
    }

    var longitude = parseFloat(project.longitude);
    if (longitude < 14.206737 || longitude > 33.074960) {
      console.log("Ignoring longitude " + longitude);
      return;
    }

    var marker = L.marker([latitude, longitude]).bindPopup(project.name + '<br><a target="_blank" href="' + project.url_path + '">Jump to project</a>');
    newMarkers.push(marker);
  });
  if (newMarkers.length) {
    pageState.markers.addLayers(newMarkers);
    pageState.map.fitBounds(pageState.markers.getBounds());
  }
}

var getLoadingSpinner = function getLoadingSpinner() {
  return $(".loading-spinner");
};
var getNoResultsMessage = function getNoResultsMessage() {
  return $("#result-list-container * .w-dyn-empty");
};
var getLoadMoreResultsButton = function getLoadMoreResultsButton() {
  return $("#load-more-results-button");
};
var getAllResultListItems = function getAllResultListItems() {
  return $("#result-list-container .narrow-card_wrapper");
};

function resetFacets() {
  $("#num-matching-projects-field").text("");
  resetDropdown("#government-dropdown");
  resetDropdown("#department-dropdown");
  resetDropdown("#sector-dropdown");
  resetDropdown("#status-dropdown");
  resetDropdown("#primary-funding-source-dropdown");
}

function resetResultList() {
  getAllResultListItems().remove();
  getNoResultsMessage().hide();
  getLoadMoreResultsButton().hide().off("click");
}

function triggerSearch() {
  var pushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (pushHistory) pushState();

  updateFacets();

  resetMapPoints();
  updateMapPoints(buildAllCoordinatesSearchURL());

  resetResultList();
  updateResultList(buildListSearchURL());
};

function populateDownloadCSVButton(response) {
  $("#search-results-download-button").attr("href", response.csv_download_url);
}

function addListResults(response) {
  if (response.results.length) {
    getNoResultsMessage().hide();
    response.results.forEach(function (project) {
      var resultItem = pageState.resultRowTemplate.clone();
      resultItem.attr("href", project.url_path);
      resultItem.find(".narrow-card_title").text(project.name);
      resultItem.find(".narrow-card_middle-column:first").text(project.status);
      resultItem.find(".narrow-card_middle-column:last").text(project.estimated_completion_date);
      resultItem.find(".narrow-card_last-column").remove();
      $("#result-list-container").append(resultItem);
    });

    if (response.next) {
      var nextButton = getLoadMoreResultsButton();
      nextButton.off("click");
      nextButton.on("click", function (e) {
        e.preventDefault();
        updateResultList(response.next);
      });
      nextButton.show();
    }
  } else {
    getNoResultsMessage().show();
  }
}

function showFacetResults(response) {
  $("#num-matching-projects-field").text(response.objects.count);
  updateDropdown("#government-dropdown", response.fields["government_label"], "government_label");
  updateDropdown("#department-dropdown", response.fields["department"], "department");
  updateDropdown("#sector-dropdown", response.fields["sector"], "sector");
  updateDropdown("#primary-funding-source-dropdown", response.fields["primary_funding_source"], "primary_funding_source");

  var statusOptions = (0, _util.sortByOrderArray)(_util.statusOrder, "text", response.fields["status"]);
  updateDropdown("#status-dropdown", statusOptions, "status");
  updateStatusChart(statusOptions);
}

function resetMapPoints() {
  pageState.markers.clearLayers();
}

function resetDropdown(selector) {
  $(selector).find(".text-block").text("");
  $(selector).find(".dropdown-link").remove();
}

function getSelectedOption(fieldName) {
  return pageState.filters[fieldName];
}

function updateDropdown(selector, options, fieldName) {
  var container = $(selector);
  var trigger = container.find(".chart-dropdown_trigger");
  var optionContainer = container.find(".chart-dropdown_list");
  // Replace webflow tap handlers with our own for opening dropdown
  trigger.off("tap").on("click", function () {
    return optionContainer.addClass("w--open");
  });

  var selectedOption = getSelectedOption(fieldName);
  var currentSelectionLabel = container.find(".text-block");

  if (typeof selectedOption == "undefined") {
    currentSelectionLabel.text("All " + facetPlurals[fieldName]);
  } else {
    currentSelectionLabel.text(selectedOption);
  }

  // Add "clear filter" option
  var optionElement = pageState.dropdownItemTemplate.clone();
  optionElement.find(".search-dropdown_label").text("All " + facetPlurals[fieldName]);
  optionElement.click(function (e) {
    e.preventDefault();
    delete pageState.filters[fieldName];
    optionContainer.removeClass("w--open");
    triggerSearch();
  });
  optionContainer.append(optionElement);

  options.forEach(function (option) {
    var optionElement = pageState.dropdownItemTemplate.clone();
    optionElement.find(".search-dropdown_label").text(option.text);
    if (option.count) {
      optionElement.find(".search-dropdown_value").text("(" + option.count + ")");
    }
    optionElement.click(function (e) {
      e.preventDefault();
      pageState.filters[fieldName] = option.text;
      optionContainer.removeClass("w--open");
      triggerSearch();
    });
    optionContainer.append(optionElement);
  });
}

function initSortDropdown() {
  var selector = "#sort-order-dropdown";
  var dropdownItemTemplate = $("#sort-order-dropdown * .dropdown-link--small:first");
  dropdownItemTemplate.find(".sorting-status").remove();
  dropdownItemTemplate.find(".dropdown-label").text("");
  $(selector).find(".text-block").text("");
  $(selector).find(".dropdown-link--small").remove();

  var container = $(selector);
  var optionContainer = container.find(".sorting-dropdown_list");

  container.find(".text-block").text(_util.sortOptions.get(pageState.sortField));

  _util.sortOptions.forEach(function (label, key) {
    var optionElement = dropdownItemTemplate.clone();
    optionElement.find(".dropdown-label").text(label);
    optionElement.click(function (e) {
      e.preventDefault();
      container.find(".text-block").text(label);
      pageState.sortField = key;
      optionContainer.removeClass("w--open");
      triggerSearch();
    });
    optionContainer.append(optionElement);
  });
}

function initStatusChart() {
  var container = (0, _d3Selection.select)("#matching-status-chart-container");
  var boundingRect = container.node().getBoundingClientRect();

  var chart = (0, _reusableBarChart.reusableBarChart)().width(boundingRect.width).height(boundingRect.height).colors(['#65b344', '#65b344']);
  ;

  container.call(chart);

  chart.padding(80);

  return chart;
}

function updateStatusChart(statusOptions) {
  pageState.statusChart.data(statusOptions.map(function (item) {
    return {
      "label": item.text,
      "value": item.count ? item.count : 0
    };
  }));
}

function searchPage(pageData) {

  /** Get templates of dynamically inserted elements **/

  $("#result-list-container .narrow-card_last-header").remove();
  pageState.resultRowTemplate = $("#result-list-container .narrow-card_wrapper:first").clone();
  pageState.resultRowTemplate.find(".narrow-card_icon").remove();

  pageState.dropdownItemTemplate = $("#government-dropdown * .dropdown-link:first");
  pageState.dropdownItemTemplate.find(".search-status").remove();
  pageState.dropdownItemTemplate.find(".search-dropdown_label").text("");
  pageState.dropdownItemTemplate.find(".search-dropdown_value").text("");

  pageState.statusChart = initStatusChart();

  /** initialise stuff **/

  $("#map").empty();
  pageState.map = L.map("map", {
    center: [-30.5595, 22.9375],
    zoom: 4,
    scrollWheelZoom: false
  });
  pageState.markers = L.markerClusterGroup();
  (0, _maps.createTileLayer)().addTo(pageState.map);
  pageState.map.addLayer(pageState.markers);

  /** Set up search triggering events **/

  $("#Infrastructure-Search-Input").keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      // the enter key code
      triggerSearch();
    }
  });
  $("#Search-Button").on("click", function (e) {
    e.preventDefault();
    triggerSearch();
  });
  $("#clear-filters-button").on("click", function (e) {
    e.preventDefault();
    clearFilters();
  });
  window.addEventListener("popstate", onPopstate);

  /**
   * Search on page load
   *
   * Ordering may be important based on setting up and depending on pageState.
   */

  resetFacets();
  resetResultList();
  loadSearchStateFromCurrentURL();
  initSortDropdown();
  triggerSearch(false);
} // end search page

/***/ }),

/***/ "./assets/js/webflow/util.js":
/*!***********************************!*\
  !*** ./assets/js/webflow/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortOptions = exports.statusOrder = undefined;
exports.formatCurrency = formatCurrency;
exports.sortByOrderArray = sortByOrderArray;
exports.coordsAvailable = coordsAvailable;

var _d3Format = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");

function formatCurrency(decimalString) {
  if (decimalString == null) return null;
  return humaniseNumber(parseFloat(decimalString));
}

var humaniseNumber = function humaniseNumber(x, longForm) {
  longForm = longForm == undefined ? true : longForm;
  var suffixBillion = longForm == true ? " billion" : "bn";
  var suffixMillion = longForm == true ? " million" : "m";
  var suffixThousand = longForm == true ? "  thousand" : "k";

  if (Math.abs(x) >= 1000000000) {
    return formatRand(x / 1000000000) + suffixBillion;
  } else if (Math.abs(x) >= 1000000) {
    return formatRand(x / 1000000) + suffixMillion;
  } else if (!longForm && Math.abs(x) >= 100000) {
    return formatRand(x / 1000) + suffixThousand;
  } else {
    return formatRand(x, 0);
  }
};

var formatRand = function formatRand(x, decimals) {
  decimals = decimals == undefined ? 1 : decimals;
  return "R " + (0, _d3Format.format)(",." + decimals + "f")(x);
};

var statusOrder = exports.statusOrder = ["Project Initiation", "Pre - Feasibility", "Feasibility", "Tender", "Design", "Site Handed - Over to Contractor", "Construction 1% - 25%", "Construction 26% - 50%", "Construction 51% - 75%", "Construction 76% - 99%", "Practical Completion (100%)", "Final Completion", "On Hold", "Terminated", "Other - Compensation of Employees", "Other - Packaged Ongoing Project"];

/**
 * Returns a new array of the elements of unsortedArray, ordered according to
 * the order of strings in orderArray.
 *
 * Returns an array that contains one object for each of the union
 * of unique strings in orderArray and sortKey values in unsortedArray objects.
 *
 * Strings in orderArray that don't occur in unsortedArray will result in
 * objects with only they field sortKey with that string.
 *
 * Objects in unsortedArray whose sortKey does not exist in orderArray
 * will appear in unsortedArray order at the end of the returned array.
 */
function sortByOrderArray(orderArray, sortKey, unsortedArray) {
  // Initialise map
  var map = new Map(orderArray.map(function (key) {
    var defaultElement = {};
    defaultElement[sortKey] = key;
    return [key, defaultElement];
  }));

  // Add unsorted elements
  unsortedArray.forEach(function (el) {
    return map.set(el[sortKey], el);
  });

  // Output array
  var sortedArray = [];
  map.forEach(function (val) {
    return sortedArray.push(val);
  });
  return sortedArray;
}

// Ordered map of options. Keys are the query string values to pass to the API.
var sortOptions = exports.sortOptions = new Map([["status_order", "Status (Ascending)"], ["-status_order", "Status (Descending)"], ["estimated_completion_date", "Estimated Project Completion Date (Ascending)"], ["-estimated_completion_date", "Estimated Project Completion Date (Descending)"]]);

function coordsAvailable(lat, lon) {
  // Don't try and parse null
  // Parse because "0" is true
  return lat && parseInt(lat) && lon && parseInt(lon);
}

/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var array = Array.prototype;

var slice = exports.slice = array.slice;
var map = exports.map = array.map;

/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bisectLeft = exports.bisectRight = undefined;

var _ascending = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

var _bisector = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");

var _bisector2 = _interopRequireDefault(_bisector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ascendingBisect = (0, _bisector2.default)(_ascending2.default);
var bisectRight = exports.bisectRight = ascendingBisect.right;
var bisectLeft = exports.bisectLeft = ascendingBisect.left;
exports.default = bisectRight;

/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
      }
      return lo;
    },
    right: function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
      }
      return lo;
    }
  };
};

var _ascending = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ascendingComparator(f) {
  return function (d, x) {
    return (0, _ascending2.default)(f(d), x);
  };
}

/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs.pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
};

var _pairs = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");

/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, f) {
  var v = (0, _variance2.default)(array, f);
  return v ? Math.sqrt(v) : v;
};

var _variance = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");

var _variance2 = _interopRequireDefault(_variance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
};

/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var value = _identity2.default,
      domain = _extent2.default,
      threshold = _sturges2.default;

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = (0, _ticks.tickStep)(x0, x1, tz);
      tz = (0, _range2.default)(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) {
      tz.shift(), --m;
    }while (tz[m - 1] > x1) {
      tz.pop(), --m;
    }var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[(0, _bisect2.default)(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant2.default)(_), histogram) : value;
  };

  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : (0, _constant2.default)([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, _constant2.default)(_array.slice.call(_)) : (0, _constant2.default)(_), histogram) : threshold;
  };

  return histogram;
};

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");

var _bisect = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");

var _bisect2 = _interopRequireDefault(_bisect);

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _extent = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");

var _extent2 = _interopRequireDefault(_extent);

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");

var _identity2 = _interopRequireDefault(_identity);

var _range = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");

var _range2 = _interopRequireDefault(_range);

var _ticks = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");

var _sturges = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");

var _sturges2 = _interopRequireDefault(_sturges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x;
};

/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bisect = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");

Object.defineProperty(exports, "bisect", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bisect).default;
  }
});
Object.defineProperty(exports, "bisectRight", {
  enumerable: true,
  get: function get() {
    return _bisect.bisectRight;
  }
});
Object.defineProperty(exports, "bisectLeft", {
  enumerable: true,
  get: function get() {
    return _bisect.bisectLeft;
  }
});

var _ascending = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");

Object.defineProperty(exports, "ascending", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ascending).default;
  }
});

var _bisector = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");

Object.defineProperty(exports, "bisector", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bisector).default;
  }
});

var _cross = __webpack_require__(/*! ./cross */ "./node_modules/d3-array/src/cross.js");

Object.defineProperty(exports, "cross", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cross).default;
  }
});

var _descending = __webpack_require__(/*! ./descending */ "./node_modules/d3-array/src/descending.js");

Object.defineProperty(exports, "descending", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_descending).default;
  }
});

var _deviation = __webpack_require__(/*! ./deviation */ "./node_modules/d3-array/src/deviation.js");

Object.defineProperty(exports, "deviation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deviation).default;
  }
});

var _extent = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");

Object.defineProperty(exports, "extent", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_extent).default;
  }
});

var _histogram = __webpack_require__(/*! ./histogram */ "./node_modules/d3-array/src/histogram.js");

Object.defineProperty(exports, "histogram", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_histogram).default;
  }
});

var _freedmanDiaconis = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");

Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_freedmanDiaconis).default;
  }
});

var _scott = __webpack_require__(/*! ./threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");

Object.defineProperty(exports, "thresholdScott", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scott).default;
  }
});

var _sturges = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");

Object.defineProperty(exports, "thresholdSturges", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sturges).default;
  }
});

var _max = __webpack_require__(/*! ./max */ "./node_modules/d3-array/src/max.js");

Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_max).default;
  }
});

var _mean = __webpack_require__(/*! ./mean */ "./node_modules/d3-array/src/mean.js");

Object.defineProperty(exports, "mean", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mean).default;
  }
});

var _median = __webpack_require__(/*! ./median */ "./node_modules/d3-array/src/median.js");

Object.defineProperty(exports, "median", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_median).default;
  }
});

var _merge = __webpack_require__(/*! ./merge */ "./node_modules/d3-array/src/merge.js");

Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
  }
});

var _min = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");

Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_min).default;
  }
});

var _pairs = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");

Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pairs).default;
  }
});

var _permute = __webpack_require__(/*! ./permute */ "./node_modules/d3-array/src/permute.js");

Object.defineProperty(exports, "permute", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_permute).default;
  }
});

var _quantile = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");

Object.defineProperty(exports, "quantile", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantile).default;
  }
});

var _range = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");

Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_range).default;
  }
});

var _scan = __webpack_require__(/*! ./scan */ "./node_modules/d3-array/src/scan.js");

Object.defineProperty(exports, "scan", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scan).default;
  }
});

var _shuffle = __webpack_require__(/*! ./shuffle */ "./node_modules/d3-array/src/shuffle.js");

Object.defineProperty(exports, "shuffle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shuffle).default;
  }
});

var _sum = __webpack_require__(/*! ./sum */ "./node_modules/d3-array/src/sum.js");

Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sum).default;
  }
});

var _ticks = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");

Object.defineProperty(exports, "ticks", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ticks).default;
  }
});
Object.defineProperty(exports, "tickIncrement", {
  enumerable: true,
  get: function get() {
    return _ticks.tickIncrement;
  }
});
Object.defineProperty(exports, "tickStep", {
  enumerable: true,
  get: function get() {
    return _ticks.tickStep;
  }
});

var _transpose = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");

Object.defineProperty(exports, "transpose", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_transpose).default;
  }
});

var _variance = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");

Object.defineProperty(exports, "variance", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_variance).default;
  }
});

var _zip = __webpack_require__(/*! ./zip */ "./node_modules/d3-array/src/zip.js");

Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
};

/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(values[i]))) sum += value;else --m;
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(valueof(values[i], i, values)))) sum += value;else --m;
    }
  }

  if (m) return sum / m;
};

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(values[i]))) {
        numbers.push(value);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return (0, _quantile2.default)(numbers.sort(_ascending2.default), 0.5);
};

var _ascending = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");

var _number2 = _interopRequireDefault(_number);

var _quantile = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");

var _quantile2 = _interopRequireDefault(_quantile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) {
    j += arrays[i].length;
  }merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
};

/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
};

/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x === null ? NaN : +x;
};

/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, f) {
  if (f == null) f = pair;
  var i = 0,
      n = array.length - 1,
      p = array[0],
      pairs = new Array(n < 0 ? 0 : n);
  while (i < n) {
    pairs[i] = f(p, p = array[++i]);
  }return pairs;
};

exports.pair = pair;
function pair(a, b) {
  return [a, b];
}

/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, indexes) {
  var i = indexes.length,
      permutes = new Array(i);
  while (i--) {
    permutes[i] = array[indexes[i]];
  }return permutes;
};

/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, p, valueof) {
  if (valueof == null) valueof = _number2.default;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
};

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
};

/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending2.default;

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
};

var _ascending = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
};

/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  } else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
};

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, min, max) {
  values = _array.map.call(values, _number2.default).sort(_ascending2.default);
  return Math.ceil((max - min) / (2 * ((0, _quantile2.default)(values, 0.75) - (0, _quantile2.default)(values, 0.25)) * Math.pow(values.length, -1 / 3)));
};

var _array = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");

var _ascending = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

var _number = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");

var _number2 = _interopRequireDefault(_number);

var _quantile = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");

var _quantile2 = _interopRequireDefault(_quantile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, min, max) {
  return Math.ceil((max - min) / (3.5 * (0, _deviation2.default)(values) * Math.pow(values.length, -1 / 3)));
};

var _deviation = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");

var _deviation2 = _interopRequireDefault(_deviation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
};

/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (start, stop, count) {
    var reverse,
        i = -1,
        n,
        ticks,
        step;

    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

    if (step > 0) {
        start = Math.ceil(start / step);
        stop = Math.floor(stop / step);
        ticks = new Array(n = Math.ceil(stop - start + 1));
        while (++i < n) {
            ticks[i] = (start + i) * step;
        }
    } else {
        start = Math.floor(start * step);
        stop = Math.ceil(stop * step);
        ticks = new Array(n = Math.ceil(start - stop + 1));
        while (++i < n) {
            ticks[i] = (start - i) / step;
        }
    }

    if (reverse) ticks.reverse();

    return ticks;
};

exports.tickIncrement = tickIncrement;
exports.tickStep = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log(step) / Math.LN10),
        error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
    if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = (0, _min2.default)(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
};

var _min = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");

var _min2 = _interopRequireDefault(_min);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function length(d) {
  return d.length;
}

/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = (0, _number2.default)(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
};

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _transpose2.default)(arguments);
};

var _transpose = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");

var _transpose2 = _interopRequireDefault(_transpose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-axis/src/array.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/array.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var slice = exports.slice = Array.prototype.slice;

/***/ }),

/***/ "./node_modules/d3-axis/src/axis.js":
/*!******************************************!*\
  !*** ./node_modules/d3-axis/src/axis.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisTop = axisTop;
exports.axisRight = axisRight;
exports.axisBottom = axisBottom;
exports.axisLeft = axisLeft;

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-axis/src/array.js");

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/d3-axis/src/identity.js");

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function (d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity2.default : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform");
      });

      tickEnter.attr("opacity", epsilon).attr("transform", function (d) {
        var p = this.parentNode.__axis;return transform(p && isFinite(p = p(d)) ? p : position(d));
      });
    }

    tickExit.remove();

    path.attr("d", orient === left || orient == right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1);

    tick.attr("opacity", 1).attr("transform", function (d) {
      return transform(position(d));
    });

    line.attr(x + "2", k * tickSizeInner);

    text.attr(x, k * spacing).text(format);

    selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection.each(function () {
      this.__axis = position;
    });
  }

  axis.scale = function (_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function () {
    return tickArguments = _array.slice.call(arguments), axis;
  };

  axis.tickArguments = function (_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array.slice.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function (_) {
    return arguments.length ? (tickValues = _ == null ? null : _array.slice.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function (_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function (_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function (_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function (_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function (_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

/***/ }),

/***/ "./node_modules/d3-axis/src/identity.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-axis/src/identity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x;
};

/***/ }),

/***/ "./node_modules/d3-axis/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axis = __webpack_require__(/*! ./axis */ "./node_modules/d3-axis/src/axis.js");

Object.defineProperty(exports, "axisTop", {
  enumerable: true,
  get: function get() {
    return _axis.axisTop;
  }
});
Object.defineProperty(exports, "axisRight", {
  enumerable: true,
  get: function get() {
    return _axis.axisRight;
  }
});
Object.defineProperty(exports, "axisBottom", {
  enumerable: true,
  get: function get() {
    return _axis.axisBottom;
  }
});
Object.defineProperty(exports, "axisLeft", {
  enumerable: true,
  get: function get() {
    return _axis.axisLeft;
  }
});

/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var entries = [];
  for (var key in map) {
    entries.push({ key: key, value: map[key] });
  }return entries;
};

/***/ }),

/***/ "./node_modules/d3-collection/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-collection/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nest = __webpack_require__(/*! ./nest */ "./node_modules/d3-collection/src/nest.js");

Object.defineProperty(exports, "nest", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nest).default;
  }
});

var _set = __webpack_require__(/*! ./set */ "./node_modules/d3-collection/src/set.js");

Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_set).default;
  }
});

var _map = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");

Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_map).default;
  }
});

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/d3-collection/src/keys.js");

Object.defineProperty(exports, "keys", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keys).default;
  }
});

var _values = __webpack_require__(/*! ./values */ "./node_modules/d3-collection/src/values.js");

Object.defineProperty(exports, "values", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_values).default;
  }
});

var _entries = __webpack_require__(/*! ./entries */ "./node_modules/d3-collection/src/entries.js");

Object.defineProperty(exports, "entries", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_entries).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var keys = [];
  for (var key in map) {
    keys.push(key);
  }return keys;
};

/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix = exports.prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function has(key) {
    return prefix + key in this;
  },
  get: function get(key) {
    return this[prefix + key];
  },
  set: function set(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function remove(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function clear() {
    for (var property in this) {
      if (property[0] === prefix) delete this[property];
    }
  },
  keys: function keys() {
    var keys = [];
    for (var property in this) {
      if (property[0] === prefix) keys.push(property.slice(1));
    }return keys;
  },
  values: function values() {
    var values = [];
    for (var property in this) {
      if (property[0] === prefix) values.push(this[property]);
    }return values;
  },
  entries: function entries() {
    var entries = [];
    for (var property in this) {
      if (property[0] === prefix) entries.push({ key: property.slice(1), value: this[property] });
    }return entries;
  },
  size: function size() {
    var size = 0;
    for (var property in this) {
      if (property[0] === prefix) ++size;
    }return size;
  },
  empty: function empty() {
    for (var property in this) {
      if (property[0] === prefix) return false;
    }return true;
  },
  each: function each(f) {
    for (var property in this) {
      if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  }
};

function map(object, f) {
  var map = new Map();

  // Copy constructor.
  if (object instanceof Map) object.each(function (value, key) {
    map.set(key, value);
  });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;

      if (f == null) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f(o = object[i], i, object), o);
      }
    }

    // Convert object to map.
    else if (object) for (var key in object) {
        map.set(key, object[key]);
      }return map;
}

exports.default = map;

/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var keys = [],
      _sortKeys = [],
      _sortValues,
      _rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (_sortValues != null) array.sort(_sortValues);
      return _rollup != null ? _rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = (0, _map2.default)(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function (values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function _entries(map, depth) {
    if (++depth > keys.length) return map;
    var array,
        sortKey = _sortKeys[depth - 1];
    if (_rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
      array.push({ key: k, values: _entries(v, depth) });
    });
    return sortKey != null ? array.sort(function (a, b) {
      return sortKey(a.key, b.key);
    }) : array;
  }

  return nest = {
    object: function object(array) {
      return apply(array, 0, createObject, setObject);
    },
    map: function map(array) {
      return apply(array, 0, createMap, setMap);
    },
    entries: function entries(array) {
      return _entries(apply(array, 0, createMap, setMap), 0);
    },
    key: function key(d) {
      keys.push(d);return nest;
    },
    sortKeys: function sortKeys(order) {
      _sortKeys[keys.length - 1] = order;return nest;
    },
    sortValues: function sortValues(order) {
      _sortValues = order;return nest;
    },
    rollup: function rollup(f) {
      _rollup = f;return nest;
    }
  };
};

var _map = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return (0, _map2.default)();
}

function setMap(map, key, value) {
  map.set(key, value);
}

/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Set() {}

var proto = _map2.default.prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function add(value) {
    value += "";
    this[_map.prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set();

  // Copy constructor.
  if (object instanceof Set) object.each(function (value) {
    set.add(value);
  });

  // Otherwise, assume it’s an array.
  else if (object) {
      var i = -1,
          n = object.length;
      if (f == null) while (++i < n) {
        set.add(object[i]);
      } else while (++i < n) {
        set.add(f(object[i], i, object));
      }
    }

  return set;
}

exports.default = set;

/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (map) {
  var values = [];
  for (var key in map) {
    values.push(map[key]);
  }return values;
};

/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brighter = exports.darker = undefined;
exports.Color = Color;
exports.default = color;
exports.rgbConvert = rgbConvert;
exports.rgb = rgb;
exports.Rgb = Rgb;
exports.hslConvert = hslConvert;
exports.hsl = hsl;

var _define = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");

var _define2 = _interopRequireDefault(_define);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Color() {}

var _darker = 0.7;
exports.darker = _darker;
var _brighter = 1 / _darker;

exports.brighter = _brighter;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0, _define2.default)(Color, color, {
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: function hex() {
    return this.rgb().hex();
  },
  toString: function toString() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Rgb, rgb, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: function hex() {
    return "#" + _hex(this.r) + _hex(this.g) + _hex(this.b);
  },
  toString: function toString() {
    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function _hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hsl, hsl, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cubehelix;
exports.Cubehelix = Cubehelix;

var _define = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");

var _math = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _color.darker : Math.pow(_color.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

exports.extend = extend;
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) {
    prototype[key] = definition[key];
  }return prototype;
}

/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");

Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});
Object.defineProperty(exports, "rgb", {
  enumerable: true,
  get: function get() {
    return _color.rgb;
  }
});
Object.defineProperty(exports, "hsl", {
  enumerable: true,
  get: function get() {
    return _color.hsl;
  }
});

var _lab = __webpack_require__(/*! ./lab */ "./node_modules/d3-color/src/lab.js");

Object.defineProperty(exports, "lab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});
Object.defineProperty(exports, "hcl", {
  enumerable: true,
  get: function get() {
    return _lab.hcl;
  }
});
Object.defineProperty(exports, "lch", {
  enumerable: true,
  get: function get() {
    return _lab.lch;
  }
});
Object.defineProperty(exports, "gray", {
  enumerable: true,
  get: function get() {
    return _lab.gray;
  }
});

var _cubehelix = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-color/src/cubehelix.js");

Object.defineProperty(exports, "cubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gray = gray;
exports.default = lab;
exports.Lab = Lab;
exports.lch = lch;
exports.hcl = hcl;
exports.Hcl = Hcl;

var _define = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");

var _math = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math.deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
      x,
      z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Lab, lab, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math.rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb() {
    return labConvert(this).rgb();
  }
}));

/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deg2rad = exports.deg2rad = Math.PI / 180;
var rad2deg = exports.rad2deg = 180 / Math.PI;

/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = { value: function value() {} };

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: name };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      }return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;
    for (var t in _) {
      copy[t] = _[t].slice();
    }return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name: name, value: callback });
  return type;
}

exports.default = dispatch;

/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatch = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-dispatch/src/dispatch.js");

Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dispatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var overshoot = 1.70158;

var backIn = exports.backIn = function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
}(overshoot);

var backOut = exports.backOut = function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
}(overshoot);

var backInOut = exports.backInOut = function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
}(overshoot);

/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounceIn = bounceIn;
exports.bounceOut = bounceOut;
exports.bounceInOut = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleIn = circleIn;
exports.circleOut = circleOut;
exports.circleInOut = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicIn = cubicIn;
exports.cubicOut = cubicOut;
exports.cubicInOut = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = exports.elasticIn = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticIn.period = function (p) {
    return custom(a, p);
  };

  return elasticIn;
}(amplitude, period);

var elasticOut = exports.elasticOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticOut.period = function (p) {
    return custom(a, p);
  };

  return elasticOut;
}(amplitude, period);

var elasticInOut = exports.elasticInOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticInOut.period = function (p) {
    return custom(a, p);
  };

  return elasticInOut;
}(amplitude, period);

/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expIn = expIn;
exports.expOut = expOut;
exports.expInOut = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linear = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-ease/src/linear.js");

Object.defineProperty(exports, "easeLinear", {
  enumerable: true,
  get: function get() {
    return _linear.linear;
  }
});

var _quad = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-ease/src/quad.js");

Object.defineProperty(exports, "easeQuad", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});
Object.defineProperty(exports, "easeQuadIn", {
  enumerable: true,
  get: function get() {
    return _quad.quadIn;
  }
});
Object.defineProperty(exports, "easeQuadOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadOut;
  }
});
Object.defineProperty(exports, "easeQuadInOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});

var _cubic = __webpack_require__(/*! ./cubic.js */ "./node_modules/d3-ease/src/cubic.js");

Object.defineProperty(exports, "easeCubic", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});
Object.defineProperty(exports, "easeCubicIn", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicIn;
  }
});
Object.defineProperty(exports, "easeCubicOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicOut;
  }
});
Object.defineProperty(exports, "easeCubicInOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});

var _poly = __webpack_require__(/*! ./poly.js */ "./node_modules/d3-ease/src/poly.js");

Object.defineProperty(exports, "easePoly", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});
Object.defineProperty(exports, "easePolyIn", {
  enumerable: true,
  get: function get() {
    return _poly.polyIn;
  }
});
Object.defineProperty(exports, "easePolyOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyOut;
  }
});
Object.defineProperty(exports, "easePolyInOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});

var _sin = __webpack_require__(/*! ./sin.js */ "./node_modules/d3-ease/src/sin.js");

Object.defineProperty(exports, "easeSin", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});
Object.defineProperty(exports, "easeSinIn", {
  enumerable: true,
  get: function get() {
    return _sin.sinIn;
  }
});
Object.defineProperty(exports, "easeSinOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinOut;
  }
});
Object.defineProperty(exports, "easeSinInOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});

var _exp = __webpack_require__(/*! ./exp.js */ "./node_modules/d3-ease/src/exp.js");

Object.defineProperty(exports, "easeExp", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});
Object.defineProperty(exports, "easeExpIn", {
  enumerable: true,
  get: function get() {
    return _exp.expIn;
  }
});
Object.defineProperty(exports, "easeExpOut", {
  enumerable: true,
  get: function get() {
    return _exp.expOut;
  }
});
Object.defineProperty(exports, "easeExpInOut", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});

var _circle = __webpack_require__(/*! ./circle.js */ "./node_modules/d3-ease/src/circle.js");

Object.defineProperty(exports, "easeCircle", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});
Object.defineProperty(exports, "easeCircleIn", {
  enumerable: true,
  get: function get() {
    return _circle.circleIn;
  }
});
Object.defineProperty(exports, "easeCircleOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleOut;
  }
});
Object.defineProperty(exports, "easeCircleInOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});

var _bounce = __webpack_require__(/*! ./bounce.js */ "./node_modules/d3-ease/src/bounce.js");

Object.defineProperty(exports, "easeBounce", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceIn", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceIn;
  }
});
Object.defineProperty(exports, "easeBounceOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceInOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceInOut;
  }
});

var _back = __webpack_require__(/*! ./back.js */ "./node_modules/d3-ease/src/back.js");

Object.defineProperty(exports, "easeBack", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});
Object.defineProperty(exports, "easeBackIn", {
  enumerable: true,
  get: function get() {
    return _back.backIn;
  }
});
Object.defineProperty(exports, "easeBackOut", {
  enumerable: true,
  get: function get() {
    return _back.backOut;
  }
});
Object.defineProperty(exports, "easeBackInOut", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});

var _elastic = __webpack_require__(/*! ./elastic.js */ "./node_modules/d3-ease/src/elastic.js");

Object.defineProperty(exports, "easeElastic", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticIn", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticIn;
  }
});
Object.defineProperty(exports, "easeElasticOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticInOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticInOut;
  }
});

/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;
function linear(t) {
  return +t;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var exponent = 3;

var polyIn = exports.polyIn = function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
}(exponent);

var polyOut = exports.polyOut = function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
}(exponent);

var polyInOut = exports.polyInOut = function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
}(exponent);

/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quadIn = quadIn;
exports.quadOut = quadOut;
exports.quadInOut = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sinIn = sinIn;
exports.sinOut = sinOut;
exports.sinInOut = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrefix = exports.format = undefined;
exports.default = defaultLocale;

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale;
var format = exports.format = undefined;
var formatPrefix = exports.formatPrefix = undefined;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = (0, _locale2.default)(definition);
  exports.format = format = locale.format;
  exports.formatPrefix = formatPrefix = locale.formatPrefix;
  return locale;
}

/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x = (0, _formatDecimal2.default)(Math.abs(x)), x ? x[1] : NaN;
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i,
      coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
};

/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
};

/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
};

/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prefixExponent = undefined;

exports.default = function (x, p) {
    var d = (0, _formatDecimal2.default)(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (exports.prefixExponent = prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimal2.default)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixExponent = exports.prefixExponent = undefined;

/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (x, p) {
    var d = (0, _formatDecimal2.default)(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;break;
      case "0":
        if (i0 === 0) i0 = i;i1 = i;break;
      default:
        if (i0 > 0) {
          if (!+s[i]) break out;i0 = 0;
        }break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatPrefixAuto = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");

var _formatPrefixAuto2 = _interopRequireDefault(_formatPrefixAuto);

var _formatRounded = __webpack_require__(/*! ./formatRounded */ "./node_modules/d3-format/src/formatRounded.js");

var _formatRounded2 = _interopRequireDefault(_formatRounded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "%": function _(x, p) {
    return (x * 100).toFixed(p);
  },
  "b": function b(x) {
    return Math.round(x).toString(2);
  },
  "c": function c(x) {
    return x + "";
  },
  "d": function d(x) {
    return Math.round(x).toString(10);
  },
  "e": function e(x, p) {
    return x.toExponential(p);
  },
  "f": function f(x, p) {
    return x.toFixed(p);
  },
  "g": function g(x, p) {
    return x.toPrecision(p);
  },
  "o": function o(x) {
    return Math.round(x).toString(8);
  },
  "p": function p(x, _p) {
    return (0, _formatRounded2.default)(x * 100, _p);
  },
  "r": _formatRounded2.default,
  "s": _formatPrefixAuto2.default,
  "X": function X(x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  "x": function x(_x) {
    return Math.round(_x).toString(16);
  }
};

/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x;
};

/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultLocale = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-format/src/defaultLocale.js");

Object.defineProperty(exports, "formatDefaultLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultLocale).default;
  }
});
Object.defineProperty(exports, "format", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.format;
  }
});
Object.defineProperty(exports, "formatPrefix", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.formatPrefix;
  }
});

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");

Object.defineProperty(exports, "formatLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_locale).default;
  }
});

var _formatSpecifier = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");

Object.defineProperty(exports, "formatSpecifier", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_formatSpecifier).default;
  }
});

var _precisionFixed = __webpack_require__(/*! ./precisionFixed */ "./node_modules/d3-format/src/precisionFixed.js");

Object.defineProperty(exports, "precisionFixed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionFixed).default;
  }
});

var _precisionPrefix = __webpack_require__(/*! ./precisionPrefix */ "./node_modules/d3-format/src/precisionPrefix.js");

Object.defineProperty(exports, "precisionPrefix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionPrefix).default;
  }
});

var _precisionRound = __webpack_require__(/*! ./precisionRound */ "./node_modules/d3-format/src/precisionRound.js");

Object.defineProperty(exports, "precisionRound", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionRound).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (locale) {
  var group = locale.grouping && locale.thousands ? (0, _formatGroup2.default)(locale.grouping, locale.thousands) : _identity2.default,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? (0, _formatNumerals2.default)(locale.numerals) : _identity2.default,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = (0, _formatSpecifier2.default)(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes2.default[type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes2.default[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = (0, _formatTrim2.default)(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);break;
        default:
          value = padding + valuePrefix + value + valueSuffix;break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0, _formatSpecifier2.default)(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
};

var _exponent = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

var _formatGroup = __webpack_require__(/*! ./formatGroup */ "./node_modules/d3-format/src/formatGroup.js");

var _formatGroup2 = _interopRequireDefault(_formatGroup);

var _formatNumerals = __webpack_require__(/*! ./formatNumerals */ "./node_modules/d3-format/src/formatNumerals.js");

var _formatNumerals2 = _interopRequireDefault(_formatNumerals);

var _formatSpecifier = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");

var _formatSpecifier2 = _interopRequireDefault(_formatSpecifier);

var _formatTrim = __webpack_require__(/*! ./formatTrim */ "./node_modules/d3-format/src/formatTrim.js");

var _formatTrim2 = _interopRequireDefault(_formatTrim);

var _formatTypes = __webpack_require__(/*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js");

var _formatTypes2 = _interopRequireDefault(_formatTypes);

var _formatPrefixAuto = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/d3-format/src/identity.js");

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step) {
  return Math.max(0, -(0, _exponent2.default)(Math.abs(step)));
};

var _exponent = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3 - (0, _exponent2.default)(Math.abs(step)));
};

var _exponent = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, (0, _exponent2.default)(max) - (0, _exponent2.default)(step)) + 1;
};

var _exponent = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = (0, _value2.default)(a[i], b[i]);
  }for (; i < nb; ++i) {
    c[i] = b[i];
  }return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }return c;
  };
};

var _value = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basis = basis;

exports.default = function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0, _basis.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
};

var _basis = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hue = hue;
exports.gamma = gamma;
exports.default = nogamma;

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : (0, _constant2.default)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubehelixLong = undefined;

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h),
          s = (0, _color2.default)(start.s, end.s),
          l = (0, _color2.default)(start.l, end.l),
          opacity = (0, _color2.default)(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  }(1);
}

exports.default = cubehelix(_color.hue);
var cubehelixLong = exports.cubehelixLong = cubehelix(_color2.default);

/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var d = new Date();
  return a = +a, b -= a, function (t) {
    return d.setTime(a + b * t), d;
  };
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hclLong = undefined;

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hcl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hcl)(start)).h, (end = (0, _d3Color.hcl)(end)).h),
        c = (0, _color2.default)(start.c, end.c),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hcl(_color.hue);
var hclLong = exports.hclLong = hcl(_color2.default);

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslLong = undefined;

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hsl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hsl)(start)).h, (end = (0, _d3Color.hsl)(end)).h),
        s = (0, _color2.default)(start.s, end.s),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hsl(_color.hue);
var hslLong = exports.hslLong = hsl(_color2.default);

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var i = (0, _color.hue)(+a, +b);
  return function (t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
};

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _value = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");

Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_value).default;
  }
});

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");

Object.defineProperty(exports, "interpolateArray", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_array).default;
  }
});

var _basis = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");

Object.defineProperty(exports, "interpolateBasis", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basis).default;
  }
});

var _basisClosed = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");

Object.defineProperty(exports, "interpolateBasisClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basisClosed).default;
  }
});

var _date = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");

Object.defineProperty(exports, "interpolateDate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_date).default;
  }
});

var _discrete = __webpack_require__(/*! ./discrete */ "./node_modules/d3-interpolate/src/discrete.js");

Object.defineProperty(exports, "interpolateDiscrete", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_discrete).default;
  }
});

var _hue = __webpack_require__(/*! ./hue */ "./node_modules/d3-interpolate/src/hue.js");

Object.defineProperty(exports, "interpolateHue", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hue).default;
  }
});

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");

Object.defineProperty(exports, "interpolateNumber", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_number).default;
  }
});

var _object = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");

Object.defineProperty(exports, "interpolateObject", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_object).default;
  }
});

var _round = __webpack_require__(/*! ./round */ "./node_modules/d3-interpolate/src/round.js");

Object.defineProperty(exports, "interpolateRound", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_round).default;
  }
});

var _string = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");

Object.defineProperty(exports, "interpolateString", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _index = __webpack_require__(/*! ./transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");

Object.defineProperty(exports, "interpolateTransformCss", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformCss;
  }
});
Object.defineProperty(exports, "interpolateTransformSvg", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformSvg;
  }
});

var _zoom = __webpack_require__(/*! ./zoom */ "./node_modules/d3-interpolate/src/zoom.js");

Object.defineProperty(exports, "interpolateZoom", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zoom).default;
  }
});

var _rgb = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");

Object.defineProperty(exports, "interpolateRgb", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rgb).default;
  }
});
Object.defineProperty(exports, "interpolateRgbBasis", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasis;
  }
});
Object.defineProperty(exports, "interpolateRgbBasisClosed", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasisClosed;
  }
});

var _hsl = __webpack_require__(/*! ./hsl */ "./node_modules/d3-interpolate/src/hsl.js");

Object.defineProperty(exports, "interpolateHsl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hsl).default;
  }
});
Object.defineProperty(exports, "interpolateHslLong", {
  enumerable: true,
  get: function get() {
    return _hsl.hslLong;
  }
});

var _lab = __webpack_require__(/*! ./lab */ "./node_modules/d3-interpolate/src/lab.js");

Object.defineProperty(exports, "interpolateLab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});

var _hcl = __webpack_require__(/*! ./hcl */ "./node_modules/d3-interpolate/src/hcl.js");

Object.defineProperty(exports, "interpolateHcl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hcl).default;
  }
});
Object.defineProperty(exports, "interpolateHclLong", {
  enumerable: true,
  get: function get() {
    return _hcl.hclLong;
  }
});

var _cubehelix = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");

Object.defineProperty(exports, "interpolateCubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});
Object.defineProperty(exports, "interpolateCubehelixLong", {
  enumerable: true,
  get: function get() {
    return _cubehelix.cubehelixLong;
  }
});

var _piecewise = __webpack_require__(/*! ./piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");

Object.defineProperty(exports, "piecewise", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_piecewise).default;
  }
});

var _quantize = __webpack_require__(/*! ./quantize */ "./node_modules/d3-interpolate/src/quantize.js");

Object.defineProperty(exports, "quantize", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantize).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lab;

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lab(start, end) {
  var l = (0, _color2.default)((start = (0, _d3Color.lab)(start)).l, (end = (0, _d3Color.lab)(end)).l),
      a = (0, _color2.default)(start.a, end.a),
      b = (0, _color2.default)(start.b, end.b),
      opacity = (0, _color2.default)(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return a + b * t;
  };
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
  if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0, _value2.default)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }return c;
  };
};

var _value = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = piecewise;
function piecewise(interpolate, values) {
  var i = 0,
      n = values.length - 1,
      v = values[0],
      I = new Array(n < 0 ? 0 : n);
  while (i < n) {
    I[i] = interpolate(v, v = values[++i]);
  }return function (t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) {
    samples[i] = interpolator(i / (n - 1));
  }return samples;
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbBasisClosed = exports.rgbBasis = undefined;

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _basis = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");

var _basis2 = _interopRequireDefault(_basis);

var _basisClosed = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");

var _basisClosed2 = _interopRequireDefault(_basisClosed);

var _color = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function rgbGamma(y) {
  var color = (0, _color.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
}(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;
    for (i = 0; i < n; ++i) {
      color = (0, _d3Color.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = exports.rgbBasis = rgbSpline(_basis2.default);
var rgbBasisClosed = exports.rgbBasisClosed = rgbSpline(_basisClosed2.default);

/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return Math.round(a + b * t);
  };
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: (0, _number2.default)(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }return s.join("");
  });
};

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var degrees = 180 / Math.PI;

var identity = exports.identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateTransformSvg = exports.interpolateTransformCss = undefined;

var _number = __webpack_require__(/*! ../number */ "./node_modules/d3-interpolate/src/number.js");

var _number2 = _interopRequireDefault(_number);

var _parse = __webpack_require__(/*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function (t) {
      var i = -1,
          n = q.length,
          o;
      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }return s.join("");
    };
  };
}

var interpolateTransformCss = exports.interpolateTransformCss = interpolateTransform(_parse.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = exports.interpolateTransformSvg = interpolateTransform(_parse.parseSvg, ", ", ")", ")");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCss = parseCss;
exports.parseSvg = parseSvg;

var _decompose = __webpack_require__(/*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js");

var _decompose2 = _interopRequireDefault(_decompose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssNode, cssRoot, cssView, svgNode;

function parseCss(value) {
  if (value === "none") return _decompose.identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return (0, _decompose2.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose.identity;
  value = value.matrix;
  return (0, _decompose2.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
    var t = typeof b === "undefined" ? "undefined" : _typeof(b),
        c;
    return b == null || t === "boolean" ? (0, _constant2.default)(b) : (t === "number" ? _number2.default : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgb2.default) : _string2.default : b instanceof _d3Color.color ? _rgb2.default : b instanceof Date ? _date2.default : Array.isArray(b) ? _array2.default : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object2.default : _number2.default)(a, b);
};

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _rgb = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");

var _rgb2 = _interopRequireDefault(_rgb);

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");

var _array2 = _interopRequireDefault(_array);

var _date = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");

var _date2 = _interopRequireDefault(_date);

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");

var _string2 = _interopRequireDefault(_string);

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (p0, p1) {
  var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function i(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  }

  // General case.
  else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }

  i.duration = S * 1000;

  return i;
};

var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]

/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(/*! ./path */ "./node_modules/d3-path/src/path.js");

Object.defineProperty(exports, "path", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_path).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function moveTo(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function lineTo(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ;

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21;

            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
  },
  arc: function arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
  },
  rect: function rect(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function toString() {
    return this._;
  }
};

exports.default = path;

/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var array = Array.prototype;

var map = exports.map = array.map;
var slice = exports.slice = array.slice;

/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = band;
exports.point = point;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var _ordinal = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");

var _ordinal2 = _interopRequireDefault(_ordinal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function band() {
  var scale = (0, _ordinal2.default)().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = (0, _d3Array.range)(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function (_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function () {
    return bandwidth;
  };

  scale.step = function () {
    return step;
  };

  scale.round = function (_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function (_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function (_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function () {
    return band(domain(), range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };

  return _init.initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function () {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;
exports.copy = copy;
exports.transformer = transformer;
exports.default = continuous;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _d3Interpolate = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _constant = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : (0, _constant2.default)(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0],
      b = domain[domain.length - 1],
      t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function (x) {
    var i = (0, _d3Array.bisect)(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = _d3Interpolate.interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), _d3Interpolate.interpolateNumber)))(y)));
  };

  scale.domain = function (_) {
    return arguments.length ? (domain = _array.map.call(_, _number2.default), clamp === identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array.slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = _array.slice.call(_), interpolate = _d3Interpolate.interpolateRound, rescale();
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity, scale) : clamp !== identity;
  };

  scale.interpolate = function (_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diverging;
exports.divergingLog = divergingLog;
exports.divergingSymlog = divergingSymlog;
exports.divergingPow = divergingPow;
exports.divergingSqrt = divergingSqrt;

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _log = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");

var _sequential = __webpack_require__(/*! ./sequential */ "./node_modules/d3-scale/src/sequential.js");

var _symlog = __webpack_require__(/*! ./symlog */ "./node_modules/d3-scale/src/symlog.js");

var _pow = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");

function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous.identity,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = (0, _linear.linearish)(transformer()(_continuous.identity));

  scale.copy = function () {
    return (0, _sequential.copy)(scale, diverging());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function divergingLog() {
  var scale = (0, _log.loggish)(transformer()).domain([0.1, 1, 10]);

  scale.copy = function () {
    return (0, _sequential.copy)(scale, divergingLog()).base(scale.base());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = (0, _symlog.symlogish)(transformer());

  scale.copy = function () {
    return (0, _sequential.copy)(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function divergingPow() {
  var scale = (0, _pow.powish)(transformer());

  scale.copy = function () {
    return (0, _sequential.copy)(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _number = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function (_) {
    return arguments.length ? (domain = _array.map.call(_, _number2.default), scale) : domain.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? _array.map.call(domain, _number2.default) : [0, 1];

  return (0, _linear.linearish)(scale);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _band = __webpack_require__(/*! ./band */ "./node_modules/d3-scale/src/band.js");

Object.defineProperty(exports, "scaleBand", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_band).default;
  }
});
Object.defineProperty(exports, "scalePoint", {
  enumerable: true,
  get: function get() {
    return _band.point;
  }
});

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/d3-scale/src/identity.js");

Object.defineProperty(exports, "scaleIdentity", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_identity).default;
  }
});

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

Object.defineProperty(exports, "scaleLinear", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linear).default;
  }
});

var _log = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");

Object.defineProperty(exports, "scaleLog", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_log).default;
  }
});

var _symlog = __webpack_require__(/*! ./symlog */ "./node_modules/d3-scale/src/symlog.js");

Object.defineProperty(exports, "scaleSymlog", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_symlog).default;
  }
});

var _ordinal = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");

Object.defineProperty(exports, "scaleOrdinal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ordinal).default;
  }
});
Object.defineProperty(exports, "scaleImplicit", {
  enumerable: true,
  get: function get() {
    return _ordinal.implicit;
  }
});

var _pow = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");

Object.defineProperty(exports, "scalePow", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pow).default;
  }
});
Object.defineProperty(exports, "scaleSqrt", {
  enumerable: true,
  get: function get() {
    return _pow.sqrt;
  }
});

var _quantile = __webpack_require__(/*! ./quantile */ "./node_modules/d3-scale/src/quantile.js");

Object.defineProperty(exports, "scaleQuantile", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantile).default;
  }
});

var _quantize = __webpack_require__(/*! ./quantize */ "./node_modules/d3-scale/src/quantize.js");

Object.defineProperty(exports, "scaleQuantize", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantize).default;
  }
});

var _threshold = __webpack_require__(/*! ./threshold */ "./node_modules/d3-scale/src/threshold.js");

Object.defineProperty(exports, "scaleThreshold", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_threshold).default;
  }
});

var _time = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");

Object.defineProperty(exports, "scaleTime", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_time).default;
  }
});

var _utcTime = __webpack_require__(/*! ./utcTime */ "./node_modules/d3-scale/src/utcTime.js");

Object.defineProperty(exports, "scaleUtc", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcTime).default;
  }
});

var _sequential = __webpack_require__(/*! ./sequential */ "./node_modules/d3-scale/src/sequential.js");

Object.defineProperty(exports, "scaleSequential", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sequential).default;
  }
});
Object.defineProperty(exports, "scaleSequentialLog", {
  enumerable: true,
  get: function get() {
    return _sequential.sequentialLog;
  }
});
Object.defineProperty(exports, "scaleSequentialPow", {
  enumerable: true,
  get: function get() {
    return _sequential.sequentialPow;
  }
});
Object.defineProperty(exports, "scaleSequentialSqrt", {
  enumerable: true,
  get: function get() {
    return _sequential.sequentialSqrt;
  }
});
Object.defineProperty(exports, "scaleSequentialSymlog", {
  enumerable: true,
  get: function get() {
    return _sequential.sequentialSymlog;
  }
});

var _sequentialQuantile = __webpack_require__(/*! ./sequentialQuantile */ "./node_modules/d3-scale/src/sequentialQuantile.js");

Object.defineProperty(exports, "scaleSequentialQuantile", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sequentialQuantile).default;
  }
});

var _diverging = __webpack_require__(/*! ./diverging */ "./node_modules/d3-scale/src/diverging.js");

Object.defineProperty(exports, "scaleDiverging", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_diverging).default;
  }
});
Object.defineProperty(exports, "scaleDivergingLog", {
  enumerable: true,
  get: function get() {
    return _diverging.divergingLog;
  }
});
Object.defineProperty(exports, "scaleDivergingPow", {
  enumerable: true,
  get: function get() {
    return _diverging.divergingPow;
  }
});
Object.defineProperty(exports, "scaleDivergingSqrt", {
  enumerable: true,
  get: function get() {
    return _diverging.divergingSqrt;
  }
});
Object.defineProperty(exports, "scaleDivergingSymlog", {
  enumerable: true,
  get: function get() {
    return _diverging.divergingSymlog;
  }
});

var _tickFormat = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");

Object.defineProperty(exports, "tickFormat", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tickFormat).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRange = initRange;
exports.initInterpolator = initInterpolator;
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);break;
    default:
      this.range(range).domain(domain);break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.interpolator(domain);break;
    default:
      this.interpolator(interpolator).domain(domain);break;
  }
  return this;
}

/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearish = linearish;
exports.default = linear;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _continuous2 = _interopRequireDefault(_continuous);

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var _tickFormat = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");

var _tickFormat2 = _interopRequireDefault(_tickFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function (count) {
    var d = domain();
    return (0, _d3Array.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return (0, _tickFormat2.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function (count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = (0, _d3Array.tickIncrement)(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = (0, _d3Array.tickIncrement)(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = (0, _d3Array.tickIncrement)(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = (0, _continuous2.default)(_continuous.identity, _continuous.identity);

  scale.copy = function () {
    return (0, _continuous.copy)(scale, linear());
  };

  _init.initRange.apply(scale, arguments);

  return linearish(scale);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loggish = loggish;
exports.default = log;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _d3Format = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");

var _nice = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");

var _nice2 = _interopRequireDefault(_nice);

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
    return Math.pow(base, x);
  };
}

function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
    return Math.log(x) / base;
  });
}

function reflect(f) {
  return function (x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function (_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function (count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = (0, _d3Array.ticks)(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function (count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = (0, _d3Format.format)(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function (d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function () {
    return domain((0, _nice2.default)(domain(), {
      floor: function floor(x) {
        return pows(Math.floor(logs(x)));
      },
      ceil: function ceil(x) {
        return pows(Math.ceil(logs(x)));
      }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish((0, _continuous.transformer)()).domain([1, 10]);

  scale.copy = function () {
    return (0, _continuous.copy)(scale, log()).base(scale.base());
  };

  _init.initRange.apply(scale, arguments);

  return scale;
}

/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
};

/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return +x;
};

/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implicit = undefined;
exports.default = ordinal;

var _d3Collection = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var implicit = exports.implicit = { name: "implicit" };

function ordinal() {
  var index = (0, _d3Collection.map)(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "",
        i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = (0, _d3Collection.map)();
    var i = -1,
        n = _.length,
        d,
        key;
    while (++i < n) {
      if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    }return scale;
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array.slice.call(_), scale) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };

  _init.initRange.apply(scale, arguments);

  return scale;
}

/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.powish = powish;
exports.default = pow;
exports.sqrt = sqrt;

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function transformPow(exponent) {
  return function (x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous.identity, _continuous.identity),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous.identity, _continuous.identity) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function (_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return (0, _linear.linearish)(scale);
}

function pow() {
  var scale = powish((0, _continuous.transformer)());

  scale.copy = function () {
    return (0, _continuous.copy)(scale, pow()).exponent(scale.exponent());
  };

  _init.initRange.apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quantile;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0,
        n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) {
      thresholds[i - 1] = (0, _d3Array.quantile)(domain, i / n);
    }return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[(0, _d3Array.bisect)(thresholds, x)];
  }

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) {
      if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    }domain.sort(_d3Array.ascending);
    return rescale();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array.slice.call(_), rescale()) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function () {
    return thresholds.slice();
  };

  scale.copy = function () {
    return quantile().domain(domain).range(range).unknown(unknown);
  };

  return _init.initRange.apply(scale, arguments);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quantize;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[(0, _d3Array.bisect)(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) {
      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    }return scale;
  }

  scale.domain = function (_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function (_) {
    return arguments.length ? (n = (range = _array.slice.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function () {
    return domain.slice();
  };

  scale.copy = function () {
    return quantize().domain([x0, x1]).range(range).unknown(unknown);
  };

  return _init.initRange.apply((0, _linear.linearish)(scale), arguments);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = copy;
exports.default = sequential;
exports.sequentialLog = sequentialLog;
exports.sequentialSymlog = sequentialSymlog;
exports.sequentialPow = sequentialPow;
exports.sequentialSqrt = sequentialSqrt;

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _log = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");

var _symlog = __webpack_require__(/*! ./symlog */ "./node_modules/d3-scale/src/symlog.js");

var _pow = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");

function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous.identity,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}

function sequential() {
  var scale = (0, _linear.linearish)(transformer()(_continuous.identity));

  scale.copy = function () {
    return copy(scale, sequential());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function sequentialLog() {
  var scale = (0, _log.loggish)(transformer()).domain([1, 10]);

  scale.copy = function () {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = (0, _symlog.symlogish)(transformer());

  scale.copy = function () {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function sequentialPow() {
  var scale = (0, _pow.powish)(transformer());

  scale.copy = function () {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init.initInterpolator.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sequentialQuantile;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous.identity;

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator(((0, _d3Array.bisect)(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) {
      if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    }domain.sort(_d3Array.ascending);
    return scale;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function () {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init.initInterpolator.apply(scale, arguments);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symlogish = symlogish;
exports.default = symlog;

var _linear = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function transformSymlog(c) {
  return function (x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function (x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1,
      scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function (_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return (0, _linear.linearish)(scale);
}

function symlog() {
  var scale = symlogish((0, _continuous.transformer)());

  scale.copy = function () {
    return (0, _continuous.copy)(scale, symlog()).constant(scale.constant());
  };

  return _init.initRange.apply(scale, arguments);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = threshold;

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[(0, _d3Array.bisect)(domain, x, 0, n)] : unknown;
  }

  scale.domain = function (_) {
    return arguments.length ? (domain = _array.slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array.slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return threshold().domain(domain).range(range).unknown(unknown);
  };

  return _init.initRange.apply(scale, arguments);
}

/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (start, stop, count, specifier) {
  var step = (0, _d3Array.tickStep)(start, stop, count),
      precision;
  specifier = (0, _d3Format.formatSpecifier)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionPrefix)(step, value))) specifier.precision = precision;
        return (0, _d3Format.formatPrefix)(specifier, value);
      }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }
  return (0, _d3Format.format)(specifier);
};

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _d3Format = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");

/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = calendar;

exports.default = function () {
  return _init.initRange.apply(calendar(_d3Time.timeYear, _d3Time.timeMonth, _d3Time.timeWeek, _d3Time.timeDay, _d3Time.timeHour, _d3Time.timeMinute, _d3Time.timeSecond, _d3Time.timeMillisecond, _d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
};

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _d3Time = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");

var _d3TimeFormat = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");

var _continuous = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");

var _continuous2 = _interopRequireDefault(_continuous);

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

var _nice = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");

var _nice2 = _interopRequireDefault(_nice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = (0, _continuous2.default)(_continuous.identity, _continuous.identity),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = (0, _d3Array.bisector)(function (i) {
        return i[2];
      }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = (0, _d3Array.tickStep)(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max((0, _d3Array.tickStep)(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function (y) {
    return new Date(invert(y));
  };

  scale.domain = function (_) {
    return arguments.length ? domain(_array.map.call(_, number)) : domain().map(date);
  };

  scale.ticks = function (interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function (interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain((0, _nice2.default)(d, interval)) : scale;
  };

  scale.copy = function () {
    return (0, _continuous.copy)(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _init.initRange.apply((0, _time.calendar)(_d3Time.utcYear, _d3Time.utcMonth, _d3Time.utcWeek, _d3Time.utcDay, _d3Time.utcHour, _d3Time.utcMinute, _d3Time.utcSecond, _d3Time.utcMillisecond, _d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
};

var _time = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");

var _d3TimeFormat = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");

var _d3Time = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");

var _init = __webpack_require__(/*! ./init */ "./node_modules/d3-scale/src/init.js");

/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return (0, _select2.default)((0, _creator2.default)(name).call(document.documentElement));
};

var _creator = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");

var _creator2 = _interopRequireDefault(_creator);

var _select = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var fullname = (0, _namespace2.default)(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

var _namespace = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _namespaces = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces.xhtml && document.documentElement.namespaceURI === _namespaces.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");

Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_create).default;
  }
});

var _creator = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");

Object.defineProperty(exports, "creator", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_creator).default;
  }
});

var _local = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");

Object.defineProperty(exports, "local", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_local).default;
  }
});

var _matcher = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");

Object.defineProperty(exports, "matcher", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_matcher).default;
  }
});

var _mouse = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");

Object.defineProperty(exports, "mouse", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mouse).default;
  }
});

var _namespace = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");

Object.defineProperty(exports, "namespace", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespace).default;
  }
});

var _namespaces = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");

Object.defineProperty(exports, "namespaces", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespaces).default;
  }
});

var _point = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");

Object.defineProperty(exports, "clientPoint", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _select = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");

Object.defineProperty(exports, "select", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_select).default;
  }
});

var _selectAll = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");

Object.defineProperty(exports, "selectAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectAll).default;
  }
});

var _index = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");

Object.defineProperty(exports, "selection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _selector = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");

Object.defineProperty(exports, "selector", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selector).default;
  }
});

var _selectorAll = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");

Object.defineProperty(exports, "selectorAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectorAll).default;
  }
});

var _style = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");

Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function get() {
    return _style.styleValue;
  }
});

var _touch = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");

Object.defineProperty(exports, "touch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touch).default;
  }
});

var _touches = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");

Object.defineProperty(exports, "touches", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touches).default;
  }
});

var _window = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");

Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_window).default;
  }
});

var _on = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");

Object.defineProperty(exports, "event", {
  enumerable: true,
  get: function get() {
    return _on.event;
  }
});
Object.defineProperty(exports, "customEvent", {
  enumerable: true,
  get: function get() {
    return _on.customEvent;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = local;
var nextId = 0;

function local() {
  return new Local();
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function get(node) {
    var id = this._;
    while (!(id in node)) {
      if (!(node = node.parentNode)) return;
    }return node[id];
  },
  set: function set(node, value) {
    return node[this._] = value;
  },
  remove: function remove(node) {
    return this._ in node && delete node[this._];
  },
  toString: function toString() {
    return this._;
  }
};

/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return function () {
    return this.matches(selector);
  };
};

/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  var event = (0, _sourceEvent2.default)();
  if (event.changedTouches) event = event.changedTouches[0];
  return (0, _point2.default)(node, event);
};

var _sourceEvent = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces2.default.hasOwnProperty(prefix) ? { space: _namespaces2.default[prefix], local: name } : name;
};

var _namespaces = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");

var _namespaces2 = _interopRequireDefault(_namespaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xhtml = exports.xhtml = "http://www.w3.org/1999/xhtml";

exports.default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([[document.querySelector(selector)]], [document.documentElement]) : new _index.Selection([[selector]], _index.root);
};

var _index = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");

/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([document.querySelectorAll(selector)], [document.documentElement]) : new _index.Selection([selector == null ? [] : selector], _index.root);
};

var _index = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
};

var _creator = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");

var _creator2 = _interopRequireDefault(_creator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _namespace2.default)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

var _namespace = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;
    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function (d) {
      data[++j] = d;
    });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0, _constant2.default)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
        previous._next = next || null;
      }
    }
  }

  update = new _index.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

var _enter = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");

var _constant = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

var _window = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(node, type, params) {
  var window = (0, _window2.default)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return !this.node();
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._enter || this._groups.map(_sparse2.default), this._parents);
};

exports.EnterNode = EnterNode;

var _sparse = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._exit || this._groups.map(_sparse2.default), this._parents);
};

var _sparse = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _matcher2.default)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

var _matcher = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");

var _matcher2 = _interopRequireDefault(_matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = undefined;
exports.Selection = Selection;

var _select = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");

var _selectAll2 = _interopRequireDefault(_selectAll);

var _filter = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _data = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");

var _data2 = _interopRequireDefault(_data);

var _enter = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");

var _enter2 = _interopRequireDefault(_enter);

var _exit = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");

var _exit2 = _interopRequireDefault(_exit);

var _join = __webpack_require__(/*! ./join */ "./node_modules/d3-selection/src/selection/join.js");

var _join2 = _interopRequireDefault(_join);

var _merge = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _order = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");

var _order2 = _interopRequireDefault(_order);

var _sort = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");

var _sort2 = _interopRequireDefault(_sort);

var _call = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");

var _call2 = _interopRequireDefault(_call);

var _nodes = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");

var _nodes2 = _interopRequireDefault(_nodes);

var _node = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");

var _node2 = _interopRequireDefault(_node);

var _size = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");

var _size2 = _interopRequireDefault(_size);

var _empty = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");

var _empty2 = _interopRequireDefault(_empty);

var _each = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");

var _each2 = _interopRequireDefault(_each);

var _attr = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _style = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");

var _style2 = _interopRequireDefault(_style);

var _property = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");

var _property2 = _interopRequireDefault(_property);

var _classed = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");

var _classed2 = _interopRequireDefault(_classed);

var _text = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");

var _text2 = _interopRequireDefault(_text);

var _html = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");

var _html2 = _interopRequireDefault(_html);

var _raise = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");

var _raise2 = _interopRequireDefault(_raise);

var _lower = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");

var _lower2 = _interopRequireDefault(_lower);

var _append = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");

var _append2 = _interopRequireDefault(_append);

var _insert = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");

var _insert2 = _interopRequireDefault(_insert);

var _remove = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");

var _remove2 = _interopRequireDefault(_remove);

var _clone = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _datum = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");

var _datum2 = _interopRequireDefault(_datum);

var _on = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");

var _on2 = _interopRequireDefault(_on);

var _dispatch = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");

var _dispatch2 = _interopRequireDefault(_dispatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = exports.root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  data: _data2.default,
  enter: _enter2.default,
  exit: _exit2.default,
  join: _join2.default,
  merge: _merge2.default,
  order: _order2.default,
  sort: _sort2.default,
  call: _call2.default,
  nodes: _nodes2.default,
  node: _node2.default,
  size: _size2.default,
  empty: _empty2.default,
  each: _each2.default,
  attr: _attr2.default,
  style: _style2.default,
  property: _property2.default,
  classed: _classed2.default,
  text: _text2.default,
  html: _html2.default,
  raise: _raise2.default,
  lower: _lower2.default,
  append: _append2.default,
  insert: _insert2.default,
  remove: _remove2.default,
  clone: _clone2.default,
  datum: _datum2.default,
  on: _on2.default,
  dispatch: _dispatch2.default
};

exports.default = selection;

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, before) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0, _selector2.default)(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

var _creator = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");

var _creator2 = _interopRequireDefault(_creator);

var _selector = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constantNull() {
  return null;
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(lower);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Selection(merges, this._parents);
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nodes = new Array(this.size()),
      i = -1;
  this.each(function () {
    nodes[++i] = this;
  });
  return nodes;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (typename, value, capture) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, capture));
  }return this;
};

exports.customEvent = customEvent;
var filterEvents = {};

var event = exports.event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function (event) {
    var related = event.relatedTarget;
    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function (event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    exports.event = event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name: name };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function (d, i, group) {
    var on = this.__on,
        o,
        listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  exports.event = event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event = event0;
  }
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(raise);
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(remove);
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selector2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

var _selector = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selectorAll2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, parents);
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

var _selectorAll = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");

var _selectorAll2 = _interopRequireDefault(_selectorAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var size = 0;
  this.each(function () {
    ++size;
  });
  return size;
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index.Selection(sortgroups, this._parents).order();
};

var _index = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (update) {
  return new Array(update.length);
};

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};

exports.styleValue = styleValue;

var _window = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name) || (0, _window2.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
};

function none() {}

/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
};

function empty() {
  return [];
}

/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var current = _on.event,
      source;
  while (source = current.sourceEvent) {
    current = source;
  }return current;
};

var _on = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");

/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = (0, _sourceEvent2.default)().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return (0, _point2.default)(node, touch);
    }
  }

  return null;
};

var _sourceEvent = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches) {
  if (touches == null) touches = (0, _sourceEvent2.default)().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = (0, _point2.default)(node, touches[i]);
  }

  return points;
};

var _sourceEvent = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node // node is a Window
    || node.defaultView; // node is a Document
};

/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = (0, _constant2.default)(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math.halfPi,
        a1 = endAngle.apply(this, arguments) - _math.halfPi,
        da = (0, _math.abs)(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = (0, _d3Path.path)();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math.epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math.tau - _math.epsilon) {
        context.moveTo(r1 * (0, _math.cos)(a0), r1 * (0, _math.sin)(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > _math.epsilon) {
          context.moveTo(r0 * (0, _math.cos)(a1), r0 * (0, _math.sin)(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      }

      // Or is it a circular or annular sector?
      else {
          var a01 = a0,
              a11 = a1,
              a00 = a0,
              a10 = a1,
              da0 = da,
              da1 = da,
              ap = padAngle.apply(this, arguments) / 2,
              rp = ap > _math.epsilon && (padRadius ? +padRadius.apply(this, arguments) : (0, _math.sqrt)(r0 * r0 + r1 * r1)),
              rc = (0, _math.min)((0, _math.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
              rc0 = rc,
              rc1 = rc,
              t0,
              t1;

          // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
          if (rp > _math.epsilon) {
            var p0 = (0, _math.asin)(rp / r0 * (0, _math.sin)(ap)),
                p1 = (0, _math.asin)(rp / r1 * (0, _math.sin)(ap));
            if ((da0 -= p0 * 2) > _math.epsilon) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
            if ((da1 -= p1 * 2) > _math.epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
          }

          var x01 = r1 * (0, _math.cos)(a01),
              y01 = r1 * (0, _math.sin)(a01),
              x10 = r0 * (0, _math.cos)(a10),
              y10 = r0 * (0, _math.sin)(a10);

          // Apply rounded corners?
          if (rc > _math.epsilon) {
            var x11 = r1 * (0, _math.cos)(a11),
                y11 = r1 * (0, _math.sin)(a11),
                x00 = r0 * (0, _math.cos)(a00),
                y00 = r0 * (0, _math.sin)(a00),
                oc;

            // Restrict the corner radius according to the sector angle.
            if (da < _math.pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
              var ax = x01 - oc[0],
                  ay = y01 - oc[1],
                  bx = x11 - oc[0],
                  by = y11 - oc[1],
                  kc = 1 / (0, _math.sin)((0, _math.acos)((ax * bx + ay * by) / ((0, _math.sqrt)(ax * ax + ay * ay) * (0, _math.sqrt)(bx * bx + by * by))) / 2),
                  lc = (0, _math.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = (0, _math.min)(rc, (r0 - lc) / (kc - 1));
              rc1 = (0, _math.min)(rc, (r1 - lc) / (kc + 1));
            }
          }

          // Is the sector collapsed to a line?
          if (!(da1 > _math.epsilon)) context.moveTo(x01, y01);

          // Does the sector’s outer ring have rounded corners?
          else if (rc1 > _math.epsilon) {
              t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
              t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

              context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0, _math.atan2)(t0.y01, t0.x01), (0, _math.atan2)(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc1, (0, _math.atan2)(t0.y01, t0.x01), (0, _math.atan2)(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r1, (0, _math.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, _math.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                  context.arc(t1.cx, t1.cy, rc1, (0, _math.atan2)(t1.y11, t1.x11), (0, _math.atan2)(t1.y01, t1.x01), !cw);
                }
            }

            // Or is the outer ring just a circular arc?
            else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

          // Is there no inner ring, and it’s a circular sector?
          // Or perhaps it’s an annular sector collapsed due to padding?
          if (!(r0 > _math.epsilon) || !(da0 > _math.epsilon)) context.lineTo(x10, y10);

          // Does the sector’s inner ring (or point) have rounded corners?
          else if (rc0 > _math.epsilon) {
              t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
              t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

              context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0, _math.atan2)(t0.y01, t0.x01), (0, _math.atan2)(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc0, (0, _math.atan2)(t0.y01, t0.x01), (0, _math.atan2)(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r0, (0, _math.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, _math.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                  context.arc(t1.cx, t1.cy, rc0, (0, _math.atan2)(t1.y11, t1.x11), (0, _math.atan2)(t1.y01, t1.x01), !cw);
                }
            }

            // Or is the inner ring just a circular arc?
            else context.arc(0, 0, r0, a10, a00, cw);
        }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math.pi / 2;
    return [(0, _math.cos)(a) * r, (0, _math.sin)(a) * r];
  };

  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : innerRadius;
  };

  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : cornerRadius;
  };

  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : padRadius;
  };

  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : startAngle;
  };

  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : endAngle;
  };

  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), arc) : padAngle;
  };

  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };

  return arc;
};

var _d3Path = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
      y10 = y1 - y0,
      x32 = x3 - x2,
      y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math.epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / (0, _math.sqrt)(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * (0, _math.sqrt)((0, _math.max)(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var x0 = _point.x,
      x1 = null,
      y0 = (0, _constant2.default)(0),
      y1 = _point.y,
      defined = (0, _constant2.default)(true),
      context = null,
      curve = _linear2.default,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = (0, _d3Path.path)());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return (0, _line2.default)().defined(defined).curve(curve).context(context);
  }

  area.x = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, _constant2.default)(+_), x1 = null, area) : x0;
  };

  area.x0 = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, _constant2.default)(+_), area) : x0;
  };

  area.x1 = function (_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0, _constant2.default)(+_), area) : x1;
  };

  area.y = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, _constant2.default)(+_), y1 = null, area) : y0;
  };

  area.y0 = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, _constant2.default)(+_), area) : y0;
  };

  area.y1 = function (_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0, _constant2.default)(+_), area) : y1;
  };

  area.lineX0 = area.lineY0 = function () {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function () {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function () {
    return arealine().x(x1).y(y0);
  };

  area.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), area) : defined;
  };

  area.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
};

var _d3Path = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _linear = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");

var _linear2 = _interopRequireDefault(_linear);

var _line = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");

var _line2 = _interopRequireDefault(_line);

var _point = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var a = (0, _area2.default)().curve(_radial.curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function () {
    return (0, _lineRadial.lineRadial)(x0());
  }, delete a.lineX0;
  a.lineEndAngle = function () {
    return (0, _lineRadial.lineRadial)(x1());
  }, delete a.lineX1;
  a.lineInnerRadius = function () {
    return (0, _lineRadial.lineRadial)(y0());
  }, delete a.lineY0;
  a.lineOuterRadius = function () {
    return (0, _lineRadial.lineRadial)(y1());
  }, delete a.lineY1;

  a.curve = function (_) {
    return arguments.length ? c((0, _radial2.default)(_)) : c()._curve;
  };

  return a;
};

var _radial = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");

var _radial2 = _interopRequireDefault(_radial);

var _area = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");

var _area2 = _interopRequireDefault(_area);

var _lineRadial = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var slice = exports.slice = Array.prototype.slice;

/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function constant() {
    return x;
  };
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basis = Basis;

exports.default = function (context) {
  return new Basis(context);
};

function _point(that, x, y) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}

exports.point = _point;
function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 3:
        _point(this, this._x1, this._y1); // proceed
      case 2:
        this._context.lineTo(this._x1, this._y1);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default:
        _point(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new BasisClosed(context);
};

var _noop = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _basis = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop2.default,
  areaEnd: _noop2.default,
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
    }
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._x2 = x, this._y2 = y;break;
      case 1:
        this._point = 2;this._x3 = x, this._y3 = y;break;
      case 2:
        this._point = 3;this._x4 = x, this._y4 = y;this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);break;
      default:
        (0, _basis.point)(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new BasisOpen(context);
};

var _basis = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;var x0 = (this._x0 + 4 * this._x1 + x) / 6,
            y0 = (this._y0 + 4 * this._y1 + y) / 6;this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);break;
      case 3:
        this._point = 4; // proceed
      default:
        (0, _basis.point)(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basis = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");

function Bundle(context, beta) {
  this._basis = new _basis.Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function lineStart() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function lineEnd() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function point(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

exports.default = function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis.Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function (beta) {
    return custom(+beta);
  };

  return bundle;
}(0.85);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cardinal = Cardinal;
function _point(that, x, y) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}

exports.point = _point;
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);break;
      case 3:
        _point(this, this._x1, this._y1);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;this._x1 = x, this._y1 = y;break;
      case 2:
        this._point = 3; // proceed
      default:
        _point(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
}(0);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardinalClosed = CardinalClosed;

var _noop = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _cardinal = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop2.default,
  areaEnd: _noop2.default,
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._x3 = x, this._y3 = y;break;
      case 1:
        this._point = 2;this._context.moveTo(this._x4 = x, this._y4 = y);break;
      case 2:
        this._point = 3;this._x5 = x, this._y5 = y;break;
      default:
        (0, _cardinal.point)(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
}(0);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardinalOpen = CardinalOpen;

var _cardinal = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;
      case 3:
        this._point = 4; // proceed
      default:
        (0, _cardinal.point)(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
}(0);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.point = undefined;

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");

var _cardinal = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");

function _point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math.epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math.epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

exports.point = _point;
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);break;
      case 3:
        this.point(this._x2, this._y2);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3; // proceed
      default:
        _point(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal.Cardinal(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}(0.5);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardinalClosed = __webpack_require__(/*! ./cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");

var _noop = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _catmullRom = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop2.default,
  areaEnd: _noop2.default,
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function point(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;this._x3 = x, this._y3 = y;break;
      case 1:
        this._point = 2;this._context.moveTo(this._x4 = x, this._y4 = y);break;
      case 2:
        this._point = 3;this._x5 = x, this._y5 = y;break;
      default:
        (0, _catmullRom.point)(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed.CardinalClosed(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}(0.5);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardinalOpen = __webpack_require__(/*! ./cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");

var _catmullRom = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;
      case 3:
        this._point = 4; // proceed
      default:
        (0, _catmullRom.point)(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

exports.default = function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen.CardinalOpen(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}(0.5);

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new Linear(context);
};

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2; // proceed
      default:
        this._context.lineTo(x, y);break;
    }
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new LinearClosed(context);
};

var _noop = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop2.default,
  areaEnd: _noop2.default,
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._point) this._context.closePath();
  },
  point: function point(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);else this._point = 1, this._context.moveTo(x, y);
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monotoneX = monotoneX;
exports.monotoneY = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function _point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);break;
      case 3:
        _point(this, this._t0, slope2(this, this._t0));break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;_point(this, slope2(this, t1 = slope3(this, x, y)), t1);break;
      default:
        _point(this, this._t0, t1 = slope3(this, x, y));break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function moveTo(x, y) {
    this._context.moveTo(y, x);
  },
  closePath: function closePath() {
    this._context.closePath();
  },
  lineTo: function lineTo(x, y) {
    this._context.lineTo(y, x);
  },
  bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
  }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new Natural(context);
};

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function lineEnd() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function point(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) {
    a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  }a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) {
    m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  }a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) {
    a[i] = (r[i] - a[i + 1]) / b[i];
  }b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) {
    b[i] = 2 * x[i + 1] - a[i + 1];
  }return [a, b];
}

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.curveRadialLinear = undefined;
exports.default = curveRadial;

var _linear = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-shape/src/curve/linear.js");

var _linear2 = _interopRequireDefault(_linear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var curveRadialLinear = exports.curveRadialLinear = curveRadial(_linear2.default);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function areaStart() {
    this._curve.areaStart();
  },
  areaEnd: function areaEnd() {
    this._curve.areaEnd();
  },
  lineStart: function lineStart() {
    this._curve.lineStart();
  },
  lineEnd: function lineEnd() {
    this._curve.lineEnd();
  },
  point: function point(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  return new Step(context, 0.5);
};

exports.stepBefore = stepBefore;
exports.stepAfter = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2; // proceed
      default:
        {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y);
            this._context.lineTo(x, y);
          } else {
            var x1 = this._x * (1 - this._t) + x * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y);
          }
          break;
        }
    }
    this._x = x, this._y = y;
  }
};

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (d) {
  return d;
};

/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = __webpack_require__(/*! ./arc.js */ "./node_modules/d3-shape/src/arc.js");

Object.defineProperty(exports, "arc", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arc).default;
  }
});

var _area = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");

Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_area).default;
  }
});

var _line = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");

Object.defineProperty(exports, "line", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_line).default;
  }
});

var _pie = __webpack_require__(/*! ./pie.js */ "./node_modules/d3-shape/src/pie.js");

Object.defineProperty(exports, "pie", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pie).default;
  }
});

var _areaRadial = __webpack_require__(/*! ./areaRadial.js */ "./node_modules/d3-shape/src/areaRadial.js");

Object.defineProperty(exports, "areaRadial", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_areaRadial).default;
  }
});
Object.defineProperty(exports, "radialArea", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_areaRadial).default;
  }
});

var _lineRadial = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");

Object.defineProperty(exports, "lineRadial", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lineRadial).default;
  }
});
Object.defineProperty(exports, "radialLine", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lineRadial).default;
  }
});

var _pointRadial = __webpack_require__(/*! ./pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");

Object.defineProperty(exports, "pointRadial", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pointRadial).default;
  }
});

var _index = __webpack_require__(/*! ./link/index.js */ "./node_modules/d3-shape/src/link/index.js");

Object.defineProperty(exports, "linkHorizontal", {
  enumerable: true,
  get: function get() {
    return _index.linkHorizontal;
  }
});
Object.defineProperty(exports, "linkVertical", {
  enumerable: true,
  get: function get() {
    return _index.linkVertical;
  }
});
Object.defineProperty(exports, "linkRadial", {
  enumerable: true,
  get: function get() {
    return _index.linkRadial;
  }
});

var _symbol = __webpack_require__(/*! ./symbol.js */ "./node_modules/d3-shape/src/symbol.js");

Object.defineProperty(exports, "symbol", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_symbol).default;
  }
});
Object.defineProperty(exports, "symbols", {
  enumerable: true,
  get: function get() {
    return _symbol.symbols;
  }
});

var _circle = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");

Object.defineProperty(exports, "symbolCircle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_circle).default;
  }
});

var _cross = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");

Object.defineProperty(exports, "symbolCross", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cross).default;
  }
});

var _diamond = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");

Object.defineProperty(exports, "symbolDiamond", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_diamond).default;
  }
});

var _square = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");

Object.defineProperty(exports, "symbolSquare", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_square).default;
  }
});

var _star = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");

Object.defineProperty(exports, "symbolStar", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_star).default;
  }
});

var _triangle = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");

Object.defineProperty(exports, "symbolTriangle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_triangle).default;
  }
});

var _wye = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");

Object.defineProperty(exports, "symbolWye", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wye).default;
  }
});

var _basisClosed = __webpack_require__(/*! ./curve/basisClosed.js */ "./node_modules/d3-shape/src/curve/basisClosed.js");

Object.defineProperty(exports, "curveBasisClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basisClosed).default;
  }
});

var _basisOpen = __webpack_require__(/*! ./curve/basisOpen.js */ "./node_modules/d3-shape/src/curve/basisOpen.js");

Object.defineProperty(exports, "curveBasisOpen", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basisOpen).default;
  }
});

var _basis = __webpack_require__(/*! ./curve/basis.js */ "./node_modules/d3-shape/src/curve/basis.js");

Object.defineProperty(exports, "curveBasis", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basis).default;
  }
});

var _bundle = __webpack_require__(/*! ./curve/bundle.js */ "./node_modules/d3-shape/src/curve/bundle.js");

Object.defineProperty(exports, "curveBundle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bundle).default;
  }
});

var _cardinalClosed = __webpack_require__(/*! ./curve/cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");

Object.defineProperty(exports, "curveCardinalClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardinalClosed).default;
  }
});

var _cardinalOpen = __webpack_require__(/*! ./curve/cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");

Object.defineProperty(exports, "curveCardinalOpen", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardinalOpen).default;
  }
});

var _cardinal = __webpack_require__(/*! ./curve/cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");

Object.defineProperty(exports, "curveCardinal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardinal).default;
  }
});

var _catmullRomClosed = __webpack_require__(/*! ./curve/catmullRomClosed.js */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");

Object.defineProperty(exports, "curveCatmullRomClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_catmullRomClosed).default;
  }
});

var _catmullRomOpen = __webpack_require__(/*! ./curve/catmullRomOpen.js */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");

Object.defineProperty(exports, "curveCatmullRomOpen", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_catmullRomOpen).default;
  }
});

var _catmullRom = __webpack_require__(/*! ./curve/catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");

Object.defineProperty(exports, "curveCatmullRom", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_catmullRom).default;
  }
});

var _linearClosed = __webpack_require__(/*! ./curve/linearClosed.js */ "./node_modules/d3-shape/src/curve/linearClosed.js");

Object.defineProperty(exports, "curveLinearClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linearClosed).default;
  }
});

var _linear = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");

Object.defineProperty(exports, "curveLinear", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linear).default;
  }
});

var _monotone = __webpack_require__(/*! ./curve/monotone.js */ "./node_modules/d3-shape/src/curve/monotone.js");

Object.defineProperty(exports, "curveMonotoneX", {
  enumerable: true,
  get: function get() {
    return _monotone.monotoneX;
  }
});
Object.defineProperty(exports, "curveMonotoneY", {
  enumerable: true,
  get: function get() {
    return _monotone.monotoneY;
  }
});

var _natural = __webpack_require__(/*! ./curve/natural.js */ "./node_modules/d3-shape/src/curve/natural.js");

Object.defineProperty(exports, "curveNatural", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_natural).default;
  }
});

var _step = __webpack_require__(/*! ./curve/step.js */ "./node_modules/d3-shape/src/curve/step.js");

Object.defineProperty(exports, "curveStep", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_step).default;
  }
});
Object.defineProperty(exports, "curveStepAfter", {
  enumerable: true,
  get: function get() {
    return _step.stepAfter;
  }
});
Object.defineProperty(exports, "curveStepBefore", {
  enumerable: true,
  get: function get() {
    return _step.stepBefore;
  }
});

var _stack = __webpack_require__(/*! ./stack.js */ "./node_modules/d3-shape/src/stack.js");

Object.defineProperty(exports, "stack", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stack).default;
  }
});

var _expand = __webpack_require__(/*! ./offset/expand.js */ "./node_modules/d3-shape/src/offset/expand.js");

Object.defineProperty(exports, "stackOffsetExpand", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_expand).default;
  }
});

var _diverging = __webpack_require__(/*! ./offset/diverging.js */ "./node_modules/d3-shape/src/offset/diverging.js");

Object.defineProperty(exports, "stackOffsetDiverging", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_diverging).default;
  }
});

var _none = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");

Object.defineProperty(exports, "stackOffsetNone", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_none).default;
  }
});

var _silhouette = __webpack_require__(/*! ./offset/silhouette.js */ "./node_modules/d3-shape/src/offset/silhouette.js");

Object.defineProperty(exports, "stackOffsetSilhouette", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_silhouette).default;
  }
});

var _wiggle = __webpack_require__(/*! ./offset/wiggle.js */ "./node_modules/d3-shape/src/offset/wiggle.js");

Object.defineProperty(exports, "stackOffsetWiggle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wiggle).default;
  }
});

var _appearance = __webpack_require__(/*! ./order/appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");

Object.defineProperty(exports, "stackOrderAppearance", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_appearance).default;
  }
});

var _ascending = __webpack_require__(/*! ./order/ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");

Object.defineProperty(exports, "stackOrderAscending", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ascending).default;
  }
});

var _descending = __webpack_require__(/*! ./order/descending.js */ "./node_modules/d3-shape/src/order/descending.js");

Object.defineProperty(exports, "stackOrderDescending", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_descending).default;
  }
});

var _insideOut = __webpack_require__(/*! ./order/insideOut.js */ "./node_modules/d3-shape/src/order/insideOut.js");

Object.defineProperty(exports, "stackOrderInsideOut", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_insideOut).default;
  }
});

var _none2 = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");

Object.defineProperty(exports, "stackOrderNone", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_none2).default;
  }
});

var _reverse = __webpack_require__(/*! ./order/reverse.js */ "./node_modules/d3-shape/src/order/reverse.js");

Object.defineProperty(exports, "stackOrderReverse", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reverse).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var x = _point.x,
      y = _point.y,
      defined = (0, _constant2.default)(true),
      context = null,
      curve = _linear2.default,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = (0, _d3Path.path)());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constant2.default)(+_), line) : x;
  };

  line.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constant2.default)(+_), line) : y;
  };

  line.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), line) : defined;
  };

  line.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
};

var _d3Path = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _linear = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");

var _linear2 = _interopRequireDefault(_linear);

var _point = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineRadial = lineRadial;

exports.default = function () {
  return lineRadial((0, _line2.default)().curve(_radial.curveRadialLinear));
};

var _radial = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");

var _radial2 = _interopRequireDefault(_radial);

var _line = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function (_) {
    return arguments.length ? c((0, _radial2.default)(_)) : c()._curve;
  };

  return l;
}

/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkHorizontal = linkHorizontal;
exports.linkVertical = linkVertical;
exports.linkRadial = linkRadial;

var _d3Path = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");

var _array = __webpack_require__(/*! ../array.js */ "./node_modules/d3-shape/src/array.js");

var _constant = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _point = __webpack_require__(/*! ../point.js */ "./node_modules/d3-shape/src/point.js");

var _pointRadial = __webpack_require__(/*! ../pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");

var _pointRadial2 = _interopRequireDefault(_pointRadial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point.x,
      y = _point.y,
      context = null;

  function link() {
    var buffer,
        argv = _array.slice.call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv);
    if (!context) context = buffer = (0, _d3Path.path)();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function (_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function (_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constant2.default)(+_), link) : x;
  };

  link.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constant2.default)(+_), link) : y;
  };

  link.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = (0, _pointRadial2.default)(x0, y0),
      p1 = (0, _pointRadial2.default)(x0, y0 = (y0 + y1) / 2),
      p2 = (0, _pointRadial2.default)(x1, y0),
      p3 = (0, _pointRadial2.default)(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acos = acos;
exports.asin = asin;
var abs = exports.abs = Math.abs;
var atan2 = exports.atan2 = Math.atan2;
var cos = exports.cos = Math.cos;
var max = exports.max = Math.max;
var min = exports.min = Math.min;
var sin = exports.sin = Math.sin;
var sqrt = exports.sqrt = Math.sqrt;

var epsilon = exports.epsilon = 1e-12;
var pi = exports.pi = Math.PI;
var halfPi = exports.halfPi = pi / 2;
var tau = exports.tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) {
      y += series[i][j][1] || 0;
    }if (y) for (i = 0; i < n; ++i) {
      series[i][j][1] /= y;
    }
  }
  (0, _none2.default)(series, order);
};

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) {
      y += series[i][j][1] || 0;
    }s0[j][1] += s0[j][0] = -y / 2;
  }
  (0, _none2.default)(series, order);
};

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  (0, _none2.default)(series, order);
};

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/appearance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  var peaks = series.map(peak);
  return (0, _none2.default)(series).sort(function (a, b) {
    return peaks[a] - peaks[b];
  });
};

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function peak(series) {
  var i = -1,
      j = 0,
      n = series.length,
      vi,
      vj = -Infinity;
  while (++i < n) {
    if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  }return j;
}

/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  var sums = series.map(sum);
  return (0, _none2.default)(series).sort(function (a, b) {
    return sums[a] - sums[b];
  });
};

exports.sum = sum;

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sum(series) {
  var s = 0,
      i = -1,
      n = series.length,
      v;
  while (++i < n) {
    if (v = +series[i][1]) s += v;
  }return s;
}

/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  return (0, _ascending2.default)(series).reverse();
};

var _ascending = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");

var _ascending2 = _interopRequireDefault(_ascending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending.sum),
      order = (0, _appearance2.default)(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
};

var _appearance = __webpack_require__(/*! ./appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");

var _appearance2 = _interopRequireDefault(_appearance);

var _ascending = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  var n = series.length,
      o = new Array(n);
  while (--n >= 0) {
    o[n] = n;
  }return o;
};

/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  return (0, _none2.default)(series).reverse();
};

var _none = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var value = _identity2.default,
      sortValues = _descending2.default,
      sort = null,
      startAngle = (0, _constant2.default)(0),
      endAngle = (0, _constant2.default)(_math.tau),
      padAngle = (0, _constant2.default)(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math.tau, Math.max(-_math.tau, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function (i, j) {
      return sortValues(arcs[i], arcs[j]);
    });else if (sort != null) index.sort(function (i, j) {
      return sort(data[i], data[j]);
    });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant2.default)(+_), pie) : value;
  };

  pie.sortValues = function (_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function (_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), pie) : startAngle;
  };

  pie.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), pie) : endAngle;
  };

  pie.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, _constant2.default)(+_), pie) : padAngle;
  };

  return pie;
};

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _descending = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-shape/src/descending.js");

var _descending2 = _interopRequireDefault(_descending);

var _identity = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-shape/src/identity.js");

var _identity2 = _interopRequireDefault(_identity);

var _math = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.x = x;
exports.y = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
};

/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var keys = (0, _constant2.default)([]),
      order = _none4.default,
      offset = _none2.default,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function (_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : (0, _constant2.default)(_array.slice.call(_)), stack) : keys;
  };

  stack.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant2.default)(+_), stack) : value;
  };

  stack.order = function (_) {
    return arguments.length ? (order = _ == null ? _none4.default : typeof _ === "function" ? _ : (0, _constant2.default)(_array.slice.call(_)), stack) : order;
  };

  stack.offset = function (_) {
    return arguments.length ? (offset = _ == null ? _none2.default : _, stack) : offset;
  };

  return stack;
};

var _array = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _none = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");

var _none2 = _interopRequireDefault(_none);

var _none3 = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");

var _none4 = _interopRequireDefault(_none3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stackValue(d, key) {
  return d[key];
}

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symbols = undefined;

exports.default = function () {
  var type = (0, _constant2.default)(_circle2.default),
      size = (0, _constant2.default)(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = (0, _d3Path.path)();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function (_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : (0, _constant2.default)(_), symbol) : type;
  };

  symbol.size = function (_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : (0, _constant2.default)(+_), symbol) : size;
  };

  symbol.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
};

var _d3Path = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");

var _circle = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _cross = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");

var _cross2 = _interopRequireDefault(_cross);

var _diamond = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");

var _diamond2 = _interopRequireDefault(_diamond);

var _star = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");

var _star2 = _interopRequireDefault(_star);

var _square = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");

var _square2 = _interopRequireDefault(_square);

var _triangle = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");

var _triangle2 = _interopRequireDefault(_triangle);

var _wye = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");

var _wye2 = _interopRequireDefault(_wye);

var _constant = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symbols = exports.symbols = [_circle2.default, _cross2.default, _diamond2.default, _square2.default, _star2.default, _triangle2.default, _wye2.default];

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");

exports.default = {
  draw: function draw(context, size) {
    var r = Math.sqrt(size / _math.pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math.tau);
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  draw: function draw(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

exports.default = {
  draw: function draw(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  draw: function draw(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _math = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");

var ka = 0.89081309152928522810,
    kr = Math.sin(_math.pi / 10) / Math.sin(7 * _math.pi / 10),
    kx = Math.sin(_math.tau / 10) * kr,
    ky = -Math.cos(_math.tau / 10) * kr;

exports.default = {
    draw: function draw(context, size) {
        var r = Math.sqrt(size * ka),
            x = kx * r,
            y = ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for (var i = 1; i < 5; ++i) {
            var a = _math.tau * i / 5,
                c = Math.cos(a),
                s = Math.sin(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sqrt3 = Math.sqrt(3);

exports.default = {
  draw: function draw(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

exports.default = {
    draw: function draw(context, size) {
        var r = Math.sqrt(size / a),
            x0 = r / 2,
            y0 = r * k,
            x1 = x0,
            y1 = r * k + r,
            x2 = -x1,
            y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
        context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
        context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
        context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
        context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
        context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
        context.closePath();
    }
};

/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = undefined;
exports.default = defaultLocale;

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale;
var timeFormat = exports.timeFormat = undefined;
var timeParse = exports.timeParse = undefined;
var utcFormat = exports.utcFormat = undefined;
var utcParse = exports.utcParse = undefined;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = (0, _locale2.default)(definition);
  exports.timeFormat = timeFormat = locale.format;
  exports.timeParse = timeParse = locale.parse;
  exports.utcFormat = utcFormat = locale.utcFormat;
  exports.utcParse = utcParse = locale.utcParse;
  return locale;
}

/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultLocale = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");

Object.defineProperty(exports, "timeFormatDefaultLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultLocale).default;
  }
});
Object.defineProperty(exports, "timeFormat", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.timeFormat;
  }
});
Object.defineProperty(exports, "timeParse", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.timeParse;
  }
});
Object.defineProperty(exports, "utcFormat", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.utcFormat;
  }
});
Object.defineProperty(exports, "utcParse", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.utcParse;
  }
});

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");

Object.defineProperty(exports, "timeFormatLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_locale).default;
  }
});

var _isoFormat = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");

Object.defineProperty(exports, "isoFormat", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isoFormat).default;
  }
});

var _isoParse = __webpack_require__(/*! ./isoParse */ "./node_modules/d3-time-format/src/isoParse.js");

Object.defineProperty(exports, "isoParse", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isoParse).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isoSpecifier = undefined;

var _defaultLocale = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");

var isoSpecifier = exports.isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
    return date.toISOString();
}

var formatIso = Date.prototype.toISOString ? formatIsoNative : (0, _defaultLocale.utcFormat)(isoSpecifier);

exports.default = formatIso;

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isoFormat = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");

var _defaultLocale = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : (0, _defaultLocale.utcParse)(_isoFormat.isoSpecifier);

exports.default = parseIso;

/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLocale;

var _d3Time = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return { y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function (string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week,
          day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? _d3Time.utcMonday.ceil(week) : (0, _d3Time.utcMonday)(week);
          week = _d3Time.utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? _d3Time.timeMonday.ceil(week) : (0, _d3Time.timeMonday)(week);
          week = _d3Time.timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function format(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function parse(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function utcFormat(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function utcParse(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function () {
        return specifier;
      };
      return p;
    }
  };
}

var pads = { "-": "", "_": " ", "0": "0" },
    numberRe = /^\s*\d+/,
    // note: ignores next directive
percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {},
      i = -1,
      n = names.length;
  while (++i < n) {
    map[names[i].toLowerCase()] = i;
  }return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0] * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + _d3Time.timeDay.count((0, _d3Time.timeYear)(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(_d3Time.timeSunday.count((0, _d3Time.timeYear)(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? (0, _d3Time.timeThursday)(d) : _d3Time.timeThursday.ceil(d);
  return pad(_d3Time.timeThursday.count((0, _d3Time.timeYear)(d), d) + ((0, _d3Time.timeYear)(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(_d3Time.timeMonday.count((0, _d3Time.timeYear)(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + _d3Time.utcDay.count((0, _d3Time.utcYear)(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(_d3Time.utcSunday.count((0, _d3Time.utcYear)(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? (0, _d3Time.utcThursday)(d) : _d3Time.utcThursday.ceil(d);
  return pad(_d3Time.utcThursday.count((0, _d3Time.utcYear)(d), d) + ((0, _d3Time.utcYear)(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(_d3Time.utcMonday.count((0, _d3Time.utcYear)(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.days = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var day = (0, _interval2.default)(function (date) {
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setDate(date.getDate() + step);
}, function (start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationDay;
}, function (date) {
  return date.getDate() - 1;
});

exports.default = day;
var days = exports.days = day.range;

/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var durationSecond = exports.durationSecond = 1e3;
var durationMinute = exports.durationMinute = 6e4;
var durationHour = exports.durationHour = 36e5;
var durationDay = exports.durationDay = 864e5;
var durationWeek = exports.durationWeek = 6048e5;

/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hours = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hour = (0, _interval2.default)(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration.durationSecond - date.getMinutes() * _duration.durationMinute);
}, function (date, step) {
  date.setTime(+date + step * _duration.durationHour);
}, function (start, end) {
  return (end - start) / _duration.durationHour;
}, function (date) {
  return date.getHours();
});

exports.default = hour;
var hours = exports.hours = hour.range;

/***/ }),

/***/ "./node_modules/d3-time/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

Object.defineProperty(exports, "timeInterval", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interval).default;
  }
});

var _millisecond = __webpack_require__(/*! ./millisecond */ "./node_modules/d3-time/src/millisecond.js");

Object.defineProperty(exports, "timeMillisecond", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_millisecond).default;
  }
});
Object.defineProperty(exports, "timeMilliseconds", {
  enumerable: true,
  get: function get() {
    return _millisecond.milliseconds;
  }
});
Object.defineProperty(exports, "utcMillisecond", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_millisecond).default;
  }
});
Object.defineProperty(exports, "utcMilliseconds", {
  enumerable: true,
  get: function get() {
    return _millisecond.milliseconds;
  }
});

var _second = __webpack_require__(/*! ./second */ "./node_modules/d3-time/src/second.js");

Object.defineProperty(exports, "timeSecond", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_second).default;
  }
});
Object.defineProperty(exports, "timeSeconds", {
  enumerable: true,
  get: function get() {
    return _second.seconds;
  }
});
Object.defineProperty(exports, "utcSecond", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_second).default;
  }
});
Object.defineProperty(exports, "utcSeconds", {
  enumerable: true,
  get: function get() {
    return _second.seconds;
  }
});

var _minute = __webpack_require__(/*! ./minute */ "./node_modules/d3-time/src/minute.js");

Object.defineProperty(exports, "timeMinute", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_minute).default;
  }
});
Object.defineProperty(exports, "timeMinutes", {
  enumerable: true,
  get: function get() {
    return _minute.minutes;
  }
});

var _hour = __webpack_require__(/*! ./hour */ "./node_modules/d3-time/src/hour.js");

Object.defineProperty(exports, "timeHour", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hour).default;
  }
});
Object.defineProperty(exports, "timeHours", {
  enumerable: true,
  get: function get() {
    return _hour.hours;
  }
});

var _day = __webpack_require__(/*! ./day */ "./node_modules/d3-time/src/day.js");

Object.defineProperty(exports, "timeDay", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_day).default;
  }
});
Object.defineProperty(exports, "timeDays", {
  enumerable: true,
  get: function get() {
    return _day.days;
  }
});

var _week = __webpack_require__(/*! ./week */ "./node_modules/d3-time/src/week.js");

Object.defineProperty(exports, "timeWeek", {
  enumerable: true,
  get: function get() {
    return _week.sunday;
  }
});
Object.defineProperty(exports, "timeWeeks", {
  enumerable: true,
  get: function get() {
    return _week.sundays;
  }
});
Object.defineProperty(exports, "timeSunday", {
  enumerable: true,
  get: function get() {
    return _week.sunday;
  }
});
Object.defineProperty(exports, "timeSundays", {
  enumerable: true,
  get: function get() {
    return _week.sundays;
  }
});
Object.defineProperty(exports, "timeMonday", {
  enumerable: true,
  get: function get() {
    return _week.monday;
  }
});
Object.defineProperty(exports, "timeMondays", {
  enumerable: true,
  get: function get() {
    return _week.mondays;
  }
});
Object.defineProperty(exports, "timeTuesday", {
  enumerable: true,
  get: function get() {
    return _week.tuesday;
  }
});
Object.defineProperty(exports, "timeTuesdays", {
  enumerable: true,
  get: function get() {
    return _week.tuesdays;
  }
});
Object.defineProperty(exports, "timeWednesday", {
  enumerable: true,
  get: function get() {
    return _week.wednesday;
  }
});
Object.defineProperty(exports, "timeWednesdays", {
  enumerable: true,
  get: function get() {
    return _week.wednesdays;
  }
});
Object.defineProperty(exports, "timeThursday", {
  enumerable: true,
  get: function get() {
    return _week.thursday;
  }
});
Object.defineProperty(exports, "timeThursdays", {
  enumerable: true,
  get: function get() {
    return _week.thursdays;
  }
});
Object.defineProperty(exports, "timeFriday", {
  enumerable: true,
  get: function get() {
    return _week.friday;
  }
});
Object.defineProperty(exports, "timeFridays", {
  enumerable: true,
  get: function get() {
    return _week.fridays;
  }
});
Object.defineProperty(exports, "timeSaturday", {
  enumerable: true,
  get: function get() {
    return _week.saturday;
  }
});
Object.defineProperty(exports, "timeSaturdays", {
  enumerable: true,
  get: function get() {
    return _week.saturdays;
  }
});

var _month = __webpack_require__(/*! ./month */ "./node_modules/d3-time/src/month.js");

Object.defineProperty(exports, "timeMonth", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_month).default;
  }
});
Object.defineProperty(exports, "timeMonths", {
  enumerable: true,
  get: function get() {
    return _month.months;
  }
});

var _year = __webpack_require__(/*! ./year */ "./node_modules/d3-time/src/year.js");

Object.defineProperty(exports, "timeYear", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_year).default;
  }
});
Object.defineProperty(exports, "timeYears", {
  enumerable: true,
  get: function get() {
    return _year.years;
  }
});

var _utcMinute = __webpack_require__(/*! ./utcMinute */ "./node_modules/d3-time/src/utcMinute.js");

Object.defineProperty(exports, "utcMinute", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcMinute).default;
  }
});
Object.defineProperty(exports, "utcMinutes", {
  enumerable: true,
  get: function get() {
    return _utcMinute.utcMinutes;
  }
});

var _utcHour = __webpack_require__(/*! ./utcHour */ "./node_modules/d3-time/src/utcHour.js");

Object.defineProperty(exports, "utcHour", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcHour).default;
  }
});
Object.defineProperty(exports, "utcHours", {
  enumerable: true,
  get: function get() {
    return _utcHour.utcHours;
  }
});

var _utcDay = __webpack_require__(/*! ./utcDay */ "./node_modules/d3-time/src/utcDay.js");

Object.defineProperty(exports, "utcDay", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcDay).default;
  }
});
Object.defineProperty(exports, "utcDays", {
  enumerable: true,
  get: function get() {
    return _utcDay.utcDays;
  }
});

var _utcWeek = __webpack_require__(/*! ./utcWeek */ "./node_modules/d3-time/src/utcWeek.js");

Object.defineProperty(exports, "utcWeek", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSunday;
  }
});
Object.defineProperty(exports, "utcWeeks", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSundays;
  }
});
Object.defineProperty(exports, "utcSunday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSunday;
  }
});
Object.defineProperty(exports, "utcSundays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSundays;
  }
});
Object.defineProperty(exports, "utcMonday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcMonday;
  }
});
Object.defineProperty(exports, "utcMondays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcMondays;
  }
});
Object.defineProperty(exports, "utcTuesday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcTuesday;
  }
});
Object.defineProperty(exports, "utcTuesdays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcTuesdays;
  }
});
Object.defineProperty(exports, "utcWednesday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcWednesday;
  }
});
Object.defineProperty(exports, "utcWednesdays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcWednesdays;
  }
});
Object.defineProperty(exports, "utcThursday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcThursday;
  }
});
Object.defineProperty(exports, "utcThursdays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcThursdays;
  }
});
Object.defineProperty(exports, "utcFriday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcFriday;
  }
});
Object.defineProperty(exports, "utcFridays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcFridays;
  }
});
Object.defineProperty(exports, "utcSaturday", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSaturday;
  }
});
Object.defineProperty(exports, "utcSaturdays", {
  enumerable: true,
  get: function get() {
    return _utcWeek.utcSaturdays;
  }
});

var _utcMonth = __webpack_require__(/*! ./utcMonth */ "./node_modules/d3-time/src/utcMonth.js");

Object.defineProperty(exports, "utcMonth", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcMonth).default;
  }
});
Object.defineProperty(exports, "utcMonths", {
  enumerable: true,
  get: function get() {
    return _utcMonth.utcMonths;
  }
});

var _utcYear = __webpack_require__(/*! ./utcYear */ "./node_modules/d3-time/src/utcYear.js");

Object.defineProperty(exports, "utcYear", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_utcYear).default;
  }
});
Object.defineProperty(exports, "utcYears", {
  enumerable: true,
  get: function get() {
    return _utcYear.utcYears;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newInterval;
var t0 = new Date(),
    t1 = new Date();

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function (date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function (date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function (start, stop, step) {
    var range = [],
        previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do {
      range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    } while (previous < start && start < stop);
    return range;
  };

  interval.filter = function (test) {
    return newInterval(function (date) {
      if (date >= date) while (floori(date), !test(date)) {
        date.setTime(date - 1);
      }
    }, function (date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
        return field(d) % step === 0;
      } : function (d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }

  return interval;
}

/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.milliseconds = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var millisecond = (0, _interval2.default)(function () {
  // noop
}, function (date, step) {
  date.setTime(+date + step);
}, function (start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return (0, _interval2.default)(function (date) {
    date.setTime(Math.floor(date / k) * k);
  }, function (date, step) {
    date.setTime(+date + step * k);
  }, function (start, end) {
    return (end - start) / k;
  });
};

exports.default = millisecond;
var milliseconds = exports.milliseconds = millisecond.range;

/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minutes = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minute = (0, _interval2.default)(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration.durationSecond);
}, function (date, step) {
  date.setTime(+date + step * _duration.durationMinute);
}, function (start, end) {
  return (end - start) / _duration.durationMinute;
}, function (date) {
  return date.getMinutes();
});

exports.default = minute;
var minutes = exports.minutes = minute.range;

/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.months = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var month = (0, _interval2.default)(function (date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setMonth(date.getMonth() + step);
}, function (start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function (date) {
  return date.getMonth();
});

exports.default = month;
var months = exports.months = month.range;

/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seconds = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var second = (0, _interval2.default)(function (date) {
  date.setTime(date - date.getMilliseconds());
}, function (date, step) {
  date.setTime(+date + step * _duration.durationSecond);
}, function (start, end) {
  return (end - start) / _duration.durationSecond;
}, function (date) {
  return date.getUTCSeconds();
});

exports.default = second;
var seconds = exports.seconds = second.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcDays = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utcDay = (0, _interval2.default)(function (date) {
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
  return (end - start) / _duration.durationDay;
}, function (date) {
  return date.getUTCDate() - 1;
});

exports.default = utcDay;
var utcDays = exports.utcDays = utcDay.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcHours = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utcHour = (0, _interval2.default)(function (date) {
  date.setUTCMinutes(0, 0, 0);
}, function (date, step) {
  date.setTime(+date + step * _duration.durationHour);
}, function (start, end) {
  return (end - start) / _duration.durationHour;
}, function (date) {
  return date.getUTCHours();
});

exports.default = utcHour;
var utcHours = exports.utcHours = utcHour.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcMinutes = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utcMinute = (0, _interval2.default)(function (date) {
  date.setUTCSeconds(0, 0);
}, function (date, step) {
  date.setTime(+date + step * _duration.durationMinute);
}, function (start, end) {
  return (end - start) / _duration.durationMinute;
}, function (date) {
  return date.getUTCMinutes();
});

exports.default = utcMinute;
var utcMinutes = exports.utcMinutes = utcMinute.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcMonths = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utcMonth = (0, _interval2.default)(function (date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function (start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function (date) {
  return date.getUTCMonth();
});

exports.default = utcMonth;
var utcMonths = exports.utcMonths = utcMonth.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function utcWeekday(i) {
  return (0, _interval2.default)(function (date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function (start, end) {
    return (end - start) / _duration.durationWeek;
  });
}

var utcSunday = exports.utcSunday = utcWeekday(0);
var utcMonday = exports.utcMonday = utcWeekday(1);
var utcTuesday = exports.utcTuesday = utcWeekday(2);
var utcWednesday = exports.utcWednesday = utcWeekday(3);
var utcThursday = exports.utcThursday = utcWeekday(4);
var utcFriday = exports.utcFriday = utcWeekday(5);
var utcSaturday = exports.utcSaturday = utcWeekday(6);

var utcSundays = exports.utcSundays = utcSunday.range;
var utcMondays = exports.utcMondays = utcMonday.range;
var utcTuesdays = exports.utcTuesdays = utcTuesday.range;
var utcWednesdays = exports.utcWednesdays = utcWednesday.range;
var utcThursdays = exports.utcThursdays = utcThursday.range;
var utcFridays = exports.utcFridays = utcFriday.range;
var utcSaturdays = exports.utcSaturdays = utcSaturday.range;

/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcYears = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utcYear = (0, _interval2.default)(function (date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _interval2.default)(function (date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

exports.default = utcYear;
var utcYears = exports.utcYears = utcYear.range;

/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

var _duration = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function weekday(i) {
  return (0, _interval2.default)(function (date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationWeek;
  });
}

var sunday = exports.sunday = weekday(0);
var monday = exports.monday = weekday(1);
var tuesday = exports.tuesday = weekday(2);
var wednesday = exports.wednesday = weekday(3);
var thursday = exports.thursday = weekday(4);
var friday = exports.friday = weekday(5);
var saturday = exports.saturday = weekday(6);

var sundays = exports.sundays = sunday.range;
var mondays = exports.mondays = monday.range;
var tuesdays = exports.tuesdays = tuesday.range;
var wednesdays = exports.wednesdays = wednesday.range;
var thursdays = exports.thursdays = thursday.range;
var fridays = exports.fridays = friday.range;
var saturdays = exports.saturdays = saturday.range;

/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.years = undefined;

var _interval = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var year = (0, _interval2.default)(function (date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
  return end.getFullYear() - start.getFullYear();
}, function (date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _interval2.default)(function (date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

exports.default = year;
var years = exports.years = year.range;

/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");

Object.defineProperty(exports, "now", {
  enumerable: true,
  get: function get() {
    return _timer.now;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function get() {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "timerFlush", {
  enumerable: true,
  get: function get() {
    return _timer.timerFlush;
  }
});

var _timeout = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");

Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeout).default;
  }
});

var _interval = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");

Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interval).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer(),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? (0, _timer.now)() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");

/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");

/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.now = now;
exports.Timer = Timer;
exports.timer = timer;
exports.timerFlush = timerFlush;
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
      e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ }),

/***/ "./node_modules/d3-tip/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3-tip/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var direction = d3TipDirection,
      offset = d3TipOffset,
      html = d3TipHTML,
      rootElement = document.body,
      node = initNode(),
      svg = null,
      point = null,
      target = null;

  function tip(vis) {
    svg = getSVGNode(vis);
    if (!svg) return;
    point = svg.createSVGPoint();
    rootElement.appendChild(node);
  }

  // Public - show the tooltip on the screen
  //
  // Returns a tip
  tip.show = function () {
    var args = Array.prototype.slice.call(arguments);
    if (args[args.length - 1] instanceof SVGElement) target = args.pop();

    var content = html.apply(this, args),
        poffset = offset.apply(this, args),
        dir = direction.apply(this, args),
        nodel = getNodeEl(),
        i = directions.length,
        coords,
        scrollTop = document.documentElement.scrollTop || rootElement.scrollTop,
        scrollLeft = document.documentElement.scrollLeft || rootElement.scrollLeft;

    nodel.html(content).style('opacity', 1).style('pointer-events', 'all');

    while (i--) {
      nodel.classed(directions[i], false);
    }coords = directionCallbacks.get(dir).apply(this);
    nodel.classed(dir, true).style('top', coords.top + poffset[0] + scrollTop + 'px').style('left', coords.left + poffset[1] + scrollLeft + 'px');

    return tip;
  };

  // Public - hide the tooltip
  //
  // Returns a tip
  tip.hide = function () {
    var nodel = getNodeEl();
    nodel.style('opacity', 0).style('pointer-events', 'none');
    return tip;
  };

  // Public: Proxy attr calls to the d3 tip container.
  // Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  // eslint-disable-next-line no-unused-vars
  tip.attr = function (n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().attr(n);
    }

    var args = Array.prototype.slice.call(arguments);
    _d3Selection.selection.prototype.attr.apply(getNodeEl(), args);
    return tip;
  };

  // Public: Proxy style calls to the d3 tip container.
  // Sets or gets a style value.
  //
  // n - name of the property
  // v - value of the property
  //
  // Returns tip or style property value
  // eslint-disable-next-line no-unused-vars
  tip.style = function (n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().style(n);
    }

    var args = Array.prototype.slice.call(arguments);
    _d3Selection.selection.prototype.style.apply(getNodeEl(), args);
    return tip;
  };

  // Public: Set or get the direction of the tooltip
  //
  // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
  //     sw(southwest), ne(northeast) or se(southeast)
  //
  // Returns tip or direction
  tip.direction = function (v) {
    if (!arguments.length) return direction;
    direction = v == null ? v : functor(v);

    return tip;
  };

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function (v) {
    if (!arguments.length) return offset;
    offset = v == null ? v : functor(v);

    return tip;
  };

  // Public: sets or gets the html value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns html value or tip
  tip.html = function (v) {
    if (!arguments.length) return html;
    html = v == null ? v : functor(v);

    return tip;
  };

  // Public: sets or gets the root element anchor of the tooltip
  //
  // v - root element of the tooltip
  //
  // Returns root node of tip
  tip.rootElement = function (v) {
    if (!arguments.length) return rootElement;
    rootElement = v == null ? v : functor(v);

    return tip;
  };

  // Public: destroys the tooltip and removes it from the DOM
  //
  // Returns a tip
  tip.destroy = function () {
    if (node) {
      getNodeEl().remove();
      node = null;
    }
    return tip;
  };

  function d3TipDirection() {
    return 'n';
  }
  function d3TipOffset() {
    return [0, 0];
  }
  function d3TipHTML() {
    return ' ';
  }

  var directionCallbacks = (0, _d3Collection.map)({
    n: directionNorth,
    s: directionSouth,
    e: directionEast,
    w: directionWest,
    nw: directionNorthWest,
    ne: directionNorthEast,
    sw: directionSouthWest,
    se: directionSouthEast
  }),
      directions = directionCallbacks.keys();

  function directionNorth() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.n.y - node.offsetHeight,
      left: bbox.n.x - node.offsetWidth / 2
    };
  }

  function directionSouth() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.s.y,
      left: bbox.s.x - node.offsetWidth / 2
    };
  }

  function directionEast() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.e.y - node.offsetHeight / 2,
      left: bbox.e.x
    };
  }

  function directionWest() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.w.y - node.offsetHeight / 2,
      left: bbox.w.x - node.offsetWidth
    };
  }

  function directionNorthWest() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.nw.y - node.offsetHeight,
      left: bbox.nw.x - node.offsetWidth
    };
  }

  function directionNorthEast() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.ne.y - node.offsetHeight,
      left: bbox.ne.x
    };
  }

  function directionSouthWest() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.sw.y,
      left: bbox.sw.x - node.offsetWidth
    };
  }

  function directionSouthEast() {
    var bbox = getScreenBBox(this);
    return {
      top: bbox.se.y,
      left: bbox.se.x
    };
  }

  function initNode() {
    var div = (0, _d3Selection.select)(document.createElement('div'));
    div.style('position', 'absolute').style('top', 0).style('opacity', 0).style('pointer-events', 'none').style('box-sizing', 'border-box');

    return div.node();
  }

  function getSVGNode(element) {
    var svgNode = element.node();
    if (!svgNode) return null;
    if (svgNode.tagName.toLowerCase() === 'svg') return svgNode;
    return svgNode.ownerSVGElement;
  }

  function getNodeEl() {
    if (node == null) {
      node = initNode();
      // re-add node to DOM
      rootElement.appendChild(node);
    }
    return (0, _d3Selection.select)(node);
  }

  // Private - gets the screen coordinates of a shape
  //
  // Given a shape on the screen, will return an SVGPoint for the directions
  // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
  // nw(northwest), sw(southwest).
  //
  //    +-+-+
  //    |   |
  //    +   +
  //    |   |
  //    +-+-+
  //
  // Returns an Object {n, s, e, w, nw, sw, ne, se}
  function getScreenBBox(targetShape) {
    var targetel = target || targetShape;

    while (targetel.getScreenCTM == null && targetel.parentNode != null) {
      targetel = targetel.parentNode;
    }

    var bbox = {},
        matrix = targetel.getScreenCTM(),
        tbbox = targetel.getBBox(),
        width = tbbox.width,
        height = tbbox.height,
        x = tbbox.x,
        y = tbbox.y;

    point.x = x;
    point.y = y;
    bbox.nw = point.matrixTransform(matrix);
    point.x += width;
    bbox.ne = point.matrixTransform(matrix);
    point.y += height;
    bbox.se = point.matrixTransform(matrix);
    point.x -= width;
    bbox.sw = point.matrixTransform(matrix);
    point.y -= height / 2;
    bbox.w = point.matrixTransform(matrix);
    point.x += width;
    bbox.e = point.matrixTransform(matrix);
    point.x -= width / 2;
    point.y -= height / 2;
    bbox.n = point.matrixTransform(matrix);
    point.y += height;
    bbox.s = point.matrixTransform(matrix);

    return bbox;
  }

  // Private - replace D3JS 3.X d3.functor() function
  function functor(v) {
    return typeof v === 'function' ? v : function () {
      return v;
    };
  }

  return tip;
};

var _d3Collection = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _schedule.SCHEDULED && schedule.name === name) {
        return new _index.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
};

var _index = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");

var _schedule = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var root = [null];

/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interrupt = exports.active = exports.transition = undefined;

var _index = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");

Object.defineProperty(exports, "transition", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _active = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");

Object.defineProperty(exports, "active", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_active).default;
  }
});

var _interrupt = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");

Object.defineProperty(exports, "interrupt", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interrupt).default;
  }
});

__webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;continue;
    }
    active = schedule.state > _schedule.STARTING && schedule.state < _schedule.ENDING;
    schedule.state = _schedule.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
};

var _schedule = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _interrupt = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");

var _interrupt2 = _interopRequireDefault(_interrupt);

var _transition = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_d3Selection.selection.prototype.interrupt = _interrupt2.default;
_d3Selection.selection.prototype.transition = _transition2.default;

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return this.each(function () {
    (0, _interrupt2.default)(this, name);
  });
};

var _interrupt = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");

var _interrupt2 = _interopRequireDefault(_interrupt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var id, timing;

  if (name instanceof _index.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0, _index.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0, _schedule2.default)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id);
};

var _index = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");

var _schedule = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var _schedule2 = _interopRequireDefault(_schedule);

var _d3Ease = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");

var _d3Timer = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: _d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = (0, _d3Timer.now)(), defaultTiming;
    }
  }
  return timing;
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _d3Selection.namespace)(name),
      i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolate2.default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tween.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

var _d3Interpolate = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _tween = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");

var _interpolate = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = (0, _d3Selection.namespace)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _schedule.get)(this.node(), id).delay;
};

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function delayFunction(id, value) {
  return function () {
    (0, _schedule.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.init)(this, id).delay = value;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _schedule.get)(this.node(), id).duration;
};

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function durationFunction(id, value) {
  return function () {
    (0, _schedule.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.set)(this, id).duration = value;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each(easeConstant(id, value)) : (0, _schedule.get)(this.node(), id).ease;
};

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    (0, _schedule.set)(this, id).ease = value;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = { value: reject },
        end = { value: function value() {
        if (--size === 0) resolve();
      } };

    that.each(function () {
      var schedule = (0, _schedule.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
};

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, this._name, this._id);
};

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = Transition;
exports.default = transition;
exports.newId = newId;

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _attr = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _attrTween = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");

var _attrTween2 = _interopRequireDefault(_attrTween);

var _delay = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");

var _delay2 = _interopRequireDefault(_delay);

var _duration = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");

var _duration2 = _interopRequireDefault(_duration);

var _ease = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");

var _ease2 = _interopRequireDefault(_ease);

var _filter = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _merge = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");

var _on2 = _interopRequireDefault(_on);

var _remove = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");

var _remove2 = _interopRequireDefault(_remove);

var _select = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");

var _selectAll2 = _interopRequireDefault(_selectAll);

var _selection = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");

var _selection2 = _interopRequireDefault(_selection);

var _style = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");

var _style2 = _interopRequireDefault(_style);

var _styleTween = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");

var _styleTween2 = _interopRequireDefault(_styleTween);

var _text = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");

var _text2 = _interopRequireDefault(_text);

var _textTween = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");

var _textTween2 = _interopRequireDefault(_textTween);

var _transition = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");

var _transition2 = _interopRequireDefault(_transition);

var _tween = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");

var _tween2 = _interopRequireDefault(_tween);

var _end = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");

var _end2 = _interopRequireDefault(_end);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0, _d3Selection.selection)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = _d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  merge: _merge2.default,
  selection: _selection2.default,
  transition: _transition2.default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on2.default,
  attr: _attr2.default,
  attrTween: _attrTween2.default,
  style: _style2.default,
  styleTween: _styleTween2.default,
  text: _text2.default,
  textTween: _textTween2.default,
  remove: _remove2.default,
  tween: _tween2.default,
  delay: _delay2.default,
  duration: _duration2.default,
  ease: _ease2.default,
  end: _end2.default
};

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

var _d3Color = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");

var _d3Interpolate = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Transition(merges, this._parents, this._name, this._id);
};

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, listener) {
  var id = this._id;

  return arguments.length < 2 ? (0, _schedule.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? _schedule.init : _schedule.set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.on("end.remove", removeFunction(this._id));
};

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;
    for (var i in this.__transition) {
      if (+i !== id) return;
    }if (parent) parent.removeChild(this);
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = undefined;

exports.default = function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

exports.init = init;
exports.set = set;
exports.get = get;

var _d3Dispatch = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");

var _d3Timer = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");

var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = exports.CREATED = 0;
var SCHEDULED = exports.SCHEDULED = 1;
var STARTING = exports.STARTING = 2;
var STARTED = exports.STARTED = 3;
var RUNNING = exports.RUNNING = 4;
var ENDING = exports.ENDING = 5;
var ENDED = exports.ENDED = 6;

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0, _d3Timer.timeout)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0, _d3Timer.timeout)(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selector)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0, _schedule2.default)(subgroup[i], name, id, i, subgroup, (0, _schedule.get)(node, id));
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, name, id);
};

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0, _schedule.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0, _schedule2.default)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, parents, name, id);
};

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Selection(this._groups, this._parents);
};

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var Selection = _d3Selection.selection.prototype.constructor;

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolate2.default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tween.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

var _d3Interpolate = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var _tween = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");

var _interpolate = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name),
        string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = (0, _d3Selection.style)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return this.tween("text", typeof value === "function" ? textFunction((0, _tween.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

var _tween = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
};

function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var name = this._name,
      id0 = this._id,
      id1 = (0, _index.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0, _schedule.get)(node, id0);
        (0, _schedule2.default)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id1);
};

var _index = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0, _schedule.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

exports.tweenValue = tweenValue;

var _schedule = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function () {
    var schedule = (0, _schedule.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function (node) {
    return (0, _schedule.get)(node, id).value[name];
  };
}

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/defaultLocale.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/defaultLocale.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrefix = exports.format = undefined;
exports.default = defaultLocale;

var _locale = __webpack_require__(/*! ./locale.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/locale.js");

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale;
var format = exports.format = undefined;
var formatPrefix = exports.formatPrefix = undefined;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = (0, _locale2.default)(definition);
  exports.format = format = locale.format;
  exports.formatPrefix = formatPrefix = locale.formatPrefix;
  return locale;
}

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x = (0, _formatDecimal2.default)(Math.abs(x)), x ? x[1] : NaN;
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatDecimal.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatDecimal.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i,
      coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatGroup.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatGroup.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatNumerals.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatNumerals.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatPrefixAuto.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatPrefixAuto.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prefixExponent = undefined;

exports.default = function (x, p) {
    var d = (0, _formatDecimal2.default)(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (exports.prefixExponent = prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimal2.default)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixExponent = exports.prefixExponent = undefined;

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatRounded.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatRounded.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (x, p) {
    var d = (0, _formatDecimal2.default)(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

var _formatDecimal = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatDecimal.js");

var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatSpecifier.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatSpecifier.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatSpecifier;
exports.FormatSpecifier = FormatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTrim.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTrim.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;break;
      case "0":
        if (i0 === 0) i0 = i;i1 = i;break;
      default:
        if (!+s[i]) break out;if (i0 > 0) i0 = 0;break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTypes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTypes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatPrefixAuto = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatPrefixAuto.js");

var _formatPrefixAuto2 = _interopRequireDefault(_formatPrefixAuto);

var _formatRounded = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatRounded.js");

var _formatRounded2 = _interopRequireDefault(_formatRounded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  "%": function _(x, p) {
    return (x * 100).toFixed(p);
  },
  "b": function b(x) {
    return Math.round(x).toString(2);
  },
  "c": function c(x) {
    return x + "";
  },
  "d": function d(x) {
    return Math.round(x).toString(10);
  },
  "e": function e(x, p) {
    return x.toExponential(p);
  },
  "f": function f(x, p) {
    return x.toFixed(p);
  },
  "g": function g(x, p) {
    return x.toPrecision(p);
  },
  "o": function o(x) {
    return Math.round(x).toString(8);
  },
  "p": function p(x, _p) {
    return (0, _formatRounded2.default)(x * 100, _p);
  },
  "r": _formatRounded2.default,
  "s": _formatPrefixAuto2.default,
  "X": function X(x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  "x": function x(_x) {
    return Math.round(_x).toString(16);
  }
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/identity.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/identity.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return x;
};

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultLocale = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/defaultLocale.js");

Object.defineProperty(exports, "formatDefaultLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultLocale).default;
  }
});
Object.defineProperty(exports, "format", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.format;
  }
});
Object.defineProperty(exports, "formatPrefix", {
  enumerable: true,
  get: function get() {
    return _defaultLocale.formatPrefix;
  }
});

var _locale = __webpack_require__(/*! ./locale.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/locale.js");

Object.defineProperty(exports, "formatLocale", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_locale).default;
  }
});

var _formatSpecifier = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatSpecifier.js");

Object.defineProperty(exports, "formatSpecifier", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_formatSpecifier).default;
  }
});
Object.defineProperty(exports, "FormatSpecifier", {
  enumerable: true,
  get: function get() {
    return _formatSpecifier.FormatSpecifier;
  }
});

var _precisionFixed = __webpack_require__(/*! ./precisionFixed.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionFixed.js");

Object.defineProperty(exports, "precisionFixed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionFixed).default;
  }
});

var _precisionPrefix = __webpack_require__(/*! ./precisionPrefix.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionPrefix.js");

Object.defineProperty(exports, "precisionPrefix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionPrefix).default;
  }
});

var _precisionRound = __webpack_require__(/*! ./precisionRound.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionRound.js");

Object.defineProperty(exports, "precisionRound", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_precisionRound).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/locale.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/locale.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity2.default : (0, _formatGroup2.default)(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity2.default : (0, _formatNumerals2.default)(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = (0, _formatSpecifier2.default)(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes2.default[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes2.default[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = (0, _formatTrim2.default)(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);break;
        default:
          value = padding + valuePrefix + value + valueSuffix;break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0, _formatSpecifier2.default)(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
};

var _exponent = __webpack_require__(/*! ./exponent.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

var _formatGroup = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatGroup.js");

var _formatGroup2 = _interopRequireDefault(_formatGroup);

var _formatNumerals = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatNumerals.js");

var _formatNumerals2 = _interopRequireDefault(_formatNumerals);

var _formatSpecifier = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatSpecifier.js");

var _formatSpecifier2 = _interopRequireDefault(_formatSpecifier);

var _formatTrim = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTrim.js");

var _formatTrim2 = _interopRequireDefault(_formatTrim);

var _formatTypes = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatTypes.js");

var _formatTypes2 = _interopRequireDefault(_formatTypes);

var _formatPrefixAuto = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/formatPrefixAuto.js");

var _identity = __webpack_require__(/*! ./identity.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/identity.js");

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionFixed.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionFixed.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step) {
  return Math.max(0, -(0, _exponent2.default)(Math.abs(step)));
};

var _exponent = __webpack_require__(/*! ./exponent.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionPrefix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionPrefix.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3 - (0, _exponent2.default)(Math.abs(step)));
};

var _exponent = __webpack_require__(/*! ./exponent.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionRound.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/node_modules/d3-format/src/precisionRound.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, (0, _exponent2.default)(max) - (0, _exponent2.default)(step)) + 1;
};

var _exponent = __webpack_require__(/*! ./exponent.js */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/exponent.js");

var _exponent2 = _interopRequireDefault(_exponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/src/charts/bar/reusable-bar-chart/reusable-bar-chart.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/src/charts/bar/reusable-bar-chart/reusable-bar-chart.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reusableBarChart = reusableBarChart;

var _d3Scale = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

__webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");

var _d3Ease = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");

var _d3Tip = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");

var _d3Tip2 = _interopRequireDefault(_d3Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reusableBarChart() {
  var initialConfiguration = {
    width: 300,
    height: 50,
    padding: 5,
    data: [],
    colorScale: (0, _d3Scale.scaleLinear)().range(['#dfecda', '#65b344']),
    tooltipFormatter: function tooltipFormatter(d) {
      return d.data.label + ': ' + d.data.value;
    }
  };

  var width = initialConfiguration.width;
  var height = initialConfiguration.height;
  var padding = initialConfiguration.padding;
  var data = initialConfiguration.data;
  var colorScale = initialConfiguration.colorScale;
  var tooltipFormatter = initialConfiguration.tooltipFormatter;

  var updateData = void 0;var xScale = null;

  function chart(selection) {
    selection.each(function () {
      var barChartSvg = selection.append('svg').attr('height', height).attr('width', width);

      xScale = (0, _d3Scale.scaleBand)().domain(data.map(function (d) {
        return d.label;
      })).range([0, width]);

      var xScalePadding = padding / xScale.bandwidth();
      xScale.paddingInner(xScalePadding);

      var yScale = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(data, function (d) {
        return d.value;
      })]).range([height, 0]);

      colorScale.domain([0, data.length]);

      var tooltip = (0, _d3Tip2.default)().attr('class', 'd3-tip').direction(function (d) {
        return d.isArea ? 's' : 'n';
      }).offset(function (d) {
        return d.isArea ? [8, 0] : [-8, 0];
      }).html(tooltipFormatter);

      barChartSvg.call(tooltip);

      var bars = barChartSvg.append('g').selectAll('rect').data(data);

      bars.enter().append('rect').attr('class', 'bar-area').attr('x', function (d) {
        return xScale(d.label);
      }).attr('y', 0).attr('width', xScale.bandwidth()).attr('height', function (d) {
        return yScale(d.value);
      }).attr('fill', function (d, i) {
        return '#eaeaea';
      }).on('mouseover', function (d) {
        tooltip.show({ data: d, isArea: true }, this);
      }).on('mouseout', function () {
        tooltip.hide();
      });

      bars.enter().append('rect').attr('class', 'bar').attr('x', function (d) {
        return xScale(d.label);
      }).attr('y', function (d) {
        return yScale(d.value);
      }).attr('width', xScale.bandwidth()).attr('height', function (d) {
        return height - yScale(d.value);
      }).attr('fill', function (d, i) {
        return colorScale(i);
      }).on('mouseover', function (d) {
        tooltip.show({ data: d, isArea: false }, this);
      }).on('mouseout', function () {
        tooltip.hide();
      });

      updateData = function updateData() {
        xScale.domain(data.map(function (d) {
          return d.label;
        }));
        yScale.domain([0, (0, _d3Array.max)(data, function (d) {
          return d.value;
        })]);
        colorScale.domain([0, data.length]);

        var updatedBars = barChartSvg.selectAll('.bar').data(data);
        var updatedBarAreas = barChartSvg.selectAll('.bar-area').data(data);

        updatedBarAreas.enter().append('rect').attr('class', 'bar-area').attr('x', function (d) {
          return xScale(d.label);
        }).attr('y', 0).attr('width', xScale.bandwidth()).attr('height', function (d) {
          return yScale(d.value);
        }).attr('fill', function (d, i) {
          return '#eaeaea';
        }).on('mouseover', function (d) {
          tooltip.show({ data: d, isArea: true }, this);
        }).on('mouseout', function () {
          tooltip.hide();
        });

        updatedBars.enter().append('rect').attr('class', 'bar').attr('x', function (d) {
          return xScale(d.label);
        }).attr('y', function (d) {
          return yScale(d.value);
        }).attr('width', xScale.bandwidth()).attr('height', function (d) {
          return height - yScale(d.value);
        }).attr('fill', function (d, i) {
          return colorScale(i);
        }).on('mouseover', function (d) {
          tooltip.show({ data: d, isArea: false }, this);
        }).on('mouseout', function () {
          tooltip.hide();
        });

        updatedBarAreas.transition().ease(_d3Ease.easeLinear).duration(750).attr('x', function (d) {
          return xScale(d.label);
        }).attr('y', 0).attr('width', xScale.bandwidth()).attr('height', function (d) {
          return yScale(d.value);
        }).attr('fill', function (d, i) {
          return '#eaeaea';
        });

        updatedBars.transition().ease(_d3Ease.easeLinear).duration(750).attr('x', function (d) {
          return xScale(d.label);
        }).attr('y', function (d) {
          return yScale(d.value);
        }).attr('width', xScale.bandwidth()).attr('height', function (d) {
          return height - yScale(d.value);
        }).attr('fill', function (d, i) {
          return colorScale(i);
        });

        updatedBarAreas.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedBars.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();
      };
    });
  }

  chart.width = function (value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function (value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.padding = function (value) {
    if (!arguments.length) return padding;
    padding = value;
    var xScalePadding = padding / xScale.bandwidth();
    xScale.paddingInner(xScalePadding);
    if (typeof updateData === 'function') updateData();
    return chart;
  };

  chart.colors = function (value) {
    if (!arguments.length) return colorScale;
    colorScale.range([value[0], value[1]]);
    if (typeof updateData === 'function') updateData();
    return chart;
  };

  chart.tooltipFormatter = function (value) {
    if (!arguments.length) {
      return tooltipFormatter;
    }
    if (value == null) {
      tooltipFormatter = initialConfiguration.tooltipFormatter;
    } else {
      tooltipFormatter = value;
    }
    return chart;
  };

  chart.data = function (value) {
    if (!arguments.length) return data;
    data = value;
    if (typeof updateData === 'function') updateData();
    return chart;
  };

  return chart;
}

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/src/charts/line/reusable-line-chart/reusable-line-chart.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/src/charts/line/reusable-line-chart/reusable-line-chart.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reusableLineChart = reusableLineChart;

var _d3Transition = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");

var _d3Scale = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");

var _d3Axis = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");

var _d3Ease = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");

var _d3Array = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

var _d3Selection = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var _d3Format = __webpack_require__(/*! d3-format */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/index.js");

var _d3Shape = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");

var _d3Tip = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");

var _d3Tip2 = _interopRequireDefault(_d3Tip);

var _util = __webpack_require__(/*! ../../../util */ "./node_modules/vulekamali-visualisations/src/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var margin = {
  top: 50, right: 50, bottom: 80, left: 60
};
var SYMBOL_WIDTH = 7.5;

function processRawData(data) {
  return data.map(function (d) {
    return Object.assign(d, {
      date: new Date(d.date)
    });
  });
}

function reusableLineChart() {
  var initialConfiguration = {
    width: 850,
    height: 450,
    spentCircleTooltipFormatter: function spentCircleTooltipFormatter(d) {
      return '<div><span class="tooltip-label">Total spent:</span>&nbsp;&nbsp;<span class="tooltip-value">' + (0, _util.humaniseRand)(d.data.total_spent_to_date) + '</span></div>\n<div><span class="tooltip-label">Spent in quarter:</span>&nbsp;&nbsp;<span class="tooltip-value">' + (0, _util.humaniseRand)(d.data.total_spent_in_quarter) + '</span></div>';
    },
    totalCostCircleTooltipFormatter: function totalCostCircleTooltipFormatter(d) {
      return '<div><span class="tooltip-label">Total project cost:</span>&nbsp;<span class="tooltip-value">' + (0, _util.humaniseRand)(d.data.total_estimated_project_cost) + '</span></div>';
    },
    statusLabelTooltipFormatter: function statusLabelTooltipFormatter(d) {
      return '<div class="status-tooltip">' + d.label + '</div>';
    }
  };

  var width = initialConfiguration.width;
  var height = initialConfiguration.height;

  var data = [];
  var spentCircleTooltipFormatter = initialConfiguration.spentCircleTooltipFormatter;
  var totalCostCircleTooltipFormatter = initialConfiguration.totalCostCircleTooltipFormatter;
  var statusLabelTooltipFormatter = initialConfiguration.statusLabelTooltipFormatter;

  var updateData = null;
  var correspondingSpentLineCircle = void 0;var correspondingTotalCostCircle = null;

  function chart(selection) {
    selection.each(function () {
      var xDomainValues = getXDomainValues(data);
      var minimalXDomainValue = (0, _d3Array.min)(xDomainValues);
      var newMinXDomainValue = new Date(minimalXDomainValue).setMonth(minimalXDomainValue.getMonth() - 3);
      var yDomainValues = getYDomainValues(data);
      var xScaleLength = width - margin.right - margin.left;
      var yScaleLength = height - margin.bottom - margin.top;

      var xScale = (0, _d3Scale.scaleTime)().domain([newMinXDomainValue, (0, _d3Array.max)(xDomainValues)]).range([margin.left, width - margin.right]);
      var yScale = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(yDomainValues)]).range([height - margin.bottom, margin.top]).nice();

      var svg = selection.append('svg').attr('width', width).attr('height', height).append('g');

      var spentCircleTooltip = (0, _d3Tip2.default)().attr('class', 'd3-tip').direction(function (d) {
        return d.direction;
      }).offset(function (d) {
        return d.direction === 'n' ? [-8, 0] : [8, 0];
      }).html(spentCircleTooltipFormatter);

      var totalCostCircleTooltip = (0, _d3Tip2.default)().attr('class', 'd3-tip').direction(function (d) {
        return d.direction;
      }).offset(function (d) {
        return d.direction === 'n' ? [-8, 0] : [8, 0];
      }).html(totalCostCircleTooltipFormatter);

      var statusLabelTooltip = (0, _d3Tip2.default)().attr('class', 'd3-tip').offset([-8, 0]).html(statusLabelTooltipFormatter);

      svg.call(spentCircleTooltip);
      svg.call(totalCostCircleTooltip);
      svg.call(statusLabelTooltip);

      var backgroundRectanglesGroup = svg.append('g').attr('class', 'background-rectangles');

      backgroundRectanglesGroup.selectAll('rect').data(data).enter().append('rect').attr('class', 'background-rectangle').attr('x', function (datum) {
        return xScale(datum.date) - xScaleLength / data.length;
      }).attr('y', yScale.range()[1]).attr('width', xScaleLength / data.length).attr('height', function () {
        return yScaleLength;
      }).attr('fill', 'none').on('mouseover', function (d) {
        showTooltip(d);
      }).on('mouseout', function () {
        hideTooltip();
      });

      var statusLineElementsGroup = svg.append('g').attr('class', 'status-line-elements');

      statusLineElementsGroup.selectAll('path').data(getStatusLineData(data)).enter().append('path').attr('class', 'status-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
        return d.start && !d.dotted || d.end && d.dotted ? xScale(d.date) + 20 : xScale(d.date);
      }).y(function (d) {
        return d.end && !d.dotted ? 25 : 10;
      })).attr('stroke', 'black').style('stroke-width', 1).style('stroke-dasharray', function (d) {
        return d[0].dotted ? 2 : null;
      }).style('fill', 'none');

      statusLineElementsGroup.selectAll('text').data(getStatusLabelsData(data)).enter().append('text').attr('class', 'status-line-label').attr('fill', 'black').attr('text-anchor', 'middle').attr('transform', function (d) {
        return 'translate(' + ((xScale(d.startDate) + xScale(d.endDate)) / 2 + 10) + ',22)';
      }).text(function (d) {
        return getStatusLabelText(d);
      }).on('mouseover', function (d) {
        if (isStatusLabelTruncated(d)) {
          statusLabelTooltip.show(d, this);
        }
      }).on('mouseout', function () {
        statusLabelTooltip.hide();
      });

      var spentLineElementsGroup = svg.append('g').attr('class', 'spent-line-elements');

      spentLineElementsGroup.selectAll('path').data(getTotalSpentLineData(data)).enter().append('path').attr('class', 'spent-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
        return xScale(d.date);
      }).y(function (d) {
        return yScale(d.total_spent_to_date);
      })).attr('stroke', 'black').style('stroke-width', 1).style('fill', 'none');

      spentLineElementsGroup.selectAll('circle').data(getTotalSpentCircleData(data)).enter().append('circle').attr('class', 'spent-line-circle').attr('cx', function (datum) {
        return xScale(datum.date);
      }).attr('cy', function (datum) {
        return yScale(datum.total_spent_to_date);
      }).attr('r', 5).attr('fill', '#333333').on('mouseover', function (d) {
        spentCircleTooltip.show({ data: d, direction: 'n' }, this);
      }).on('mouseout', function () {
        spentCircleTooltip.hide();
      });

      var totalCostElementsGroup = svg.append('g').attr('class', 'total-cost-line-elements');

      totalCostElementsGroup.selectAll('path').data(getTotalСostLineData(data)).enter().append('path').attr('class', 'total-cost-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
        return xScale(d.date);
      }).y(function (d) {
        return yScale(d.total_estimated_project_cost);
      })).attr('stroke', 'black').style('stroke-width', 1).style('stroke-dasharray', '4 5').style('stroke-miterlimit', 16).style('fill', 'none');

      totalCostElementsGroup.selectAll('circle').data(getTotalСostCircleData(data)).enter().append('circle').attr('class', 'total-cost-line-circle').attr('cx', function (datum) {
        return xScale(datum.date);
      }).attr('cy', function (datum) {
        return yScale(datum.total_estimated_project_cost);
      }).attr('r', 5).attr('fill', 'none').on('mouseover', function (d) {
        totalCostCircleTooltip.show({ data: d, direction: 'n' }, this);
      }).on('mouseout', function () {
        totalCostCircleTooltip.hide();
      });

      var xAxis = (0, _d3Axis.axisBottom)(xScale).tickValues(xDomainValues).tickFormat('').tickSize(7).tickSizeOuter(0);

      var gXAxis = svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + (height - margin.bottom) + ')').call(xAxis);
      applyAxisStyle(gXAxis);

      gXAxis.selectAll('.axis-tick-label').data(data).enter().append('text').attr('class', 'axis-tick-label').attr('fill', 'black').attr('transform', function (d) {
        return 'translate(' + xScale(d.date) + ',20)';
      }).text(function (d) {
        return d.quarter_label;
      });

      gXAxis.selectAll('.axis-tick-year-label').data(data).enter().append('text').attr('class', 'axis-tick-year-label').attr('fill', '#bcbcbc').attr('transform', function (d) {
        return 'translate(' + xScale(d.date) + ',40)';
      }).text(function (d) {
        return d.financial_year_label;
      });

      var yAxisGrid = (0, _d3Axis.axisLeft)(yScale).ticks(4).tickFormat('').tickSize(-width + margin.left + margin.right);

      var yAxis = (0, _d3Axis.axisLeft)(yScale).ticks(4).tickFormat(function (d) {
        return d !== 0 ? '' + (0, _util.humaniseRand)(d, false) : '';
      }).tickSizeInner(5).tickSizeOuter(0);

      var gYAxisGrid = svg.append('g').attr('class', 'grid').attr('transform', 'translate(' + margin.left + ',0)').call(yAxisGrid);

      var gYAxis = svg.append('g').attr('class', 'y axis').attr('transform', 'translate(' + margin.left + ',0)').call(yAxis);

      applyGridStyle(gYAxisGrid);
      applyAxisStyle(gYAxis, true);

      var legend = svg.selectAll('legend').data([{ label: 'Estimated total project cost', 'stroke-dasharray': '4 5' }, { label: 'Quarterly actual spend' }]).enter().append('g').attr('class', 'legend').attr('transform', function (d, i) {
        return 'translate(' + (i * 230 + 60) + ',' + (height - 30) + ')';
      });

      legend.call(appendLegendItem);

      function appendLegendItem(selection) {
        selection.append('rect').attr('x', 0).attr('y', 0).attr('width', 20).attr('height', 20);

        selection.append('line').attr('x1', 0).attr('y1', 10).attr('x2', 20).attr('y2', 10).attr('stroke-dasharray', function (d) {
          return d['stroke-dasharray'] ? d['stroke-dasharray'] : null;
        });

        selection.append('text').attr('x', 25).attr('y', 15).text(function (d) {
          return d.label;
        }).style('text-anchor', 'start');
      }

      function getXDomainValues(data) {
        if (data && data.length > 0) {
          return data.map(function (group) {
            return new Date(group.date);
          }).sort(function (a, b) {
            return a - b;
          });
        }
        return [new Date(), new Date()];
      }

      function getYDomainValues(data) {
        return data.map(function (group) {
          return [parseFloat(group.total_spent_to_date), parseFloat(group.total_estimated_project_cost)];
        }).flat().sort(function (a, b) {
          return a - b;
        });
      }

      function getTotalSpentLineData(data) {
        var result = [];
        if (data && data.length > 0) {
          for (var i = 0; i < data.length - 1; i++) {
            if (data[i].total_spent_to_date && data[i + 1].total_spent_to_date) {
              result.push([data[i], data[i + 1]]);
            }
          }
          return result;
        }
        return [];
      }

      function getStatusLineData(data) {
        var result = [];
        if (data && data.length > 0) {
          var allStatuses = data.filter(function (d) {
            return !!d.status;
          }).map(function (d) {
            return d.status;
          });
          var uniqueStatuses = [];
          allStatuses.forEach(function (status) {
            if (uniqueStatuses.indexOf(status) === -1) {
              uniqueStatuses.push(status);
            }
          });
          uniqueStatuses.forEach(function (status) {
            var currentStatusPoints = data.filter(function (d) {
              return d.status === status;
            });
            result.push([{
              date: new Date(currentStatusPoints[0].date).setMonth(currentStatusPoints[0].date.getMonth() - 3),
              dotted: true,
              start: true
            }, {
              date: new Date(currentStatusPoints[0].date).setMonth(currentStatusPoints[0].date.getMonth() - 3),
              dotted: true,
              end: true
            }]);
            result.push([{
              date: new Date(currentStatusPoints[0].date).setMonth(currentStatusPoints[0].date.getMonth() - 3),
              start: true
            }, {
              date: currentStatusPoints[currentStatusPoints.length - 1].date
            }, {
              date: currentStatusPoints[currentStatusPoints.length - 1].date,
              end: true
            }]);
          });
          return result;
        }
        return [];
      }

      function getStatusLabelsData(data) {
        var result = [];
        if (data && data.length > 0) {
          var allStatuses = data.filter(function (d) {
            return !!d.status;
          }).map(function (d) {
            return d.status;
          });
          var uniqueStatuses = [];
          allStatuses.forEach(function (status) {
            if (uniqueStatuses.indexOf(status) === -1) {
              uniqueStatuses.push(status);
            }
          });
          uniqueStatuses.forEach(function (status) {
            var currentStatusPoints = data.filter(function (d) {
              return d.status === status;
            });
            result.push({
              startDate: new Date(currentStatusPoints[0].date).setMonth(currentStatusPoints[0].date.getMonth() - 3),
              endDate: currentStatusPoints[currentStatusPoints.length - 1].date,
              label: status
            });
          });
          return result;
        }
        return [];
      }

      function getStatusLabelText(d) {
        var placeholderLength = xScale(d.endDate) - xScale(d.startDate) - 20;
        return placeholderLength > d.label.length * SYMBOL_WIDTH ? d.label : d.label.slice(0, placeholderLength / SYMBOL_WIDTH) + '...';
      }

      function isStatusLabelTruncated(d) {
        return xScale(d.endDate) - xScale(d.startDate) - 20 < d.label.length * SYMBOL_WIDTH;
      }

      function getTotalSpentCircleData(data) {
        return data.filter(function (d) {
          return d.total_spent_to_date !== null;
        });
      }

      function getTotalСostCircleData(data) {
        return data.filter(function (d) {
          return d.total_estimated_project_cost !== null;
        });
      }

      function getTotalСostLineData(data) {
        var result = [];
        var firstNonNullPointIndex = data.findIndex(function (d) {
          return d.total_estimated_project_cost !== null;
        });
        if (data && data.length > 0 && firstNonNullPointIndex >= 0) {
          var firstPoint = {
            date: xScale.domain()[0],
            total_estimated_project_cost: data[firstNonNullPointIndex].total_estimated_project_cost
          };
          result.push([firstPoint, data[firstNonNullPointIndex]]);
          for (var i = firstNonNullPointIndex; i < data.length - 1; i++) {
            if (data[i + 1].total_estimated_project_cost !== null) {
              if (data[i + 1].total_estimated_project_cost !== data[i].total_estimated_project_cost) {
                var middlePoint = {
                  date: data[i].date,
                  total_estimated_project_cost: data[i + 1].total_estimated_project_cost
                };
                result.push([data[i], middlePoint]);
                result.push([middlePoint, data[i + 1]]);
              } else {
                result.push([data[i], data[i + 1]]);
              }
            }
          }
          return result;
        }
        return [];
      }

      function applyAxisStyle(gAxis, yAxis) {
        gAxis.selectAll('line').style('fill', 'none').style('stroke-width', '1').style('stroke', yAxis ? 'black' : 'rgba(0, 0, 0, 0.1)').style('shape-rendering', 'crispEdges');

        gAxis.select('path').style('fill', 'none').style('stroke', 'black').style('stroke-width', '1').style('shape-rendering', 'crispEdges');
        if (yAxis) {
          (0, _d3Selection.select)(gYAxis.selectAll('.tick').nodes()[0]).attr('visibility', 'hidden');
        }
      }

      function applyGridStyle(gAxis) {
        gAxis.selectAll('line').style('fill', 'none').style('stroke-width', '1').style('stroke', 'rgba(0, 0, 0, 0.1)').style('shape-rendering', 'crispEdges');

        gAxis.select('path').style('fill', 'none').style('color', 'transparent');
      }

      function showTooltip(d) {
        correspondingSpentLineCircle = spentLineElementsGroup.selectAll('circle').filter(function (circleData) {
          return d.date === circleData.date;
        }).nodes()[0];
        correspondingTotalCostCircle = totalCostElementsGroup.selectAll('circle').filter(function (circleData) {
          return d.date === circleData.date;
        }).nodes()[0];

        var totalCostCircleDirection = 'n';
        var spentLineCircleDirection = 'n';
        if (correspondingSpentLineCircle && correspondingTotalCostCircle) {
          var spentLineCircleCY = parseFloat((0, _d3Selection.select)(correspondingSpentLineCircle).attr('cy'));
          var totalCostCircle = parseFloat((0, _d3Selection.select)(correspondingTotalCostCircle).attr('cy'));
          if (Math.abs(spentLineCircleCY - totalCostCircle) < 50) {
            if (spentLineCircleCY < totalCostCircle) {
              totalCostCircleDirection = 's';
            } else {
              spentLineCircleDirection = 's';
            }
          }
        }

        if (correspondingSpentLineCircle) {
          (0, _d3Selection.select)(correspondingSpentLineCircle).attr('fill', 'rgb(0, 137, 123)');
          spentCircleTooltip.show({
            data: d,
            direction: spentLineCircleDirection
          }, correspondingSpentLineCircle);
        }
        if (correspondingTotalCostCircle) {
          (0, _d3Selection.select)(correspondingTotalCostCircle).attr('fill', 'rgb(0, 137, 123)');
          totalCostCircleTooltip.show({
            data: d,
            direction: totalCostCircleDirection
          }, correspondingTotalCostCircle);
        }
      }

      function hideTooltip() {
        if (correspondingSpentLineCircle) {
          (0, _d3Selection.select)(correspondingSpentLineCircle).attr('fill', '#333333');
          spentCircleTooltip.hide();
        }
        if (correspondingTotalCostCircle) {
          totalCostCircleTooltip.hide();
          (0, _d3Selection.select)(correspondingTotalCostCircle).attr('fill', 'none');
        }
        correspondingSpentLineCircle = null;
        correspondingTotalCostCircle = null;
      }

      updateData = function updateData() {
        xDomainValues = getXDomainValues(data);
        var minimalXDomainValue = (0, _d3Array.min)(xDomainValues);
        var newMinXDomainValue = new Date(minimalXDomainValue).setMonth(minimalXDomainValue.getMonth() - 3);

        xScale.domain([newMinXDomainValue, (0, _d3Array.max)(xDomainValues)]);
        xAxis.scale(xScale).tickValues(xDomainValues);

        yDomainValues = getYDomainValues(data);
        yScale.domain([0, (0, _d3Array.max)(yDomainValues)]).nice();
        yAxis.scale(yScale);
        yAxisGrid.scale(yScale);

        var t = (0, _d3Transition.transition)().duration(750);

        gXAxis.transition(t).call(xAxis);

        gYAxis.transition(t).call(yAxis);

        gYAxisGrid.transition(t).call(yAxisGrid);

        applyAxisStyle(gXAxis);
        applyAxisStyle(gYAxis, true);
        applyGridStyle(gYAxisGrid);

        var updatedSpentLineCircles = spentLineElementsGroup.selectAll('circle').data(getTotalSpentCircleData(data));
        var updatedTotalCostCircles = totalCostElementsGroup.selectAll('circle').data(getTotalСostCircleData(data));
        var updatedAxisLabels = gXAxis.selectAll('.axis-tick-label').data(data);
        var updatedAxisYearLabels = gXAxis.selectAll('.axis-tick-year-label').data(data);
        var updatedSpentLine = spentLineElementsGroup.selectAll('.spent-line-path').data(getTotalSpentLineData(data));
        var updatedTotalCostLine = totalCostElementsGroup.selectAll('.total-cost-line-path').data(getTotalСostLineData(data));
        var updatedStatusLine = statusLineElementsGroup.selectAll('.status-line-path').data(getStatusLineData(data));
        var updatedStatusLabels = statusLineElementsGroup.selectAll('.status-line-label').data(getStatusLabelsData(data));
        var updatedBackgroundRectangles = backgroundRectanglesGroup.selectAll('.background-rectangle').data(data);

        updatedSpentLine.enter().append('path').attr('class', 'spent-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
          return xScale(d.date);
        }).y(function (d) {
          return yScale(d.total_spent_to_date);
        })).attr('stroke', 'black').style('stroke-width', 1).style('fill', 'none');

        updatedSpentLine.transition().duration(1000).attr('d', (0, _d3Shape.line)().x(function (d) {
          return xScale(d.date);
        }).y(function (d) {
          return yScale(d.total_spent_to_date);
        }));

        updatedSpentLine.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedTotalCostLine.enter().append('path').attr('class', 'total-cost-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
          return xScale(d.date);
        }).y(function (d) {
          return yScale(d.total_estimated_project_cost);
        })).attr('stroke', 'black').style('stroke-width', 1).style('stroke-dasharray', '4 5').style('stroke-miterlimit', 16).style('fill', 'none');

        updatedTotalCostLine.transition().duration(1000).attr('d', (0, _d3Shape.line)().x(function (d) {
          return xScale(d.date);
        }).y(function (d) {
          return yScale(d.total_estimated_project_cost);
        }));

        updatedTotalCostLine.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedStatusLine.enter().append('path').attr('class', 'status-line-path').attr('d', (0, _d3Shape.line)().x(function (d) {
          return d.start && !d.dotted || d.end && d.dotted ? xScale(d.date) + 20 : xScale(d.date);
        }).y(function (d) {
          return d.end && !d.dotted ? 25 : 10;
        })).attr('stroke', 'black').style('stroke-width', 1).style('stroke-dasharray', function (d) {
          return d[0].dotted ? 2 : null;
        }).style('fill', 'none');

        updatedStatusLine.transition().duration(1000).attr('d', (0, _d3Shape.line)().x(function (d) {
          return d.start && !d.dotted || d.end && d.dotted ? xScale(d.date) + 20 : xScale(d.date);
        }).y(function (d) {
          return d.end && !d.dotted ? 25 : 10;
        })).style('stroke-dasharray', function (d) {
          return d[0].dotted ? 2 : null;
        });

        updatedStatusLine.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedStatusLabels.enter().append('text').attr('class', 'status-line-label').attr('fill', 'black').attr('text-anchor', 'middle').attr('transform', function (d) {
          return 'translate(' + ((xScale(d.startDate) + xScale(d.endDate)) / 2 + 10) + ',22)';
        }).text(function (d) {
          return getStatusLabelText(d);
        }).on('mouseover', function (d) {
          if (isStatusLabelTruncated(d)) {
            statusLabelTooltip.show(d, this);
          }
        }).on('mouseout', function () {
          statusLabelTooltip.hide();
        });

        updatedStatusLabels.transition().duration(1000).attr('transform', function (d) {
          return 'translate(' + ((xScale(d.startDate) + xScale(d.endDate)) / 2 + 10) + ',22)';
        }).text(function (d) {
          return getStatusLabelText(d);
        });

        updatedStatusLabels.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedSpentLineCircles.enter().append('circle').attr('class', 'spent-line-circle').attr('cx', function (datum) {
          return xScale(datum.date);
        }).attr('cy', function (datum) {
          return yScale(datum.total_spent_to_date);
        }).attr('r', 5).attr('fill', '#333333').on('mouseover', function (d) {
          spentCircleTooltip.show({ data: d, direction: 'n' }, this);
        }).on('mouseout', function () {
          spentCircleTooltip.hide();
        });

        updatedSpentLineCircles.transition().ease(_d3Ease.easeLinear).duration(750).attr('cx', function (datum) {
          return xScale(datum.date);
        }).attr('cy', function (datum) {
          return yScale(datum.total_spent_to_date);
        });

        updatedSpentLineCircles.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedTotalCostCircles.enter().append('circle').attr('class', 'total-cost-line-circle').attr('cx', function (datum) {
          return xScale(datum.date);
        }).attr('cy', function (datum) {
          return yScale(datum.total_estimated_project_cost);
        }).attr('r', 5).attr('fill', 'none').on('mouseover', function (d) {
          totalCostCircleTooltip.show({ data: d, direction: 'n' }, this);
        }).on('mouseout', function () {
          totalCostCircleTooltip.hide();
        });

        updatedTotalCostCircles.transition().ease(_d3Ease.easeLinear).duration(750).attr('cx', function (datum) {
          return xScale(datum.date);
        }).attr('cy', function (datum) {
          return yScale(datum.total_estimated_project_cost);
        });

        updatedTotalCostCircles.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedAxisLabels.enter().append('text').attr('class', 'axis-tick-label').attr('fill', 'black').attr('transform', function (d) {
          return 'translate(' + xScale(d.date) + ',20)';
        }).text(function (d) {
          return d.quarter_label;
        });

        updatedAxisLabels.transition().ease(_d3Ease.easeLinear).attr('transform', function (d) {
          return 'translate(' + xScale(d.date) + ',20)';
        }).duration(750).text(function (d) {
          return d.quarter_label;
        });

        updatedAxisLabels.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedAxisYearLabels.enter().append('text').attr('class', 'axis-tick-year-label').attr('fill', '#bcbcbc').attr('transform', function (d) {
          return 'translate(' + xScale(d.date) + ',40)';
        }).text(function (d) {
          return d.financial_year_label;
        });

        updatedAxisYearLabels.transition().ease(_d3Ease.easeLinear).attr('transform', function (d) {
          return 'translate(' + xScale(d.date) + ',40)';
        }).duration(750).text(function (d) {
          return d.financial_year_label;
        });

        updatedAxisYearLabels.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();

        updatedBackgroundRectangles.enter().append('rect').attr('class', 'background-rectangle').attr('x', function (datum) {
          return xScale(datum.date) - xScaleLength / data.length;
        }).attr('y', yScale.range()[1]).attr('width', xScaleLength / data.length).attr('height', function () {
          return yScaleLength;
        }).attr('fill', 'none').on('mouseover', function (d) {
          showTooltip(d);
        }).on('mouseout', function () {
          hideTooltip();
        });

        updatedBackgroundRectangles.transition().ease(_d3Ease.easeLinear).duration(750).attr('x', function (datum) {
          return xScale(datum.date) - xScaleLength / data.length;
        }).attr('y', yScale.range()[1]).attr('width', xScaleLength / data.length).attr('height', function () {
          return yScaleLength;
        });

        updatedBackgroundRectangles.exit().transition().ease(_d3Ease.easeLinear).duration(100).remove();
      };
    });
  }

  chart.width = function (value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function (value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.data = function (value) {
    if (!arguments.length) return data;
    data = processRawData(value);
    if (typeof updateData === 'function') updateData();
    return chart;
  };

  return chart;
}

/***/ }),

/***/ "./node_modules/vulekamali-visualisations/src/util.js":
/*!************************************************************!*\
  !*** ./node_modules/vulekamali-visualisations/src/util.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humaniseRand = undefined;

var _d3Format = __webpack_require__(/*! d3-format */ "./node_modules/vulekamali-visualisations/node_modules/d3-format/src/index.js");

var formatRand = function formatRand(x, decimals, randSpace) {
  decimals = decimals === undefined ? 1 : decimals; // eslint-disable-line no-param-reassign
  randSpace = randSpace === undefined ? ' ' : ''; // eslint-disable-line no-param-reassign
  return 'R' + randSpace + (0, _d3Format.format)(',.' + decimals + 'f')(x);
};

var humaniseRand = exports.humaniseRand = function humaniseRand(x, longForm) {
  // eslint-disable-line import/prefer-default-export
  longForm = longForm === undefined ? true : longForm; // eslint-disable-line no-param-reassign
  var randSpace = longForm ? ' ' : '';
  var decimals = longForm ? 1 : 0;
  var suffixBillion = longForm === true ? ' billion' : 'bn';
  var suffixMillion = longForm === true ? ' million' : 'm';
  var suffixThousand = longForm === true ? '  thousand' : 'k';

  if (Math.abs(x) >= 1000000000) {
    return formatRand(x / 1000000000, decimals, randSpace) + suffixBillion;
  }if (Math.abs(x) >= 1000000) {
    return formatRand(x / 1000000, decimals, randSpace) + suffixMillion;
  }if (!longForm && Math.abs(x) >= 100000) {
    return formatRand(x / 1000, decimals, randSpace) + suffixThousand;
  }
  return formatRand(x, 0);
};

/***/ })

/******/ });
//# sourceMappingURL=vulekamali-webflow.bundle.js.map