jQuery(document).ready(function($) {
	//WP Video Lightbox Plugin - http://www.tipsandtricks-hq.com/?p=2700
  $("a[rel^="+vlpp_vars.prettyPhoto_rel+"]").prettyPhoto({
    hook: "rel",  
    animation_speed: vlpp_vars.animation_speed,
    ajaxcallback: function () {},
    slideshow: (vlpp_vars.slideshow=="false") ? false : vlpp_vars.slideshow,
    autoplay_slideshow: (vlpp_vars.autoplay_slideshow=="true") ? true : false,
    opacity: vlpp_vars.opacity,
    show_title: (vlpp_vars.show_title=="true") ? true : false,
    allow_resize: (vlpp_vars.allow_resize=="true") ? true : false,
    allow_expand: (vlpp_vars.allow_expand=="true") ? true : false,
    default_width: vlpp_vars.default_width,
    default_height: vlpp_vars.default_height,
    counter_separator_label: vlpp_vars.counter_separator_label,
    theme: vlpp_vars.theme, 
    horizontal_padding: vlpp_vars.horizontal_padding,
    hideflash: (vlpp_vars.hideflash=="true") ? true : false,
    wmode: vlpp_vars.wmode,
    autoplay: (vlpp_vars.autoplay=="true") ? true : false,
    modal: (vlpp_vars.modal=="true") ? true : false,
    deeplinking: (vlpp_vars.deeplinking=="true") ? true : false,
    overlay_gallery: (vlpp_vars.overlay_gallery=="true") ? true : false,
    overlay_gallery_max: vlpp_vars.overlay_gallery_max,
    keyboard_shortcuts: (vlpp_vars.keyboard_shortcuts=="true") ? true : false,
    changepicturecallback: function(){},
    callback: function(){},
    ie6_fallback: (vlpp_vars.ie6_fallback=="true") ? true : false,
    markup: '<div class="pp_pic_holder"> \
                                        <div class="ppt">&nbsp;</div> \
                                        <div class="pp_top"> \
                                                <div class="pp_left"></div> \
                                                <div class="pp_middle"></div> \
                                                <div class="pp_right"></div> \
                                        </div> \
                                        <div class="pp_content_container"> \
                                                <div class="pp_left"> \
                                                <div class="pp_right"> \
                                                        <div class="pp_content"> \
                                                                <div class="pp_loaderIcon"></div> \
                                                                <div class="pp_fade"> \
                                                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                                                        <div class="pp_hoverContainer"> \
                                                                                <a class="pp_next" href="#">next</a> \
                                                                                <a class="pp_previous" href="#">previous</a> \
                                                                        </div> \
                                                                        <div id="pp_full_res"></div> \
                                                                        <div class="pp_details"> \
                                                                                <div class="pp_nav"> \
                                                                                        <a href="#" class="pp_arrow_previous">Previous</a> \
                                                                                        <p class="currentTextHolder">0/0</p> \
                                                                                        <a href="#" class="pp_arrow_next">Next</a> \
                                                                                </div> \
                                                                                <p class="pp_description"></p> \
                                                                                {pp_social} \
                                                                                <a class="pp_close" href="#">Close</a> \
                                                                        </div> \
                                                                </div> \
                                                        </div> \
                                                </div> \
                                                </div> \
                                        </div> \
                                        <div class="pp_bottom"> \
                                                <div class="pp_left"></div> \
                                                <div class="pp_middle"></div> \
                                                <div class="pp_right"></div> \
                                        </div> \
                                </div> \
                                <div class="pp_overlay"></div>',
    gallery_markup: '<div class="pp_gallery"> \
                                                        <a href="#" class="pp_arrow_previous">Previous</a> \
                                                        <div> \
                                                                <ul> \
                                                                        {gallery} \
                                                                </ul> \
                                                        </div> \
                                                        <a href="#" class="pp_arrow_next">Next</a> \
                                                </div>',
    image_markup: '<img id="fullResImage" src="{path}" />',
    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" allowfullscreen></iframe>',
    inline_markup: '<div class="pp_inline">{content}</div>',
    custom_markup: '',
    social_tools: false
  });
});
