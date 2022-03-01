//******************** ONLY CHARACTERS ARE ALLOWED *******************
function onlyAlpha(evt)
{		
 
 var charCode = (evt.which) ? evt.which : event.keyCode
  if ((charCode < 65 || charCode > 122)&& charCode!=32 && charCode!==8)
	return false;
	
 return true;
}

function onlyAlpha1(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode < 65 || charCode > 122 || charCode == 94 || charCode == 95) && charCode != 32 && charCode != 8 && charCode != 46)
        return false;
    return true;
}

function onlyAlpha2(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode < 65 || charCode > 122 || charCode == 94 || charCode == 95 || charCode == 46) && charCode != 32 && charCode != 8 && charCode != 46)
        return false;
    return true;
}


//******************** SETTING FORM NAME *****************************
function funFormName(strFrmName)
{
    parent.document.getElementById('divFormName').innerHTML = strFrmName;
}
//******************** SETTING FORM NAME END *************************

//******************** ONLY NUMBERS ARE ALLOWED **********************
function onlyNum(evt)
{		
 
 var charCode = (evt.which) ? evt.which : event.keyCode
 
  if ((charCode <48 || charCode > 57)) //&& charCode!==47 && charCode!==8)
	return false;
	
 return true;
}


//******************** TRIM TO STRING *******************
function trim(pstrString)
{
    /*var intLoop = 0;
    var sRetString = pstrString; 
    for(intLoop = 0; intLoop < pstrString.length;intLoop = intLoop + 1 )
    {	
        if(pstrString.charAt(intLoop) == " ")
        {
            //alert(pstrString.charAt(intLoop));
            sRetString = pstrString.substring(intLoop + 1, pstrString.length);
        }
        else
            break;
    }

    pstrString = sRetString;

    for(intLoop = pstrString.length - 1; intLoop >= 0; intLoop = pstrString.length - 1)
    {	
        if(pstrString.charAt(intLoop) == " ")
            pstrString = pstrString.substring(0,intLoop);
        else
            break;
    }

    return pstrString;*/
    
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    return pstrString.replace(rtrim, '');
}
//******************** TRIM TO STRING END*******************
   
   //********************************* ONLY NUMBERS ARE ALLOWED **********************************************
function funOnlyNum(obj)
{
    alert(obj);
    alert(obj.value);
    var strString=obj.value;
    var strValidChars = "0123456789";
    var strChar;
    var blnResult = true;
    for (i = 0; i < strString.length && blnResult == true; i++)
    {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1)
        {
            alert("ONLY NUMBERS ARE ALLOWED");
            obj.value="";
            obj.focus();
            return false;
        }
        else
        {
            return true;
        }
    }
}

//******************** ONLY CHARACTERS ARE ALLOWED *******************
function onlyAlpha(evt)
{		
 
 var charCode = (evt.which) ? evt.which : event.keyCode
  if ((charCode < 65 || charCode > 122)&& charCode!=32 && charCode!==8)
	return false;
	
 return true;
}
//******************** ONLY CHARACTERS ARE ALLOWED END ***************

//******************** ONLY NUMBERS ARE ALLOWED (For Onkeyup)**********************
function onlyNum(evt)
{		
 
 var charCode = (evt.which) ? evt.which : event.keyCode 
  
  if ((charCode >= 48 && charCode <=57) || (charCode >= 96 && charCode <=105) || charCode==8 || charCode==32 || charCode==9 || charCode==16 || charCode==20 || charCode==190 || charCode==39 || charCode==37 || charCode==46)
  {
	
  }
  else
  {
  alert("ONLY NUMBERS ARE ALLOWED");
            evt.value="";
            evt.focus();
	return false;
  }
	
 return true;
}
//******************** ONLY NUMBERS ARE ALLOWED END ******************

//******************** ONLY ALFANUMERIC ARE ALLOWED (For Onkeyup)**********************
function onlyChar(evt)
{		

 var charCode = (evt.which) ? evt.which : event.keyCode 
 //alert(charCode);
  if ((charCode >= 65 && charCode <=90) || charCode==8 || charCode==32 || charCode==9 || charCode==16 || charCode==20 || charCode==190 || charCode==39 || charCode==37 || charCode==46)
  {
	
  }
  else
  {
  alert("ONLY CHARACTERS ARE ALLOWED");
            evt.value="";
            evt.focus();
	return false;
  }
	
 return true;
}
//******************** ONLY ALFANUMERIC ARE ALLOWED END ******************


//******************** EMAIL VALIDATION ******************
function validateForm()
{
//         var x=document.getElementById("txtemailid").value;
//         var atpos=x.indexOf("@");
//         var dotpos=x.lastIndexOf(".");
//         if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
//          {
//          alert("Not a valid e-mail address");
//          return false;
//          }
}

//******************** EMAIL VALIDATION END ******************

// ********************check dropdown list value of page status***********

//ex.'drpId;drpname;checkboxid;textid;txtname' this is a single string to send for one record


//  function to Count the gridview row ---------------------------------------------------

    function gridviewcount(gridviewid)
    {
       //gridview row count
       try
       {
       var rowcount = document.getElementById(gridviewid).rows.length -1;  
       return true;
       }
       catch(Ex)
       { 
        return false;
       }   
    }
//  function to Count the gridview row End ---------------------------------------------------

function dropdownselectvaluecheckonly(drpdownbidDisplayname)
{
   var drpId = document.getElementById(drpdownbidDisplayname);
   var drpvalue = drpId.options[drpId.selectedIndex].text
   var drpdisname;
   if(drpvalue == "--Select--" || drpvalue == "" || drpvalue == null)
       {
             alert("Please Select the " + drpdisname);
             return false;
       }   
}

