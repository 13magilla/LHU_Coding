$(document).ready(function() {
    
    // TODO This function will connect to the backend to get JSON data
    /*var jqxhr = $.post( "php/subCat.php", null, 'json');
    jqxhr.done(buildNewsFeed);
    jqxhr.fail(function {
               
    });*/
    
    /* TEST DATA */
    var json = [];
    json.entry = [];
    json.sidebar = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    json.comments = [[], [], []];
    
    json.entry.title = "Merge Sort";
    json.entry.user = "Dr. Sues";
    json.entry.date = "1/1/2015";
    json.entry.content = "// Merge sort ";
    
    
    json.sidebar[0].title = "Algo 1";
    json.sidebar[1].title = "Algo 2";
    json.sidebar[2].title = "Algo 3";
    json.sidebar[3].title = "Algo 4";
    json.sidebar[4].title = "Algo 5";
    json.sidebar[5].title = "Algo 6";
    json.sidebar[6].title = "Algo 7";
    json.sidebar[7].title = "Algo 8";
    json.sidebar[8].title = "Algo 9";
    json.sidebar[9].title = "Algo 10";
    json.sidebar[10].title = "Algo 11";
    json.sidebar[11].title = "Algo 12";
    json.sidebar[12].title = "Algo 13";
    json.sidebar[13].title = "Algo 14";
    json.sidebar[14].title = "Algo 15";
    json.sidebar[15].title = "Algo 16";
    json.sidebar[16].title = "Algo 17";
    json.sidebar[17].title = "Algo 18";
    json.sidebar[18].title = "Algo 19";
    json.sidebar[19].title = "Algo 20";
    json.sidebar[20].title = "Algo 21";
    json.sidebar[21].title = "Algo 22";
    json.sidebar[22].title = "Algo 23";
    json.sidebar[23].title = "Algo 24";
    
    json.comments[0] = [];
    json.comments[0].user = "bob";
    json.comments[0].date = "1/1/2011";
    json.comments[0].content = "This is soooooo confusing";
    
    json.comments[1] = [];
    json.comments[1].user = "jim";
    json.comments[1].date = "1/1/2011";
    json.comments[1].content = "Agreed so confusing";
    
    json.comments[2] = [];
    json.comments[2].user = "bob";
    json.comments[2].date = "1/1/2011";
    json.comments[2].content = "I'm not the only one!";
    
    buildSubCat(json);

});
/*
*   buildSubCat(json)
*   @params: 
*   json - java script object notation that contains the subcategory page information
*
*   @description:
*   this function will build the subcategories view dynamically from the json data
*/
function buildSubCat(json) {
    
    // TODO: attach on click function to each sidebar entry which will request the entry info and build the view
    
    // wipe sidebar list
    var sidebar = $(".sidebar_list_item").empty();
   
    // for each sidebar item create a list entry on the page
    $.each(json.sidebar, function(i, sidebarItem) {
        
        sidebar.append($("<li></li>").text(json.sidebar[i].title));
         
    });
    
    // wipe previous entry info
    var title = $(".title_name").text("");
    var userName = $(".post_title_prof").text(""); 
    var entryDate = $(".post_title_date").text("")
    var entryContent = $(".post_content").text("");
    
    // build current entry info
    title.text(json.entry.title);
    userName.text(json.entry.user);
    entryDate.text(json.entry.date);
    entryContent.text(json.entry.content);
    
    // wipe previous comments
    var commentsWrapper = $("#comment_wrap").empty();
    
    // for each comment on this entry create a comment on the page
    $.each(json.comments, function(i, commentItem) {
        
        // create title div
        var titleDiv = $("<div></div>").addClass("post_title");
        
        // create comment username container and add json text
        var username = $("<p></p>").addClass("comment_title_prof");
        username.text(json.comments[i].user);
        
        // create comment date container and add json text
        var commentDate = $("<p></p>").addClass("comment_title_date");
        commentDate.text(json.comments[i].date);
        
        // add username and date to title div
        titleDiv.append(username);
        titleDiv.append(commentDate);
        
        // create comment content container and add json text
        var commentContent = $("<div></div>").addClass("comment_content");
        commentContent.append($("<p></p>").text(json.comments[i].content));
        
        // add title div and comment content to wrapper div
        commentsWrapper.append(titleDiv);
        commentsWrapper.append(commentContent);
        
    });
    
}