﻿getRegions = function(){
    var regions = [{ key: "WA", value: "ALL" }, { key: "SPOK", value: "SPOKANE" }, { key: "YAK", value: "YAKIMA" }, { key: "VANC", value: "VANCOUVER" }, { key: "KING", value: "KING" }, { key: "SNO", value: "SNOQUALMIE" }];
    return regions;
};

searchJobs = function (county, title, level) {
    var params = "";

    
    if (title != null) {
        params += "title=" + title;
    } else {
        params += "title=";
    }

    if (level != null) {
        params += "&educationalLevel=" + level;
    } else {
        params += "&educationalLevel=";
    }
    if (county != null) {
        params += "&county=" + county;
    } else {
        params += "&county=" + county;
    }

    var url = "http://steminsightsapi.azurewebsites.net/api/Search/SearchJobDemands/?" + params;
    
    return $.ajax({
        url: url,
    });
};

getTitles = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetOccupationalTitles"
    });
};

getEducationalLevels = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetEducationalLevels"
    });
};


var getJobTrends = function () {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobTrends"
    });
}

var getJobTrendsDetail = function (level) {
    return $.ajax({
        url: "http://steminsightsapi.azurewebsites.net/api/Search/GetJobTrendsDetail/?educationalLevel="+level
    });
}