function dropdownblankvalidation(drpdownbidDisplayname)
    {
          //alert(drpdownbidDisplayname);
              
         
              //alert(drpdownbidDisplayname);
              var arrtotaldrpdownbidDisplayname = drpdownbidDisplayname.split(',');
              //alert(arrtotaldrpdownbidDisplayname.length-1);
              
              for(var i=0;i<=arrtotaldrpdownbidDisplayname.length-1;i++)
               {
                  drpdownbidDisplayname1 = arrtotaldrpdownbidDisplayname[i];  
                  var arr = drpdownbidDisplayname1.split(';');
                  var dropId = arr[0];
                  var drpdisname = arr[1];
                  var checkbixId = arr[2];
                  var textboxID  = arr[3];
                  var textboxdisplayname = arr[4];
                  
                  try
                {
                      if(checkbixId!=null)
                      {
                             
                           var e = document.getElementById(checkbixId);
                           if(e.checked==true)
                           { 
                               var textboxvalue = document.getElementById(textboxID).value;
                               if(textboxvalue=="")
                               {
                                alert(textboxdisplayname + " is not blank");
                                return false;
                               }
                           }
                           else
                           { 
                           
                             var drpId = document.getElementById(dropId);
                             var count = drpId.length; 
                             if(count <= 0)
                             {
                             
                             alert("Please Select the " + drpdisname);  
                             return false;
                             
                             }
                             
                             var drpvalue = drpId.options[drpId.selectedIndex].text
                             if(drpvalue == "--Select--" || drpvalue == "" || drpvalue == null)
                             {
                             alert("Please Select the " + drpdisname);
                             return false;
                             }
                           }  
                           
                      }
                      else
                      {
                      
                      var drpId = document.getElementById(dropId);
                      var drpvalue = drpId.options[drpId.selectedIndex].text
                      if(drpvalue == "--Select--" || drpvalue == "" || drpvalue == null){
                      alert("Please Select the " + drpdisname);
                      return false;
                      }
                      }  
                  }
                  catch(Err)
                  {
                  }  
                  
                }
          
          
    }
    
 //********************check the other fields is clear or not **********************************    
    
 function Checkotherfields(objstringname) // control id and text. 
    {
     
      try
      {
      //alert(objstringname);
      var arrtotalobjstringname = objstringname.split(',');
      for(var i=0;i<=arrtotalobjstringname.length-1;i++){
         
          try
          {
          objstringname1 = arrtotalobjstringname[i];
          var arr = objstringname1.split(';');        
          var textboxID  = arr[0];
          var textboxdisplayname = arr[1];
          var textboxvalue = document.getElementById(textboxID).value;
          if(textboxvalue!=""){
            alert(textboxdisplayname + " Eg." + textboxvalue + " does not exist in " + textboxdisplayname + " Master.\n" + " Add Master Record of " + textboxdisplayname + " From Organisation Module.");
            
            return false;
          }
          }
          catch(ex){
          }
               
      }
      //return false;
      }
      catch(ex)
      {
      //return false;
      }
    }   
    
//********************check the selected page status is correct or not **********************************    
function checkpagestatus(checklistbox)
     {
       
       var arr = checklistbox.split(',');
       var count = checklistbox.split(',');
       var checkcount = 0;
           for(var i=0;i<=count.length-1;i++)
           {
               var checkboxid = arr[i];
               var drpId = document.getElementById("Drpstatusofpage");
               var drpname = drpId.options[drpId.selectedIndex].text
               var e = document.getElementById(checkboxid);
               if(drpname=="--Select--")
               { 
                 alert("Please Select the page Status");
                 return false;
               }
                  try
                  {
                           if(e.checked==false && drpname=="APPROVED_BY_ADMIN")
                           { 
                             alert("Please Correct the redbox fields\nwhen you can select the page status is APPROVED_BY_ADMIN");
                             return false;
                             
                           }
                           if(e.checked==false && drpname=="SENT_BACK_FOR_CORRECTION")
                           { 
                             checkcount=1;
                           }
                           
                   }
                  catch(Err)
                  {
                     
                  }   
                       
           }            
                           if(drpname=="SENT_BACK_FOR_CORRECTION")
                           {
                               if(checkcount == 0)
                               { 
                                 alert("You can not select the page status SENT_BACK_FOR_CORRECTION\nbecause there is no incorrect field in your page");
                                 return false;
                               }
                           }
     }    

// ********************check dropdown list value of page status***********


   function PageStatusCheckdropdown()
     {  
     
               var drpId = document.getElementById("Drpstatusofpage");
               
               var drpname = drpId.options[drpId.selectedIndex].text
               if(drpname=="--Select--")
               { 
                 alert("Please Select the page Status");
                 return false;
               }
               
     }
               
   function Hscstreamcheck()
     {  
     
               var drpId = document.getElementById("drphscstreamopted");
               
               var drpname = drpId.options[drpId.selectedIndex].text
               var checkori = document.getElementById("hsccheckapplicable");
        
               if(checkori.checked==true){
               
               if(drpname=="--Select--")
               { 
                 alert("Please Select Stream for hsc");
                 return false;
               }
               
               }
               
               
     }

function addDateSeperator(id,sSeperator)
{
    if(id)
    {
        var ilen = id.value.length;
        if(ilen == 2 ||ilen == 5)
           id.value = id.value + sSeperator;  
    }
}

