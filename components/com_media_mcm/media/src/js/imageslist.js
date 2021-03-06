/**
 * images modal: imageframe behavior for com_media_mcm component
 *
 * @package     Joomla.Extensions
 * @subpackage  com_media_mcm
 */

var $ = require('jQuery');
var com_media_mcm = require('com_media_mcm');
var ImageManager = require('ImageManager');
var helper = require('./modules/helper');

var basePath = window.parent.image_base_path,
    $imgPreview = $('a.img-preview'),
    // parent document
    $imgManager = $('[data-role="image-manager"]', parent.document.body),
    $introImageFlag = $('#intro-image-flag', parent.document.body),
    // outer most document
    $introImage = $('#jform_images_image_intro', top.document.body);

_imgPreviewHandler = function(event) {
    event.preventDefault();

    var path = $(event.currentTarget).data('path');

    _showImageManager(path);

    if ($introImage.val() == basePath + path) {
        $introImageFlag.prop('checked', true);
    } else {
        $introImageFlag.prop('checked', false);
    }

    /**
     * call Joomla! com_media populateFields function,
     * /media/media/js/popup-imagemanager.js */
    ImageManager.populateFields(path);
};

_showImageManager = function(path) {

    $imgManager.find('img').attr("src", basePath + path);

    $imgManager.removeClass('hide');
    $('[data-role="image-manager-buttons"] button', parent.document.body).removeClass('disabled');
};

// event listeners
$imgPreview.on('click', function(event) {
    _imgPreviewHandler(event);
});
