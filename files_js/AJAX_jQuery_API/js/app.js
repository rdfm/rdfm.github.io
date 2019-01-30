$(document).ready(function(){
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $('form').submit(function(e){
        let $submitButton = $('#submit');
        let $searchField = $('#search');
        e.preventDefault(); 
        $searchField.prop("disabled",true);
        $submitButton.attr("disabled", true).val("Searching....");
        var term = $searchField.val();
        $('#photos').html('');
        $.getJSON(flickerAPI, {
            tags: term,
            format: "json"
        },
        function(data){
            let photoHTML = '';
            if(data.items.length > 0){
                $.each(data.items, function(i, photo){
                    photoHTML += '<li>';
                    photoHTML += '<a href="' + photo.link + '">';
                    photoHTML += '<img src="' + photo.media.m + '"></a></li>';
                });
            } else {
                photoHTML = "<p>No photos found that match: " + term + ".</p>";
            }
            $('#photos').html(photoHTML);
            $searchField.prop("disabled", false);
            $submitButton.attr("disabled", false).val("Search");            
        });
    });
});