//*********************************** DATE VALIDATION ***********************************************
// Begin
// Check browser version
var isNav4 = false, isNav5 = false, isIE4 = false
var strSeperator = "index.html"; 
// If you are using any Java validation on the back side you will want to use the / because 
// Java date validations do not recognize the dash as a valid date separator.
var vDateType = 3; // Global value for type of date format
//                1 = mm/dd/yyyy
//                2 = yyyy/dd/mm  (Unable to do date check at this time)
//                3 = dd/mm/yyyy
var vYearType = 4; //Set to 2 or 4 for number of digits in the year for Netscape
var vYearLength = 2; // Set to 4 if you want to force the user to enter 4 digits for the year before validating.
var err = 0; // Set the error code to a default of zero
if(navigator.appName == "Netscape") {
if (navigator.appVersion < "5") {
isNav4 = true;
isNav5 = false;
}
else
if (navigator.appVersion > "4") {
isNav4 = false;
isNav5 = true;
   }
}
else {
isIE4 = true;
}
function DateFormat(vDateName, vDateValue, e, dateCheck, dateType) {
vDateType = dateType;
// vDateName = object name
// vDateValue = value in the field being checked
// e = event
// dateCheck 
// True  = Verify that the vDateValue is a valid date
// False = Format values being entered into vDateValue only
// vDateType
// 1 = mm/dd/yyyy
// 2 = yyyy/mm/dd
// 3 = dd/mm/yyyy
//Enter a tilde sign for the first number and you can check the variable information.
if (vDateValue == "~") {
alert("AppVersion = "+navigator.appVersion+" \nNav. 4 Version = "+isNav4+" \nNav. 5 Version = "+isNav5+" \nIE Version = "+isIE4+" \nYear Type = "+vYearType+" \nDate Type = "+vDateType+" \nSeparator = "+strSeperator);
vDateName.value = "";
vDateName.focus();
return true;
}
var whichCode = (window.Event) ? e.which : e.keyCode;
// Check to see if a seperator is already present.
// bypass the date if a seperator is present and the length greater than 8
if (vDateValue.length > 8 && isNav4) {
if ((vDateValue.indexOf("-") >= 1) || (vDateValue.indexOf("index.html") >= 1))
return true;
}
//Eliminate all the ASCII codes that are not valid
var alphaCheck = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
if (alphaCheck.indexOf(vDateValue) >= 1) {
if (isNav4) {
vDateName.value = "";
vDateName.focus();
vDateName.select();
return false;
}
else {
vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
return false;
   }
}

if (whichCode == 8) //Ignore the Netscape value for backspace. IE has no value
return false;
else
{
    //Create numeric string values for 0123456789/
    //The codes provided include both keyboard and keypad values
    var strCheck = '47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';
    
    //if (strCheck.indexOf(whichCode) != -1)
    //{
        
        if (isNav4)
        {
            if (((vDateValue.length < 6 && dateCheck) || (vDateValue.length == 7 && dateCheck)) && (vDateValue.length >=1))
            {
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.value = "";
                vDateName.focus();
                vDateName.select();
                return false;
            }
            if (vDateValue.length == 6 && dateCheck)
            {
                var mDay = vDateName.value.substr(2,2);
                var mMonth = vDateName.value.substr(0,2);
                var mYear = vDateName.value.substr(4,4)
                //Turn a two digit year into a 4 digit year
                if (mYear.length == 2 && vYearType == 4)
                {
                    var mToday = new Date();
                    //If the year is greater than 30 years from now use 19, otherwise use 20
                    var checkYear = mToday.getFullYear() + 30; 
                    var mCheckYear = '20' + mYear;
                    if (mCheckYear >= checkYear)
                        mYear = '19' + mYear;
                    else
                        mYear = '20' + mYear;
                }
                var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                if (!dateValid(vDateValueCheck))
                {
                    alert("Invalid Date\nPlease Re-Enter");
                    vDateName.value = "";
                    vDateName.focus();
                    vDateName.select();
                    return false;   
                }   
                return true;
            }
            else 
            {
                // Reformat the date for validation and set date type to a 1
                if (vDateValue.length >= 8  && dateCheck)
                {
                    if (vDateType == 1) // mmddyyyy
                    {
                        var mDay = vDateName.value.substr(2,2);
                        var mMonth = vDateName.value.substr(0,2);
                        var mYear = vDateName.value.substr(4,4)
                        vDateName.value = mMonth+strSeperator+mDay+strSeperator+mYear;
                    }
                    if (vDateType == 2) // yyyymmdd
                    {
                        var mYear = vDateName.value.substr(0,4)
                        var mMonth = vDateName.value.substr(4,2);
                        var mDay = vDateName.value.substr(6,2);
                        vDateName.value = mYear+strSeperator+mMonth+strSeperator+mDay;
                    }
                    if (vDateType == 3) // ddmmyyyy
                    {
                        var mMonth = vDateName.value.substr(2,2);
                        var mDay = vDateName.value.substr(0,2);
                        var mYear = vDateName.value.substr(4,4)
                        vDateName.value = mDay+strSeperator+mMonth+strSeperator+mYear;
                    }
                    //Create a temporary variable for storing the DateType and change
                    //the DateType to a 1 for validation.
                    var vDateTypeTemp = vDateType;
                    vDateType = 1;
                    var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                    if (!dateValid(vDateValueCheck))
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateType = vDateTypeTemp;
                        vDateName.value = "";
                        vDateName.focus();
                        vDateName.select();
                        return false;
                    }
                    vDateType = vDateTypeTemp;
                    return true;
                }
                else 
                {
                    if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) && (vDateValue.length >=1)) 
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateName.value = "";
                        vDateName.focus();
                        vDateName.select();
                        return false;
                    }
                }
            }
        }
        else
        {
            
            // Non isNav Check
            if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) && (vDateValue.length >=1))
            {
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.value = "";
                vDateName.focus();
                return true;
            }
            // Reformat date to format that can be validated. mm/dd/yyyy
            if (vDateValue.length >= 8 && dateCheck) 
            {
                // Additional date formats can be entered here and parsed out to
                // a valid date format that the validation routine will recognize.
                if (vDateType == 1) // mm/dd/yyyy
                {
                    var mMonth = vDateName.value.substr(0,2);
                    var mDay = vDateName.value.substr(3,2);
                    var mYear = vDateName.value.substr(6,4)
                }
                if (vDateType == 2) // yyyy/mm/dd
                {
                    var mYear = vDateName.value.substr(0,4)
                    var mMonth = vDateName.value.substr(5,2);
                    var mDay = vDateName.value.substr(8,2);
                }
                if (vDateType == 3) // dd/mm/yyyy
                {
                    var mDay = vDateName.value.substr(0,2);
                    var mMonth = vDateName.value.substr(3,2);
                    var mYear = vDateName.value.substr(6,4)
                }
                if (vYearLength == 4) 
                {
                    if (mYear.length < 4) 
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateName.value = "";
                        vDateName.focus();
                        return true;
                    }
                }
                // Create temp. variable for storing the current vDateType
                var vDateTypeTemp = vDateType;
                // Change vDateType to a 1 for standard date format for validation
                // Type will be changed back when validation is completed.
                vDateType = 1;
                // Store reformatted date to new variable for validation.
                var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                if (mYear.length == 2 && vYearType == 4 && dateCheck) 
                {
                    //Turn a two digit year into a 4 digit year
                    var mToday = new Date();
                    //If the year is greater than 30 years from now use 19, otherwise use 20
                    var checkYear = mToday.getFullYear() + 30; 
                    var mCheckYear = '20' + mYear;
                    if (mCheckYear >= checkYear)
                        mYear = '19' + mYear;
                    else
                        mYear = '20' + mYear;
                    vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                    // Store the new value back to the field.  This function will
                    // not work with date type of 2 since the year is entered first.
                    if (vDateTypeTemp == 1) // mm/dd/yyyy
                        vDateName.value = mMonth+strSeperator+mDay+strSeperator+mYear;
                    if (vDateTypeTemp == 3) // dd/mm/yyyy
                        vDateName.value = mDay+strSeperator+mMonth+strSeperator+mYear;
                } 
                if (!dateValid(vDateValueCheck)) 
                {
                    alert("Invalid Date\nPlease Re-Enter");
                    vDateType = vDateTypeTemp;
                    vDateName.value = "";
                    vDateName.focus();
                    return true;
                }
                vDateType = vDateTypeTemp;
                return true;
            }
            else 
            {
                if (vDateType == 1) 
                {
                    if (vDateValue.length == 2) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 5) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                }
                if (vDateType == 2) 
                {
                    if (vDateValue.length == 4)
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 7) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                } 
                if (vDateType == 3) 
                {
                    if (vDateValue.length == 2) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 5) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                }
                return true;
            }
        }
        if (vDateValue.length == 10&& dateCheck) 
        {
            if (!dateValid(vDateName)) 
            {
                // Un-comment the next line of code for debugging the dateValid() function error messages
                //alert(err);  
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.focus();
                vDateName.select();
            }
        }
        return false;
    }
    /*else 
    {
        // If the value is not in the string return the string minus the last
        // key entered.
        if (isNav4) 
        {
            vDateName.value = "";
            vDateName.focus();
            vDateName.select();
            return false;
        }
        else
        {
            //vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
            return false;
        }
    }*/
