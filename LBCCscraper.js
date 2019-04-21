var JSSoup = require('jssoup').default;

//var soup = new JSSoup(document.body);  // Parsing current page (class details)
var soup = new JSSoup(`<body><div id="header">
  <div class="container">
    <header>
  <ul>
    <li class="header-logo"><a href="https://www.lbcc.edu"><img src="https://lbccframework.lbcc.edu/appTemplate/images/logo-theme.svg" class="logo1" alt="LBCC Logo" /><img src="https://lbccframework.lbcc.edu/appTemplate/images/logo-only.svg" class="logo2" alt="LBCC Logo" /></a></li>
    <li class="header-slogan">
      <h1 class="app-name">Schedule of Classes</h1>
    </li>
  </ul></header>

  </div>
  
  </div><div id="main">
  <div class="container">
    <main class="row">
      <div class="col-sm-12 col-md-12">
        <article>
          
          <table width="100%"  border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" bordercolor="#990000" bgcolor="#999999">
                  <tr>
                    <td  width="100%" >
                      <table width="100%"  border="0" cellpadding="0" cellspacing="0">
                        <tr bgcolor="#000000" style="height:30px;background:url(mobile/images/headback.jpg);" >
                          <td class="style4" style="font-style:normal;padding-top:4px;">&nbsp;Fall 2019</td>
                          <td align="right"  style="padding-top:4px;padding-right:4px;">
                            <table border="0" align="right" cellpadding="2" cellspacing="0" >
                              <tr>
                                <td style="text-align: right;"><a href="https://www.lbcc.edu/get-started" title="Apply Now" class="myButton">Apply On-Line</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr bgcolor="#FFFFFF"><td>&nbsp;</td></tr>
                  <tr>
                    <td>
                      <table width="100%" border="0" cellpadding="5" cellspacing="0" bordercolor="#cccccc">
                        <tr bgcolor="#666666">
                          <td>
                            <table width="100%"  border="0" cellspacing="0" cellpadding="3">
                              <tr>
                                <td align="left" class="style4" style="padding:4px;font-style:normal;">Discrete Structures</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr bgcolor="#666666" style="background-image:url(https://LBCCFramework.lbcc.edu/www/images/headbackground.jpg)">
                          <td style="margin-right:0px;">
                            <table width="98%"  border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="text-align:right;">
                                  <table border="0" style="width:98%;">
                                    <tr>
                                      <td align="right" style="margin-right:0px;float:right;width:163px;text-align:right;"> 
                                        <div style="margin-right:0px;">
                                          <a href="https://apps.lbcc.edu/Schedule/?semester=Fall&campus=&term=1625&action=" title="Schedule Home" class="myButton">Schedule Home</a>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr> 
          </table>
          <table width="100%"  border="1" cellspacing="0" cellpadding="3" bordercolor="#666666" bgcolor="#CCCCCC">
            <tr bgcolor="#3399CC" height="30">
              <td>
                <table width="100%"  border="0" cellspacing="0" cellpadding="3">
                  <tr>
                  
                  
                    <td class="text5" style="padding-left:2px; vertical-align:middle; line-height:40px;font-size:14px;">CS   61 Discrete Structures 4.00       unit(s)</td>
                  
                    
                    <td style="float:right;vertical-align:middle;">
                      <table border="0" cellpadding="0" cellspacing="0" style="width:105px;float:right;">
                        <tr>
                          <td align="right"><span class="modifiedtxt2" style="font-weight:bold;">Print to:</span></td>
                          <td   style="text-align:center;"><a href="allClassesPrint.cfm?term=1625&courseID=009743&semester=Fall&Descr=Discrete%20Structures&strAction=&campus=&subject=CS&catalog_nbr=61&print=PDF" target="_blank" title="PDF"  class="myButton">PDF</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            
            
            <tr valign="top">
              <td style="padding:4px; font-size:12px;">
                This course is an introduction to the discrete structures used in Computer Science with an emphasis on their applications. Topics covered include: Functions, Relations and Sets; Basic Logic; Proof Techniques; Basics of Counting; Graphs and Trees; and Discrete Probability.<br />
                  Prerequisite: COSP 8 or CS 11 or CS 21<br /><br />
                  Transferable to CSU Only<br />
                  
                    <span style="font-weight:bold;"> 72 hours lecture</span> 
                  
              </td>
            </tr>
            

          
          <tr>
            <td>
              <table border="0" width="100%" cellpadding="5" cellspacing="0" bordercolor="#CCCCCC" bgcolor="#CCCCCC">
                <tr>
                  <td>
                    <table width="100%" border="1" cellpadding="3" cellspacing="0" bordercolor="#666666" bgcolor="#999999">
                      <tr style="height:20px;">
                        <td class="modifiedtxt2" width="95" style="text-align:center; vertical-align:middle;">CLASS NUMBER</td>
                        <td class="modifiedtxt2" width="80"  style="text-align:center; vertical-align:middle;">DAYS</td>
                        <td class="modifiedtxt2" width="120" style="text-align:center; vertical-align:middle;">TIME</td>
                        <td class="modifiedtxt2" width="50" style="text-align:center; vertical-align:middle;">STATUS</td>
                        <td class="modifiedtxt2" align="center" width="100" style="text-align:center; vertical-align:middle;">START DATE</td>
                        <td class="modifiedtxt2" align="center" width="100" style="text-align:center; vertical-align:middle;">END DATE</td>
                        <td class="modifiedtxt2" width="80" style="text-align:center; vertical-align:middle;">LOCATION</td>
                        <td class="modifiedtxt2" width="80" style="text-align:center; vertical-align:middle;">ATTRIBUTES</td>
                        <td class="modifiedtxt2" style="text-align:center; vertical-align:middle;width">INSTRUCTOR</td>
                      </tr> 
                      
                      
                      
                      <tr bgcolor="#fff" style=" background-color:#fff;" id="row1">
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff'; ">
                          
                          
                              <a href="javascript:void(0);" onclick="getClassDetail(72228,'009743',1625,1,3,'CS','61');">72228</a> 
                          
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                          T Th 
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">9:00AM - 11:05AM</td>
                          
                          
                              <td align="center" class="scheduletext" style=" vertical-align:middle; background-color:#0C0" onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                                <div style="color: #000;font-size:11px; text-align:center;font-weight:bold; background-color:#0C0;line-height:25px;">OPEN</div>
                              </td>
                            
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;" onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                          <div align="center">
                            08/26/2019 
                          </div>
                        </td>
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;"   onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                          <div align="center">
                            12/14/2019 
                          </div>
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                          
                              <a href="https://map.concept3d.com/?id=1218#!ct/31194?mc/33.7918518360161,-118.1740388274193?z/18?lvl/0" target="_blank">PCC-AA204</a>
                          
                        </td>
                        
                        <td class="scheduletext" style="text-align: center; vertical-align:middle;" onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff'; ">
                          
                              &nbsp;
                          
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row1.style.backgroundColor='#0CF';" onmouseout="row1.style.backgroundColor='#fff';">
                            
                              <a href="https://phonebook.lbcc.edu/phonedir/?empid=87105&deptid=63" target="_blank">Han, J</a> 
                          
                        </td>
                      </tr>
                      
                      
                      
                      <tr bgcolor="#fff" style=" background-color:#fff;" id="row2">
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff'; ">
                          
                          
                              <a href="javascript:void(0);" onclick="getClassDetail(72935,'009743',1625,2,3,'CS','61');">72935</a> 
                          
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                          M 
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">6:00PM - 9:10PM</td>
                          
                          
                              <td align="center" class="scheduletext" style=" vertical-align:middle; background-color:#0C0" onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                                <div style="color: #000;font-size:11px; text-align:center;font-weight:bold; background-color:#0C0;line-height:25px;">OPEN</div>
                              </td>
                            
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;" onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                          <div align="center">
                            08/26/2019 
                          </div>
                        </td>
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;"   onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                          <div align="center">
                            12/14/2019 
                          </div>
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                          
                              <a href="https://map.concept3d.com/?id=1218#!ct/31194?mc/33.7918518360161,-118.1740388274193?z/18?lvl/0" target="_blank">PCC-AA204</a>
                          
                        </td>
                        
                        <td class="scheduletext" style="text-align: center; vertical-align:middle;" onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff'; ">
                          
                              &nbsp;
                          
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row2.style.backgroundColor='#0CF';" onmouseout="row2.style.backgroundColor='#fff';">
                            
                              <a href="https://phonebook.lbcc.edu/phonedir/?empid=133596&deptid=63" target="_blank">Taylor, L</a> 
                          
                        </td>
                      </tr>
                      
                      
                      
                      <tr bgcolor="#fff" style=" background-color:#fff;" id="row3">
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff'; ">
                          
                          
                              AND
                          
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                          WEB 
                        </td>
                        <td class="scheduletext" style="vertical-align:middle; text-align:center;" onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">WEB</td>
                          
                          
                              <td align="center" class="scheduletext" style=" vertical-align:middle; background-color:#0C0" onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                                <div style="color: #000;font-size:11px; text-align:center;font-weight:bold; background-color:#0C0;line-height:25px;">OPEN</div>
                              </td>
                            
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;" onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                          <div align="center">
                            08/26/2019 
                          </div>
                        </td>
                        
                        <td align="center" class="scheduletext" style=" vertical-align:middle;"   onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                          <div align="center">
                            12/14/2019 
                          </div>
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                          HYBRID  
                        </td>
                        
                        <td class="scheduletext" style="text-align: center; vertical-align:middle;" onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff'; ">
                          
                              &nbsp;
                          
                        </td>
                        
                        <td class="scheduletext" style="padding-left:4px; vertical-align:middle;"   onmouseover="row3.style.backgroundColor='#0CF';" onmouseout="row3.style.backgroundColor='#fff';">
                            
                              <a href="https://phonebook.lbcc.edu/phonedir/?empid=133596&deptid=63" target="_blank">Taylor, L</a> 
                          
                        </td>
                      </tr>
                      
                                          
                
                    
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        </article>
      </div>
    </main>
    <div class="space"></div>
  </div></div><div id="footer">
  <div class="container">
    <footer class="row">
  <div class="col-sm-4 col-md-4 footer-logo"><img src="https://lbccframework.lbcc.edu/appTemplate/images/logo-theme.svg" alt="LBCC Logo"/></div>
  <address class="col-sm-8 col-md-8">
  <ul>
    <li>4901 East Carson Street, Long Beach CA 90808</li>
    <li>1305 East Pacific Coast Highway, Long Beach CA 90806</li>
    <li>562.938.4111</li>
  </ul>
  </address></footer>

  </div></div><div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div></div><script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script><script type="text/javascript" src="https://lbccframework.lbcc.edu/appTemplate/scripts/lbcc.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.9/js/bootstrap-dialog.min.js"></script> <div  id="cf_window23106410383434601" class="x-hidden">
  
  
  <div  id="managementwindow-body" class="" style="background-color:#ffffff;;height:100%;">
    
    
  </div></div><div  id="cf_window23106410383434603" class="x-hidden">
  
  
  <div  id="contentwindow-body" class="" style="background-color:#ffffff;;height:100%;">
    
    
  </div></div><script>$(document).ready(function() {
  $(".show_me").on("click", function() {
    BootstrapDialog.show({
    title: 'ZERO TEXTBOOK COST',
    message: '<p>This icon represents a Zero Textbook Cost (ZTC) class section.  The cost of the textbook is zero dollars and no cost to the student.  Open Educational Resources (OER) are educational materials shared under a license allowing for free use, alteration, and/or integration into new contexts. Zero-Textbook Cost (ZTC) classes rely on OER and other online resources to eliminate textbook costs for students.</p>',
    draggable: true,
    closable: true,
    closeByBackdrop: false,
    closeByKeyboard: false,
    onshow: function(dialog) {
      dialog.getModalHeader().addClass('modal-header-bg-red');
    }
    });
  });});</script></body>`);

// allLinks = soup.findAll('a'); // All <a> tags from body
// profNames = [];
// for (var i = 0; i < allLinks.length; i++) {
//   link = allLinks[i].attrs.href;
//   name = allLinks[i].text;
//   if (link.startsWith('https://phonebook.lbcc.edu/phonedir/') && !profNames.includes(name)) {
//     profNames.push(name);
//   }
// }
// for (var i = 0; i < profNames.length; i++)
// {
//     profNames[i] = profNames[i].split(/[ ,]+/);
// }
// console.log(profNames)

var soup = new JSSoup(document.body);  // Parsing current page (class details)
allLinks = soup.findAll('a'); // All <a> tags from body

profileLinks = [];
for (var i = 0; i < allLinks.length; i++) // Iterate through <a> tags
{
    link = allLinks[i].attrs.href;
    // Ensure that link is to phonebook and is not a duplicate
    if (link.startsWith('https://phonebook.lbcc.edu/phonedir/') && !profileLinks.includes(name)) {
        profileLinks.push(name);
    }
}
