$(document).ready(function() {
    
    // TODO This function will connect to the backend to get JSON data for the newsfeed
    /*var jqxhr = $.post( "php/home.php", null, 'json');
    jqxhr.done(buildNewsFeed);
    jqxhr.fail(function {
               
    });*/
    
    /* TEST DATA */
    var json = [[],[], []];
    json[0].postedBy = "Test Prof";
    json[0].date = "9/11/2001";
    json[0].title = "Stooge Sort";
    json[0].action = "Modified";
    json[0].section = "Pseudo Library";
    json[0].category = "Sorting Algorithms";
    json[0].comment = "Fixed errors in pseudo code";
    
    json[1].postedBy = "Test Prof2";
    json[1].date = "12/7/1941";
    json[1].title = "Wacky Sort";
    json[1].action = "Created";
    json[1].section = "Pseudo Library";
    json[1].category = "Sorting Algorithms";
    json[1].comment = "Best sort ever";
    
    json[2].postedBy = "Test Prof3";
    json[2].date = "1/1/2015";
    json[2].title = "Super Sort";
    json[2].action = "Created";
    json[2].section = "Pseudo Library";
    json[2].category = "Sorting Algorithms";
    json[2].comment = "Better sort thank wacky sort";
    
    buildNewsFeed(json);

});
/*
*   buildNewsFeed(json)
*   @params: 
*   json - java script object notation that contains the newfeed information
*
*   @description:
*   this function will build the newsfeed dynamically from the json data
*/
function buildNewsFeed(json) {
    
    // for each newsfeedItem in the json create a newsfeedItem on the page
    $.each(json, function(i, newsfeedItem) {
        
        // create the outter div and add the newsfeed_wrapper css class to it
        var newsFeedWrapper = $("<div></div>").addClass("newsfeed_wrapper");
        
        // create posted by span and add json data as its text
        var postedBy = $("<span></span>").text("Posted by: " + json[i].postedBy);
        
        // add newsfeed_wrapper_content class to postedby span
        postedBy.addClass("newsfeed_wrapper_content");
        
        // create data span and add json data as its text
        var date = $("<span></span>").text("Date: " + json[i].date);
        
        // add newsfeed_wrapper_content and newsfeed_wrapper_date css classes
        date.addClass("newsfeed_wrapper_content");
        date.addClass("newsfeed_wrapper_date");
        
        // append posted by and date spans to newsFeedWrapper div
        newsFeedWrapper.append(postedBy);
        newsFeedWrapper.append(date);
        
        // create newsFeedSubWrapper div and add newsfeed_sub_wrapper css class to it
        var newsFeedSubWrapper = $("<div></div>").addClass("newsfeed_sub_wrapper");
        
        // create newsFeedSubWrapperText span and add json data as its text
        var newsFeedSubWrapperText = $("<span></span>").text(json[i].title + " " + "was " + 
                                json[i].action + " in the " + json[i].section + ", under the " + json[i].category + " category");
        
        // add newsfeed_sub_wrapper_content css class to span
        newsFeedSubWrapperText.addClass("newsfeed_sub_wrapper_content");
        
        // create newsFeedSubWrapperComment span and add json data as its text
        var newsFeedSubWrapperComment = $("<span></span>").text("Comment: " + json[i].comment);
        
        // append newsFeedSubWrapperText to newsFeedSubWrapper div
        newsFeedSubWrapper.append(newsFeedSubWrapperText);
        
        // append newsFeedSubWrapperComment to newsFeedSubWrapper div
        newsFeedSubWrapper.append(newsFeedSubWrapperComment);
        
        // append newsFeedSubWrapper div to newsFeedWrapper div
        newsFeedWrapper.append(newsFeedSubWrapper);
        
        // append newsFeedWrapper div to main_content div
        $(".main_content").append(newsFeedWrapper);
        
    });
}