//}
}
function dateValid(objName) {
var strDate;
var strDateArray;
var strDay;
var strMonth;
var strYear;
var intday;
var intMonth;
var intYear;
var booFound = false;
var datefield = objName;
var strSeparatorArray = new Array("-"," ","index.html",".");
var intElementNr;
// var err = 0;
var strMonthArray = new Array(12);
strMonthArray[0] = "Jan";
strMonthArray[1] = "Feb";
strMonthArray[2] = "Mar";
strMonthArray[3] = "Apr";
strMonthArray[4] = "May";
strMonthArray[5] = "Jun";
strMonthArray[6] = "Jul";
strMonthArray[7] = "Aug";
strMonthArray[8] = "Sep";
strMonthArray[9] = "Oct";
strMonthArray[10] = "Nov";
strMonthArray[11] = "Dec";
//strDate = datefield.value;
strDate = objName;
if (strDate.length < 1) {
return true;
}
for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
strDateArray = strDate.split(strSeparatorArray[intElementNr]);
if (strDateArray.length != 3) {
err = 1;
return false;
}
else {
strDay = strDateArray[0];
strMonth = strDateArray[1];
strYear = strDateArray[2];
}
booFound = true;
   }
}
if (booFound == false) {
if (strDate.length>5) {
strDay = strDate.substr(0, 2);
strMonth = strDate.substr(2, 2);
strYear = strDate.substr(4);
   }
}
//Adjustment for short years entered
if (strYear.length == 2) {
strYear = '20' + strYear;
}
strTemp = strDay;
strDay = strMonth;
strMonth = strTemp;
intday = parseInt(strDay, 10);
if (isNaN(intday)) {
err = 2;
return false;
}
intMonth = parseInt(strMonth, 10);
if (isNaN(intMonth)) {
for (i = 0;i<12;i++) {
if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
intMonth = i+1;
strMonth = strMonthArray[i];
i = 12;
   }
}
if (isNaN(intMonth)) {
err = 3;
return false;
   }
}
intYear = parseInt(strYear, 10);
if (isNaN(intYear)) {
err = 4;
return false;
}
if (intMonth>12 || intMonth<1) {
err = 5;
return false;
}
if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
err = 6;
return false;
}
if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
err = 7;
return false;
}
if (intMonth == 2) {
if (intday < 1) {
err = 8;
return false;
}
if (LeapYear(intYear) == true) {
if (intday > 29) {
err = 9;
return false;
   }
}
else {
if (intday > 28) {
err = 10;
return false;
      }
   }
}
return true;
}
function LeapYear(intYear) {
if (intYear % 100 == 0) {
if (intYear % 400 == 0) { return true; }
}
else {
if ((intYear % 4) == 0) { return true; }
}
return false;
}
//  End -->

//************************************************* DATE VALIDATION END **************************************

//************************************************* Gridcheckbox Validation **********************************
function CheckGridviewcheckbox(gridid,gridcolumns)
  {
       var checkcount = 0;
       var drpId = document.getElementById("Drpstatusofpage");
       var drpname = drpId.options[drpId.selectedIndex].text
       if(drpname=="--Select--")
       { 
       alert("Please Select the page Status");
       return false;
       }
               
       try
       {      
         gv = document.getElementById(gridid);
         var count = gv.rows.length;
         //alert(count);
         for (var i = 1; i <= gv.rows.length - 1; i++) 
         {
           for(var j = 3;j <= gridcolumns - 1; j++)
           { 
             var chk1 = gv.rows(i).cells(j).firstChild;
             var value1 = chk1.id;
             if(chk1.checked==false && drpname=="APPROVED_BY_ADMIN")
             { 
               //alert(chk1.id);       
               alert("Please Correct the redbox fields\nwhen you can select the page status is APPROVED_BY_ADMIN");
               return false;               
             } 
             if(chk1.checked==false && drpname=="SENT_BACK_FOR_CORRECTION")
             {
                //alert(chk1.id);
                checkcount= 1;
             }
             j++;
           } 
         }
         
         if(drpname=="SENT_BACK_FOR_CORRECTION")
              {
              if(checkcount == 0)
               { 
                 alert("You can not select the page status SENT_BACK_FOR_CORRECTION\nbecause there is no incorrect field in your page");
                 return false;
               }
              }
         
       }
       catch(ex)
       {
       }  
  } 
  
//************************************************* Gridcheckbox Validation **********************************  

//************************** FUNCTIONS ADDED BY PARAG *************************************************

