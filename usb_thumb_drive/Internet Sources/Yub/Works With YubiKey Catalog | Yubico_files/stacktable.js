/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */
;(function($) {

  $.fn.stacktable = function(options) {
    var $tables = this,
        defaults = {id:'stacktable small-only',hideOriginal:true},
        settings = $.extend({}, defaults, options);

    return $tables.each(function() {
      var $stacktable = $('<table class="'+settings.id+'"><tbody></tbody></table>');
      if (typeof settings.myClass !== undefined) $stacktable.addClass(settings.myClass);
      var markup = '';
      $table = $(this);
      $table.addClass('stacktable large-only');
      $topRow = $table.find('tr').eq(0);
      $table.find('tr').each(function(index,value) {
        markup += '<tr>';
        // for the first row, top left table cell is the head of the table
        if (index===0) {
          markup += '<tr><th class="st-head-row st-head-row-main" colspan="2">'+$(this).find('th,td').eq(0).html()+'</th></tr>';
        }
        // for the other rows, put the left table cell as the head for that row
        // then iterate through the key/values
        else {
          $(this).find('td,th').each(function(index,value) {
            if (index===0) {
              markup += '<tr><th class="st-head-row" colspan="2">'+$(this).html()+'</th></tr>';
            } else {
              if ($(this).html() !== ''){
                markup += '<tr>';
                if ($topRow.find('td,th').eq(index).html()){
                  markup += '<td class="st-key">'+$topRow.find('td,th').eq(index).html()+'</td>';
                } else {
                  markup += '<td class="st-key"></td>';
                }
                markup += '<td class="st-val">'+$(this).html()+'</td>';
                markup += '</tr>';
              }
            }
          });
        }
      });
      $stacktable.append($(markup));
      $table.before($stacktable);
      if (!settings.hideOriginal) $table.show();
    });
  };



 $.fn.stackcolumns = function(options) {
    var $tables = this,
        defaults = {id:'stacktable small-only',hideOriginal:true},
        settings = $.extend({}, defaults, options);

    return $tables.each(function() {
      $table = $(this);
      var num_cols = $table.find('tr').eq(0).find('td,th').length; //first table <tr> must not contain colspans, or add sum(colspan-1) here.
      if(num_cols<3) //stackcolumns has no effect on tables with less than 3 columns
        return;

      var $stackcolumns = $('<table class="'+settings.id+'"></table>');
      if (typeof settings.myClass !== undefined) $stackcolumns.addClass(settings.myClass);
      $table.addClass('stacktable large-only');
	  
	  if (typeof settings.testClass !== undefined){ 
	  		console.log('Loaded');
			
			function delayed_popup(){
				
				jQuery('.small-only a#demo-ajax').on('click', function(e) {
					  e.preventDefault();
					  
					  console.log('clicked');
					  
						var product_id = jQuery(this).attr('product');
						jQuery.ajax({
							url : getproduct.ajax_url,
							type : 'post',
							data : {
								action : 'yubico_get_product',
								product_id : product_id
							},
							success : function( response ) {
								
								var obj = jQuery.parseJSON(response);
								console.log(obj.hasflags);
								
								jQuery('#modal-content-ajax .left').replaceWith(obj.flags );
								jQuery('#modal-content-ajax .updated-content').html( obj.product );
								
								jQuery('#modal-content-ajax').popUpWindow({});
								
								if(obj.hasflags == 'noflags'){
									jQuery('#pop-up').removeClass('large');
									jQuery('#pop-up').addClass('small');
								} else{
									jQuery('#pop-up').addClass('large');
									jQuery('#pop-up').removeClass('small');
								}
								
								jQuery( '.variations_form' ).wc_variation_form();
								jQuery( '.variations_form .variations select' ).change();
								
								str = obj.variations;
								console.log(str);
								
								jQuery( '.variations_form .variations select' ).on('change',function(){
								  
								  var chosenvar = jQuery(this).val();
								  var attribute = jQuery(this).attr('name');
								  var finalData = str;
								  
								  
							  
								  
								  // console.log(finalData[0].attributes[attribute]);
								  
							  
								  for(i in finalData){
									  if(finalData[i].attributes[attribute] === chosenvar){
										  var image = finalData[i].image_src;
										  console.log(image);
										  if(image != ''){
											  jQuery('#modal-content-ajax .right a.woocommerce-main-image img').attr('src', image);
										  }
									  } 
									  
									  else{
										  
									  }
									  
								  }   
									
								});
							   
						// alert('hi');
							}
						});
						
						return false;
							
					  
			});
			  
			}
			setTimeout(delayed_popup, 1000);
			
			
	  }
	  
      var tb = $('<tbody></tbody>');      
      var col_i = 1; //col index starts at 0 -> start copy at second column.
      
      while (col_i<num_cols){        
        $table.find('tr').each(function(index,value) {
          var tem = $('<tr></tr>'); // todo opt. copy styles of $this; todo check if parent is thead or tfoot to handle accordingly
          if(index==0) tem.addClass("st-head-row st-head-row-main");
          first = $(this).find('td,th').eq(0).clone().addClass("st-key");
          var target = col_i;
          // if colspan apply, recompute target for second cell.
          if ($(this).find("*[colspan]").length) {
            var i =0;
            $(this).find('td,th').each(function(index,value) {            
                var cs = $(this).attr("colspan");
                if (cs) {
                  cs = parseInt(cs, 10);
                  target -= cs-1;
                  if ((i+cs) > (col_i)) //out of current bounds
                    target += i + cs - col_i -1; 
                  i += cs;
                }
                else
                  i++;

                if (i > col_i) 
                  return false; //target is set; break.
            });
          }
          second = $(this).find('td,th').eq(target).clone().addClass("st-val").removeAttr("colspan");
          tem.append(first, second);
          tb.append(tem);
		   tb.find('th.st-val').attr('colspan',2);
        });      
        ++col_i;
      }

      $stackcolumns.append($(tb));
      $table.before($stackcolumns);
	  
	
	  
      if (!(settings.hideOriginal)) {
        $table.show();
      }
	  
	  
    });
  };

}(jQuery));
jQuery( document ).ready(function() {
	jQuery('#comparison').stackcolumns({myClass:'stacktable small-only',testClass:'thistest' });
	jQuery('.comparison').stackcolumns({myClass:'stacktable small-only',testClass:'thistest' });
});