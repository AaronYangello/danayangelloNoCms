// gallery.js
$(document).ready(function () {
    // Fetch the list of images from the server
    $.ajax({
        url: 'get_images-pmhs.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Dynamically add sorted images to the gallery
            var galleryElement = $('#gallery');
            var row = $('<div class="row"></div>'); // Create a new row

            data.forEach(function (image, index) {
                // Create a new row for every four thumbnails
                if (index > 0 && index % 4 === 0) {
                    galleryElement.append(row); // Append the current row
                    row = $('<div class="row"></div>'); // Create a new row
                }

                // Add the thumbnail to the current row
                row.append(
                    '<div class="col-md-3 mb-3">' +
                    '<a href="' + image.path + '" data-lightbox="gallery" data-title="10-Year Reunion">' +
                    '<img src="' + image.path + '" alt="Thumbnail" class="img-thumbnail">' +
                    '</a>' +
                    '</div>'
                );
            });

            // Append the last row if it's not empty
            if (row.children().length > 0) {
                galleryElement.append(row);
            }
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});