//******************** AMOUNT VALIDATION *****************************
function MaskMoney(obj, evt) {
    var parts = obj.value.split('.');
    
    switch (evt.keyCode) {
        // Digits 0..9
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
                
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            // Accept only one 14 integer digits and 2 decimal places
            if (parts.length < 2)
                return (parts[0].length < 14)
            else
                return (parts[1].length < 2);
            break;
            
        case 105:
            // Accept only one 14 integer digits and 2 decimal places
            if (parts.length < 2)
                return (parts[0].length < 14)
            else
                return (parts[1].length < 2);
            break;
            
        // Decimal point
        case 190:
            // Accept only one single point
            return (parts.length < 2);
            break;
            
        case 110:
            // Accept only one single point
            return (parts.length < 2);
            break;    
            
        // Backspace (8), Delete (46)
        case 8:
        case 46:
            return (parts.length > 0);
            break;
        
        // Left (37), Right (39) arrow keys
        // Add here cases for any other key code you want to accept
        case 37:
        case 39:
            return true;
            break;
            
        // Anything else is invalid
        case 9:
            return true;
            break;
        default:
            return false;
    }
}
//******************** AMOUNT VALIDATION END *************************

//******************** ONLY NUMBERS ARE ALLOWED **********************
function funOnlyNumbers(evt)
{		
 
 var charCode = (evt.which) ? evt.which : event.keyCode
 
  if ((charCode <48 || charCode > 57)) //&& charCode!==47 && charCode!==8)
	return false;
	
 return true;
}
//******************** ONLY NUMBERS ARE ALLOWED **********************

//*********************************** DATE VALIDATION ***********************************************
// Begin
// Check browser version
var isNav4 = false, isNav5 = false, isIE4 = false
var strSeperator = "index.html"; 
// If you are using any Java validation on the back side you will want to use the / because 
// Java date validations do not recognize the dash as a valid date separator.
var vDateType = 3; // Global value for type of date format
//                1 = mm/dd/yyyy
//                2 = yyyy/dd/mm  (Unable to do date check at this time)
//                3 = dd/mm/yyyy
var vYearType = 4; //Set to 2 or 4 for number of digits in the year for Netscape
var vYearLength = 2; // Set to 4 if you want to force the user to enter 4 digits for the year before validating.
var err = 0; // Set the error code to a default of zero
if(navigator.appName == "Netscape") {
if (navigator.appVersion < "5") {
isNav4 = true;
isNav5 = false;
}
else
if (navigator.appVersion > "4") {
isNav4 = false;
isNav5 = true;
   }
}
else {
isIE4 = true;
}

