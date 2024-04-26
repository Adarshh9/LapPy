function getweightValue() {
    var uiweight = document.getElementsByName("weight");
    for(var i in uiweight) {
      if(uiweight[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
}

function gettouchScreenValue() {
    var uitouchScreen = document.getElementsByName("touchscreen");
    for(var i in uitouchScreen) {
      if(uitouchScreen[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
}
  
function getIPSValue() {
    var IPS = document.getElementsByName("ips");
    for(var i in IPS) {
        if(IPS[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; 
}

function getscreensizeValue() {
    var screensize = document.getElementsByName("screensize");
    for(var i in screensize) {
        if(screensize[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; 
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var company = document.getElementById('uiCompany').value;
    // var weight = parseFloat(document.getElementById('uiWeight').value); // Assuming weight is a numeric input
    var weight = parseFloat(getweightValue());
    var touchscreen = parseInt(gettouchScreenValue());
    var ips = parseInt(getIPSValue()); 
    var screensize = String(getscreensizeValue()); 
    var type = document.getElementById("uiType").value;
    var ram = parseInt(document.getElementById("uiRam").value); // Assuming ram is a numeric input
    var resolution = document.getElementById("uiResolution").value;
    var cpu = document.getElementById("uiCpu").value;
    var hdd = parseInt(document.getElementById("uiHdd").value); // Assuming hdd is a numeric input
    var ssd = parseInt(document.getElementById("uiSsd").value); // Assuming ssd is a numeric input
    var gpu = document.getElementById("uiGpu").value;
    var os = document.getElementById("uiOS").value;

    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict"; 
    
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json', // Set the content type to application/json
        data: JSON.stringify({ // Stringify the data object
            company: company,
            type: type,
            ram: ram,
            weight: weight,
            touchscreen: touchscreen,
            ips: ips,
            screensize: screensize,
            resolution: resolution,
            cpu: cpu,
            hdd: hdd,
            ssd: ssd,
            gpu: gpu,
            os: os
        }),
        success: function(data, status) {
            console.log(data.estimated_price);
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Rupees</h2>";
            console.log(status);
        }
    });
    
}
  
function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/data"; 
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var company = data.company;
            var type = data.type;
            var ram = data.ram;
            var resolution = data.resolution;
            var cpu = data.cpu;
            var gpu = data.gpu;
            var os = data.os;
            var hdd = data.hdd;
            var ssd = data.ssd;

            $('#uiCompany').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(company[i], company[i]); // Create new option element
                $('#uiCompany').append(opt); // Append the option to the select element
            }
            $('#uiType').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(type[i], type[i]); // Create new option element
                $('#uiType').append(opt); // Append the option to the select element
            }
            $('#uiRam').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(ram[i], ram[i]); // Create new option element
                $('#uiRam').append(opt); // Append the option to the select element
            }
            $('#uiResolution').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(resolution[i], resolution[i]); // Create new option element
                $('#uiResolution').append(opt); // Append the option to the select element
            }
            $('#uiCpu').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(cpu[i], cpu[i]); // Create new option element
                $('#uiCpu').append(opt); // Append the option to the select element
            }
            $('#uiGpu').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(gpu[i], gpu[i]); // Create new option element
                $('#uiGpu').append(opt); // Append the option to the select element
            }
            $('#uiOS').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(os[i], os[i]); // Create new option element
                $('#uiOS').append(opt); // Append the option to the select element
            }
            $('#uiHdd').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(hdd[i], hdd[i]); // Create new option element
                $('#uiHdd').append(opt); // Append the option to the select element
            }
            $('#uiSsd').empty(); // Clear existing options
            for(var i in company) { // Iterate over company names
                var opt = new Option(ssd[i], ssd[i]); // Create new option element
                $('#uiSsd').append(opt); // Append the option to the select element
            }
        }
    });
}

window.onload = onPageLoad;