//*********************************** DATE VALIDATION ***********************************************
// Begin
// Check browser version
var isNav4 = false, isNav5 = false, isIE4 = false
var strSeperator = "index.html"; 
// If you are using any Java validation on the back side you will want to use the / because 
// Java date validations do not recognize the dash as a valid date separator.
var vDateType = 3; // Global value for type of date format
//                1 = mm/dd/yyyy
//                2 = yyyy/dd/mm  (Unable to do date check at this time)
//                3 = dd/mm/yyyy
var vYearType = 4; //Set to 2 or 4 for number of digits in the year for Netscape
var vYearLength = 2; // Set to 4 if you want to force the user to enter 4 digits for the year before validating.
var err = 0; // Set the error code to a default of zero
if(navigator.appName == "Netscape") {
if (navigator.appVersion < "5") {
isNav4 = true;
isNav5 = false;
}
else
if (navigator.appVersion > "4") {
isNav4 = false;
isNav5 = true;
   }
}
else {
isIE4 = true;
}
function DateFormat(vDateName, vDateValue, e, dateCheck, dateType) {
vDateType = dateType;
// vDateName = object name
// vDateValue = value in the field being checked
// e = event
// dateCheck 
// True  = Verify that the vDateValue is a valid date
// False = Format values being entered into vDateValue only
// vDateType
// 1 = mm/dd/yyyy
// 2 = yyyy/mm/dd
// 3 = dd/mm/yyyy
//Enter a tilde sign for the first number and you can check the variable information.
if (vDateValue == "~") {
alert("AppVersion = "+navigator.appVersion+" \nNav. 4 Version = "+isNav4+" \nNav. 5 Version = "+isNav5+" \nIE Version = "+isIE4+" \nYear Type = "+vYearType+" \nDate Type = "+vDateType+" \nSeparator = "+strSeperator);
vDateName.value = "";
vDateName.focus();
return true;
}
var whichCode = (window.Event) ? e.which : e.keyCode;
// Check to see if a seperator is already present.
// bypass the date if a seperator is present and the length greater than 8
if (vDateValue.length > 8 && isNav4) {
if ((vDateValue.indexOf("-") >= 1) || (vDateValue.indexOf("index.html") >= 1))
return true;
}
//Eliminate all the ASCII codes that are not valid
var alphaCheck = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
if (alphaCheck.indexOf(vDateValue) >= 1) {
if (isNav4) {
vDateName.value = "";
vDateName.focus();
vDateName.select();
return false;
}
else {
vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
return false;
   }
}

if (whichCode == 8) //Ignore the Netscape value for backspace. IE has no value
return false;
else
{
    //Create numeric string values for 0123456789/
    //The codes provided include both keyboard and keypad values
    var strCheck = '47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';
    
    //if (strCheck.indexOf(whichCode) != -1)
    //{
        
        if (isNav4)
        {
            if (((vDateValue.length < 6 && dateCheck) || (vDateValue.length == 7 && dateCheck)) && (vDateValue.length >=1))
            {
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.value = "";
                vDateName.focus();
                vDateName.select();
                return false;
            }
            if (vDateValue.length == 6 && dateCheck)
            {
                var mDay = vDateName.value.substr(2,2);
                var mMonth = vDateName.value.substr(0,2);
                var mYear = vDateName.value.substr(4,4)
                //Turn a two digit year into a 4 digit year
                if (mYear.length == 2 && vYearType == 4)
                {
                    var mToday = new Date();
                    //If the year is greater than 30 years from now use 19, otherwise use 20
                    var checkYear = mToday.getFullYear() + 30; 
                    var mCheckYear = '20' + mYear;
                    if (mCheckYear >= checkYear)
                        mYear = '19' + mYear;
                    else
                        mYear = '20' + mYear;
                }
                var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                if (!dateValid(vDateValueCheck))
                {
                    alert("Invalid Date\nPlease Re-Enter");
                    vDateName.value = "";
                    vDateName.focus();
                    vDateName.select();
                    return false;   
                }   
                return true;
            }
            else 
            {
                // Reformat the date for validation and set date type to a 1
                if (vDateValue.length >= 8  && dateCheck)
                {
                    if (vDateType == 1) // mmddyyyy
                    {
                        var mDay = vDateName.value.substr(2,2);
                        var mMonth = vDateName.value.substr(0,2);
                        var mYear = vDateName.value.substr(4,4)
                        vDateName.value = mMonth+strSeperator+mDay+strSeperator+mYear;
                    }
                    if (vDateType == 2) // yyyymmdd
                    {
                        var mYear = vDateName.value.substr(0,4)
                        var mMonth = vDateName.value.substr(4,2);
                        var mDay = vDateName.value.substr(6,2);
                        vDateName.value = mYear+strSeperator+mMonth+strSeperator+mDay;
                    }
                    if (vDateType == 3) // ddmmyyyy
                    {
                        var mMonth = vDateName.value.substr(2,2);
                        var mDay = vDateName.value.substr(0,2);
                        var mYear = vDateName.value.substr(4,4)
                        vDateName.value = mDay+strSeperator+mMonth+strSeperator+mYear;
                    }
                    //Create a temporary variable for storing the DateType and change
                    //the DateType to a 1 for validation.
                    var vDateTypeTemp = vDateType;
                    vDateType = 1;
                    var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                    if (!dateValid(vDateValueCheck))
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateType = vDateTypeTemp;
                        vDateName.value = "";
                        vDateName.focus();
                        vDateName.select();
                        return false;
                    }
                    vDateType = vDateTypeTemp;
                    return true;
                }
                else 
                {
                    if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) && (vDateValue.length >=1)) 
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateName.value = "";
                        vDateName.focus();
                        vDateName.select();
                        return false;
                    }
                }
            }
        }
        else
        {
            
            // Non isNav Check
            if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) && (vDateValue.length >=1))
            {
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.value = "";
                vDateName.focus();
                return true;
            }
            // Reformat date to format that can be validated. mm/dd/yyyy
            if (vDateValue.length >= 8 && dateCheck) 
            {
                // Additional date formats can be entered here and parsed out to
                // a valid date format that the validation routine will recognize.
                if (vDateType == 1) // mm/dd/yyyy
                {
                    var mMonth = vDateName.value.substr(0,2);
                    var mDay = vDateName.value.substr(3,2);
                    var mYear = vDateName.value.substr(6,4)
                }
                if (vDateType == 2) // yyyy/mm/dd
                {
                    var mYear = vDateName.value.substr(0,4)
                    var mMonth = vDateName.value.substr(5,2);
                    var mDay = vDateName.value.substr(8,2);
                }
                if (vDateType == 3) // dd/mm/yyyy
                {
                    var mDay = vDateName.value.substr(0,2);
                    var mMonth = vDateName.value.substr(3,2);
                    var mYear = vDateName.value.substr(6,4)
                }
                if (vYearLength == 4) 
                {
                    if (mYear.length < 4) 
                    {
                        alert("Invalid Date\nPlease Re-Enter");
                        vDateName.value = "";
                        vDateName.focus();
                        return true;
                    }
                }
                // Create temp. variable for storing the current vDateType
                var vDateTypeTemp = vDateType;
                // Change vDateType to a 1 for standard date format for validation
                // Type will be changed back when validation is completed.
                vDateType = 1;
                // Store reformatted date to new variable for validation.
                var vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                if (mYear.length == 2 && vYearType == 4 && dateCheck) 
                {
                    //Turn a two digit year into a 4 digit year
                    var mToday = new Date();
                    //If the year is greater than 30 years from now use 19, otherwise use 20
                    var checkYear = mToday.getFullYear() + 30; 
                    var mCheckYear = '20' + mYear;
                    if (mCheckYear >= checkYear)
                        mYear = '19' + mYear;
                    else
                        mYear = '20' + mYear;
                    vDateValueCheck = mMonth+strSeperator+mDay+strSeperator+mYear;
                    // Store the new value back to the field.  This function will
                    // not work with date type of 2 since the year is entered first.
                    if (vDateTypeTemp == 1) // mm/dd/yyyy
                        vDateName.value = mMonth+strSeperator+mDay+strSeperator+mYear;
                    if (vDateTypeTemp == 3) // dd/mm/yyyy
                        vDateName.value = mDay+strSeperator+mMonth+strSeperator+mYear;
                } 
                if (!dateValid(vDateValueCheck)) 
                {
                    alert("Invalid Date\nPlease Re-Enter");
                    vDateType = vDateTypeTemp;
                    vDateName.value = "";
                    vDateName.focus();
                    return true;
                }
                vDateType = vDateTypeTemp;
                return true;
            }
            else 
            {
                if (vDateType == 1) 
                {
                    if (vDateValue.length == 2) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 5) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                }
                if (vDateType == 2) 
                {
                    if (vDateValue.length == 4)
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 7) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                } 
                if (vDateType == 3) 
                {
                    if (vDateValue.length == 2) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                    if (vDateValue.length == 5) 
                    {
                        vDateName.value = vDateValue+strSeperator;
                    }
                }
                return true;
            }
        }
        if (vDateValue.length == 10&& dateCheck) 
        {
            if (!dateValid(vDateName)) 
            {
                // Un-comment the next line of code for debugging the dateValid() function error messages
                //alert(err);  
                alert("Invalid Date\nPlease Re-Enter");
                vDateName.focus();
                vDateName.select();
            }
        }
        return false;
    }
    /*else 
    {
        // If the value is not in the string return the string minus the last
        // key entered.
        if (isNav4) 
        {
            vDateName.value = "";
            vDateName.focus();
            vDateName.select();
            return false;
        }
        else
        {
            //vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
            return false;
        }
    }*/
//}
}
function dateValid(objName) {
var strDate;
var strDateArray;
var strDay;
var strMonth;
var strYear;
var intday;
var intMonth;
var intYear;
var booFound = false;
var datefield = objName;
var strSeparatorArray = new Array("-"," ","index.html",".");
var intElementNr;
// var err = 0;
var strMonthArray = new Array(12);
strMonthArray[0] = "Jan";
strMonthArray[1] = "Feb";
strMonthArray[2] = "Mar";
strMonthArray[3] = "Apr";
strMonthArray[4] = "May";
strMonthArray[5] = "Jun";
strMonthArray[6] = "Jul";
strMonthArray[7] = "Aug";
strMonthArray[8] = "Sep";
strMonthArray[9] = "Oct";
strMonthArray[10] = "Nov";
strMonthArray[11] = "Dec";
//strDate = datefield.value;
strDate = objName;
if (strDate.length < 1) {
return true;
}
for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
strDateArray = strDate.split(strSeparatorArray[intElementNr]);
if (strDateArray.length != 3) {
err = 1;
return false;
}
else {
strDay = strDateArray[0];
strMonth = strDateArray[1];
strYear = strDateArray[2];
}
booFound = true;
   }
}
if (booFound == false) {
if (strDate.length>5) {
strDay = strDate.substr(0, 2);
strMonth = strDate.substr(2, 2);
strYear = strDate.substr(4);
   }
}
//Adjustment for short years entered
if (strYear.length == 2) {
strYear = '20' + strYear;
}
strTemp = strDay;
strDay = strMonth;
strMonth = strTemp;
intday = parseInt(strDay, 10);
if (isNaN(intday)) {
err = 2;
return false;
}
intMonth = parseInt(strMonth, 10);
if (isNaN(intMonth)) {
for (i = 0;i<12;i++) {
if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
intMonth = i+1;
strMonth = strMonthArray[i];
i = 12;
   }
}
if (isNaN(intMonth)) {
err = 3;
return false;
   }
}
intYear = parseInt(strYear, 10);
if (isNaN(intYear)) {
err = 4;
return false;
}
if (intMonth>12 || intMonth<1) {
err = 5;
return false;
}
if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
err = 6;
return false;
}
if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
err = 7;
return false;
}
if (intMonth == 2) {
if (intday < 1) {
err = 8;
return false;
}
if (LeapYear(intYear) == true) {
if (intday > 29) {
err = 9;
return false;
   }
}
else {
if (intday > 28) {
err = 10;
return false;
      }
   }
}
return true;
}
function LeapYear(intYear) {
if (intYear % 100 == 0) {
if (intYear % 400 == 0) { return true; }
}
else {
if ((intYear % 4) == 0) { return true; }
}
return false;
}
//  End -->

//************************************ DATE VALIDATION END **************************************

/**************Maxlength Validations for Text Area************/
function imposeMaxLength(Object, MaxLen)
{
  return (Object.value.length < MaxLen);
}

function CheckMaxLength(Object, MaxLen)
{
    var str = trim(Object.value);
    //str = str.replace(new RegExp( "\\n", "g" ), "");
    if(str.length > MaxLen)
    {
        str = str.substr(0,MaxLen);
        Object.value = str;
    }
    
    //alert(str.length);
}

function CheckMaxLength1(Object, MaxLen) {
    var str = trim(Object.value);
    //str = str.replace(new RegExp( "\\n", "g" ), "");
    if (str.length > (MaxLen - 1)) {
        str = str.substr(0, MaxLen - 1);
        Object.value = str;
    }
//    else
//        Object.value = Object.value.toString().trim();
    //alert(str.length);
}
/**************End Maxlength Validations for Text Area************/

function funFocus(obj)
{
    obj.className = "textfieldFocus";
}

function funBlur(obj)
{
    obj.className = "textfield";
}

function Checkemailid(obj)
{
            if(obj.value!=""){
            
            var x=obj.value;
            var atpos=x.indexOf("@");
            var dotpos=x.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
              alert("Not a valid E-Mail address");
              obj.value = "";
              obj.focus();
              }
           }
              
}

function formatDate(date) {
    var d = new Date(date);
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
        h = hh-12;
        dd = "PM";
    }
    if (h == 0) {
        h = 12;
    }
    m = m<10?"0"+m:m;

    s = s<10?"0"+s:s;

    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */

    var pattern = new RegExp("0?"+hh+":"+m+":"+s);

    var repalcement = h+":"+m;
    /* if you want to add seconds*/
    repalcement += ":"+s;  
    repalcement += "  "+dd;    

    return date.replace(pattern,repalcement);
}

function targetopener(mylink, closeme, closeonly)
{
    if (! (window.focus && window.opener))return true;
    window.opener.focus();
    if (! closeonly)window.opener.parent.location.href=mylink;
    if (closeme)window.close();
    return false;
}

/*******************************************
* Function to compare dates
* I/P : date1 & date2 dates valid  dates in dd/mm/yyyy format      
* Output: if date1 == date2 : 0      
*         if date1 < date2  : 1
*         if date1 > date2  : -1
****************************************/     
 function CompareDt(date1,date2)
 {  
     d1 = date1.split('index.html'); 
     d2 = date2.split('index.html'); 
     var year1,year2,month1,month2,date1,date2;
      year1 = parseInt(d1[2],10);
      year2 = parseInt(d2[2],10);
      month1 = parseInt(d1[1],10);
      month2 = parseInt(d2[1],10);
      date1 = parseInt(d1[0],10);
      date2 = parseInt(d2[0],10);
   
        if(year1 < year2) 
            return 1;
        else if(year1 > year2)
            return -1;
        else if(year1 == year2)   
        {
            if(month1 < month2)
                return 1;
            else if(month1 > month2)   
                return -1;  
            else if(month1 == month2)   
            {     
                if(date1 < date2) 
                    return 1;
                else if(date1 > date2)   
                    return -1;  
                else if(date1 == date2)   
                   return 0;
            }

        }
 }            
 /*************End Compare Dt.***************************/
 
function checkURL(value) 
{
   
	//alert(value);
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.){1}([0-9A-Za-z]+\.)");//|www.
    if (urlregex.test(value)) {
        return true;
    }
    else
    {
	    alert("wrong web address. It should be like http://www.aaa.com");	
        return false;
    }
}
//************************** FUNCTIONS ADDED BY PARAG END *********************************************


//******************** PRECISION VALIDATION *****************************
function funValdPrec(obj, evt,dig,prec) {
    var parts = obj.value.split('.');
    
    if(evt.keyCode == 46 && prec == 0)
        return false;
    
    //alert(parts.length);
    if (parts.length > 1 && evt.keyCode == 46)
        return false;
        
    switch (evt.keyCode) {
        // Digits 0..9
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
            return false;
            break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            // Accept only one 14 integer digits and 2 decimal places
            if (parts.length < 2)
                return (parts[0].length < dig)
            else
                return (parts[1].length < prec);
            break;
            
        /*case 105:
            // Accept only one 14 integer digits and 2 decimal places
            if (parts.length < 2)
                return (parts[0].length < dig)
            else
                return (parts[1].length < prec);
            break;*/
            
        // Decimal point
        case 190:
            // Accept only one single point
            return (parts.length < 2);
            break;
            
        /*case 110:
            // Accept only one single point
            return (parts.length < 2);
            break;*/    
            
        // Backspace (8), Delete (46)
        case 8:
        case 46:
            return (parts.length > 0);
            break;
        
        // Left (37), Right (39) arrow keys
        // Add here cases for any other key code you want to accept
        /*case 37:
        case 39:
            return true;
            break;*/
            
        // Anything else is invalid
        case 9:
            return true;
            break;
        default:
            return false;
    }
}
//******************** PRECISION VALIDATION END *************************

function funValidEmailId(email)
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//************* DO NOT ACCEPT < > &***************************
function funRetrictKeywork(evt, MaxLen) {
    var arr = evt.id.split('_');
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == "60" || charCode == "62" || charCode == "38") {
        alert("Please do not enter < > &");
        evt.value = "";
        evt.focus();
        return false;
    }
    return (evt.value.length < MaxLen);
}

function funChkTime(vTime1,vTime2)
{
    var vArr = vTime1.split(' ');
    var vAMPM = trim(vArr[1]);
    var vArr = vArr[0].split(':');
    var vHR = trim(vArr[0]);
    var vMI = trim(vArr[1]);
    
    vArr = vTime2.split(' ');
    vAMPM2 = trim(vArr[1]);
    vArr = vArr[0].split(':');
    var vHR2 = trim(vArr[0]);
    var vMI2 = trim(vArr[1]);
    
    if(vAMPM == vAMPM2)
    {
        if(parseFloat(vHR2) < parseFloat(vHR))
            return false;
        else if(parseFloat(vHR2) == parseFloat(vHR))
        {
            if(parseFloat(vMI2) < parseFloat(vMI))
                return false;
        }
    }
    else if(vAMPM == "PM" && vAMPM2 == "AM")
        return false;
        
    return true;
}

function funAlphaNumDashUndSc(e) 
{ 
    var key; var keychar;
    
    if (window.event)
        key = window.event.keyCode;
    else if (e) 
        key = e.which; 
    else 
        return true; 
        
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase(); 
    
    if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) ) 
        return true; 
    else if ((("abcdefghijklmnopqrstuvwxyz0123456789_- ").indexOf(keychar) > -1)) 
        return true; 
    else 
        return false; 
}

function funPopupCenter(url, title, w, h) 
{
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    //alert(window.innerWidth + " - " + document.documentElement.clientWidth + " - " + document.documentElement.clientWidth + " - " + screen.width);

    var width = screen.width;
    var height = screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    
    //alert(left + ' '+ top);
    
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function funDisCtrBackSpcF5CtrRgtClk()
{
    $(document).keydown(function(e) 
    {
        var nodeName = e.target.nodeName.toLowerCase();

        switch(e.which)
        {
            case 8:
                if ((nodeName === 'input' && e.target.type === 'text') ||
                    nodeName === 'textarea') 
                {
                   return true; // do nothing
                } else 
                {
                    e.preventDefault();
                }
            /*case 13 : //Enter button
                event.returnValue = false;
                event.keyCode = 0;
                return false;*/
            case 116 : //F5 button
                event.returnValue = false;
                event.keyCode = 0;
                return false;
            case 82 : //R button
                if (event.ctrlKey) 
                {
                    event.returnValue = false;
                    event.keyCode = 0;
                    return false;
                }
        }
    });
    
    $(document).on("contextmenu",function(e){
        if(e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
             e.preventDefault();
     });
}

function showPassWordPopup(modalBehaviorId) 
{
    var modal = $find(modalBehaviorId);
    if (modal != null) 
    {
        modal.show();
    }
}

//******************** CHEQUE DATE VALIDATION ************************
function funChqDate(obj,vDate,span)
{
    word_month = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
    
    var date=trim(obj.value);
    var d1=new Array(); 
    d1=(date.split('index.html'));
    year1 = parseFloat(d1[2]);
    month1 = parseFloat(d1[1])-1;
    date1 = parseFloat(d1[0]);
    
    var dtComp=new Date(year1,month1,date1);//************** ENTERED DATE 
    
    var dtHdn=trim(vDate);// document.getElementById('hdnDate').value;
    
    var d2=new Array(); 
    d2=dtHdn.split('index.html');
    var year3 = parseFloat(d2[2]);
    var month3 = parseFloat(d2[1])-1;
    var date3 = parseFloat(d2[0]);
    
    var dteNow = new Date(year3,month3,date3);
    
    var dtBnk = new Date(year3,month3,date3);//************* BANK DATE 
   
    dteNow.setMonth(dteNow.getMonth() - parseFloat(span) );
    dteNow.setDate(dteNow.getDate() + 1);   //************** VALID DATE
    
    var valdt=parseFloat(dteNow.getDate())
    var valmonth=parseFloat(dteNow.getMonth());
    var valyear=parseFloat(dteNow.getYear());
    
    if(dtComp>=dteNow && dtComp<=dtBnk)
    {
        //alert("Correct");
        return true;
    }
    else if(obj.value!="")
    {
        alert("Valid Date is from "+valdt+" "+word_month[valmonth] +" "+ valyear +" to "+date3+" "+word_month[month3]+" "+year3);
        return false;   
    }
}
//******************** CHEQUE DATE VALIDATION END ********************