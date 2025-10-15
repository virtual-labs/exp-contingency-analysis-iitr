 
let buses = [], lines = [], Y = [];
function generateBusTable() {
    var numBuses = parseInt(document.getElementById('numBuses').value);
    if (isNaN(numBuses) || numBuses <= 0) {
        alert("Please enter a valid number of Buses.");
        return;
    }
    var tableHtml = `
        <table>
            <tr>
                <th>Bus No.</th>
                <th>Bus Type</th>
                <th>Voltage (pu)</th>
                <th>Angle (degree)</th>
                <th>P<sub>gen</sub> (pu)</th>
                <th>P<sub>load</sub> (pu)</th>
            </tr>
    `;
    for (var i = 1; i <= numBuses; i++) {
        tableHtml += `
            <tr>
                <td>${i}</td>
                <td><input type="text" id="busType${i}" required></td>
                <td><input type="number" id="busV${i}" required></td>
                <td><input type="number" id="busAng${i}" required></td>
                <td><input type="text" id="busPg${i}" required></td>
                <td><input type="text" id="busPL${i}" required></td>
            </tr>
        `;
    }
    
    tableHtml += '</table>';
    document.getElementById('busTableContainer').innerHTML = tableHtml;
}
// Function to autofill bus data for a five-bus network
function autofillFiveBusNetwork() {
    var numBuses = 5;
    document.getElementById('numBuses').value = numBuses; // Update input field
    generateBusTable(); // Regenerate table with updated number of buses
    // Autofill data into the table
    var defaultbusType = [1, 2, 2, 3, 3];
    var defaultbusV = [1, 1, 1, 1, 1];
    var defaultbusAng = [0, 0, 0, 0, 0];
    var defaultbusPg = [0, 0.5, 1.0, 0, 0];
    var defaultbusPL = [0, 0, 0, 1.15, 0.85];
    for (var i = 0; i < numBuses; i++) {
        document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
        document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
        document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
        document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
        document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
    }
}
// Function to autofill bus data for a five-bus network
function autofillFourteenBusNetwork() {
    var numBuses = 14;
    document.getElementById('numBuses').value = numBuses; // Update input field
    generateBusTable(); // Regenerate table with updated number of buses
    // Autofill data into the table
    var defaultbusType = [1, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3];
    var defaultbusV = [1.06, 1.045, 1, 1, 1, 1.07, 1, 1, 1, 1, 1, 1, 1, 1]; 
    var defaultbusAng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var defaultbusPg = [0, 0.183, 0, 0, 0, 0.112, 0, 0, 0, 0, 0, 0, 0, 0];
    var defaultbusPL = [0, 0, 1.19, 0.4779, 0.07599, 0, 0, 0, 0.29499, 0.09, 0.03501, 0.06099, 0.135, 0.14901];  
    for (var i = 0; i < numBuses; i++) {
        document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
        document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
        document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
        document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
        document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)    
    }
}
// Function to save bus data
function saveBusData() {
    buses = [];
    var numBuses = parseInt(document.getElementById('numBuses').value);
    for (var i = 0; i < numBuses; i++) {
        buses.push({
            V: parseFloat(document.getElementById(`busV${i+1}`).value),
            angle: parseFloat(document.getElementById(`busAng${i+1}`).value),
            Pg: parseFloat(document.getElementById(`busPg${i+1}`).value),
            PL: parseFloat(document.getElementById(`busPL${i+1}`).value),
            type: parseFloat(document.getElementById(`busType${i+1}`).value),
        });
    }
}
// Function to generate line data input table
function generateLineTable() {
    var numLines = parseInt(document.getElementById('numLines').value);
    if (isNaN(numLines) || numLines <= 0) {
        alert("Please enter a valid number of lines.");
        return;
    }
    var tableHtml = `
        <table>
            <tr>
                <th>Line No.</th>
                <th>From Bus</th>
                <th>To Bus</th>
                <th>X (pu)</th>
                <th> Line Limit (pu)</th>
            </tr>
    `;
    for (var i = 1; i <= numLines; i++) {
        tableHtml += `
            <tr>
                <td>${i}</td>
                <td><input type="number" id="fromBus${i}" required></td>
                <td><input type="number" id="toBus${i}" required></td>
                <td><input type="text" id="X${i}" required></td>
                <td><input type="text" id="pLimit${i}" required></td>
            </tr>
        `;
    }
    
    tableHtml += '</table>';
    document.getElementById('lineTableContainer').innerHTML = tableHtml;
}
// Function to autofill line data for six lines
function autofillSixLines() {
    var numLines = 6;
    document.getElementById('numLines').value = numLines; // Update input field
    generateLineTable(); // Regenerate table with updated number of lines
    // Autofill line data into the table
    var defaultFromBus = [1, 1, 2, 3, 3, 4];
    var defaultToBus = [2, 5, 3, 4, 5, 5];
    var defaultX = [0.168, 0.126, 0.126, 0.136, 0.210, 0.252];
    var defaultPLimit = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    
    for (var i = 0; i < numLines; i++) {
        document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
        document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
        document.getElementById(`X${i+1}`).value = defaultX[i];
        document.getElementById(`pLimit${i+1}`).value = defaultPLimit[i];
    }
}
// Function to autofill line data for 20 lines
function autofillTwentyLines() {
    var numLines = 20;
    document.getElementById('numLines').value = numLines; // Update input field
    generateLineTable(); // Regenerate table with updated number of lines
    // Autofill data into the table
    var defaultFromBus = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 9, 9, 10, 12, 13];
    var defaultToBus = [2, 5, 3, 4, 5, 4, 5, 7, 9, 6, 11, 12, 13, 8, 9, 10, 14, 11, 13, 14];
    var defaultX = [0.0592, 0.223, 0.1979, 0.1763, 0.1738, 0.171, 0.0421, 0.209, 0.5562, 0.2522, 0.1989, 0.2557, 0.1302, 0.1762, 0.011, 0.0845, 0.2703, 0.192, 0.1999, 0.3479];
    var defaultPLimit = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    for (var i = 0; i < numLines; i++) {
        document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
        document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
        document.getElementById(`X${i+1}`).value = defaultX[i];
        document.getElementById(`pLimit${i+1}`).value = defaultPLimit[i];
    }
}
// Function to save line data
function saveLineData() {
    lines = [];
    var numLines = parseInt(document.getElementById('numLines').value);
    for (var i = 0; i < numLines; i++) {
        lines.push({
            from: parseInt(document.getElementById(`fromBus${i + 1}`).value),
            to: parseInt(document.getElementById(`toBus${i + 1}`).value),
            X: parseFloat(document.getElementById(`X${i + 1}`).value),
            pLim: parseFloat(document.getElementById(`pLimit${i + 1}`).value),
        });
    }
    console.log("Original Line Data:", lines);
//   saveContingencyCases(); // Generate outage cases and run B-Bus calculations
}
// Function to format complex numbers for display
function formatComplexNumber(complexNumber, decimals) {
    let real = parseFloat(complexNumber.re).toFixed(decimals);
    let imag = parseFloat(complexNumber.im).toFixed(decimals);
    return parseFloat(imag) >= 0 ? `${real} + ${imag}i` : `${real} - ${Math.abs(imag)}i`;
}
let Bbus = [];  // ✅ Declare Bbus globally
// Function to calculate the Ybus matrix
function calculateYbus() {
    saveBusData();
    saveLineData();
    var numBuses = buses.length;
    var numLines = lines.length;
    // Initialize Y matrix
    
    Bbus = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));
    // Calculate line admittances and update Ybus
    for (var i = 0; i < numLines; i++) {
        var from = lines[i].from - 1; // Convert to zero-based index
        var to = lines[i].to - 1; // Convert to zero-based index
        var X = lines[i].X;
        // var tap = lines[i].Tap; // Tap changing transformer value, 1 if no transformer
        let tap = Array(lines.length).fill(1);
      
        var Badmittance = math.divide(1, X);
        var BshuntAdmittance = 0;
        if (tap > 0) {
            // Update Ybus matrix for tap-changing transformers
            var tapComplex = math.complex(tap, 0);
            var tapSquare = math.multiply(tapComplex, tapComplex);
            Bbus[from][to] = math.subtract(Bbus[from][to], math.multiply(Badmittance, tapComplex));
            Bbus[to][from] = Bbus[from][to]; // Symmetric matrix
            
            // For B-Bus (Used In DC Power Flow)
            var BfromAdmittance = math.add(
                math.multiply(Badmittance, tap),
                math.multiply(tap, math.subtract(tap, 1), Badmittance),
                BshuntAdmittance
            );
            var BtoAdmittance = math.add(
                math.multiply(Badmittance, tap),
                math.multiply(math.subtract(1, tap), Badmittance),
                BshuntAdmittance
            );
            Bbus[from][from] = math.add(Bbus[from][from], BfromAdmittance);
            Bbus[to][to] = math.add(Bbus[to][to], BtoAdmittance);
        } else {
            // Regular update without tap-changing transformers
            
            // For Bbus - 
            Bbus[from][to] = math.subtract(Bbus[from][to], Badmittance);
            Bbus[to][from] = Bbus[from][to]; // Symmetric matrix
            Bbus[from][from] = math.add(Bbus[from][from], Badmittance, BshuntAdmittance);
            Bbus[to][to] = math.add(Bbus[to][to], Badmittance, BshuntAdmittance);
        }
    }
    console.log("Bbus:", Bbus);
    displayYbusMatrix();
}
// Function to display the Ybus matrix
function displayYbusMatrix() {
    var tableHtml = '<table><tr><th></th>';
    for (var i = 0; i < Bbus.length; i++) {
        tableHtml += `<th>${i+1}</th>`;
    }
    tableHtml += '</tr>';
    for (var i = 0; i < Bbus.length; i++) {
        tableHtml += `<tr><th>${i+1}</th>`;
        for (var j = 0; j < Bbus[i].length; j++) {
            tableHtml += `<td>${math.re(Bbus[i][j]).toFixed(4)}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    document.getElementById('ybusContainer').innerHTML = tableHtml;
}
// }
// Function to run the power flow analysis Fast - DC (Linear Power Flow Method)
function runLoadFlow() {
    saveBusData();
    saveLineData();
    if (!buses.length || !lines.length) {
        alert('Please generate and fill in the bus and line tables first.');
        return;
    }
    var numBuses = buses.length;
    var numLines = lines.length;
    let type = buses.map(bus => bus.type);
    let Pg = buses.map(bus => bus.Pg);
    let Qg = buses.map(bus => bus.Qg);
    let Pd = buses.map(bus => bus.PL);
    let Qd = buses.map(bus => bus.QL);
    let Qmin = buses.map(bus => bus.Qmin);
    let Qmax = buses.map(bus => bus.Qmax);
    let Vmag = buses.map(bus => bus.V);
    // let delta = buses.map(bus => bus.angle);
    let delta = Array(numBuses).fill(0);
    let P_sch = Pg.map((pg, i) => pg - Pd[i]);
    let DP1 = math.subtract(
        P_sch.slice(1, numBuses), // Slice from 2 to numBuses (0-based index, so slice(1, numBuses) in JS)
        0  // Slice from 2 to numBuses
    );
    console.log("Vmag:", Vmag);
    let Bp = math.zeros(numBuses, numBuses);
    // Calculate J1
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
            Bp.set([i, j], Bbus[i][j]);
        }
    }
    // Extract submatrix J11
    let pv_pq_indices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
    let Bdc = Bp.subset(math.index(pv_pq_indices, pv_pq_indices));
    console.log("Bdc :", Bdc);
    
    let Bdc_inv = math.inv(Bdc);
    console.log("Bdc_inv:", Bdc_inv);
    
    let DX = math.multiply(Bdc_inv, DP1);
    console.log("DX:", DX);
    // Convert the Math.js matrix DX into a simple JavaScript array (vector)
    let DX_vector = DX.toArray();
    let pvpqIndices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
    // Check and update delta values for PV and PQ buses
    pvpqIndices.forEach((i, idx) => {
        let dxValue = DX_vector[idx]; // Access the value from the converted vector
        if (delta[i] !== undefined && dxValue !== undefined && !isNaN(dxValue)) {
            delta[i] = math.add(delta[i], dxValue); // Safely update delta
        } else {
            console.error(`Error updating delta: Index ${i} or ${idx} out of bounds or invalid in delta or DX_vector`);
        }
    });
    console.log("Updated delta:", delta);
    let Va = buses.map((bus, i) => math.complex({ r: Vmag[i], phi: delta[i] }));
    console.log("V:", Va);
    console.log("Pd:", Pd);
    console.log("Delta:", delta);
    let PG = math.multiply(Bbus, delta);
    console.log("PG:", PG);
    buses.forEach((bus, i) => {
        if (bus.type === 1) {  // Slack bus
            bus.Pg = PG[i]-Pd[i];
    
        } else if (bus.type === 2) {  // PV bus
            bus.Pg = PG[i]-Pd[i];
    
        } else if (bus.type === 3) {  // PQ bus
            bus.Pg = 0;
        }
    });
   
    // Calculate line flows 
    // Initialize variables for line parameters
    let suceptancia = [];
    let y = [];
    let z = [];
    let tap = [];
    let FromNode = [];
    let ToNode = [];
    console.log("Pg:", Pg);
    // Initialize defaultTap with the appropriate length
    let defaultTap = Array(lines.length).fill(1);
    console.log("defaultTap:", defaultTap);
    // Populate line parameters for each line
    lines.forEach((line, k) => {
        let b = 0;
        suceptancia.push(b);
        y.push(math.divide(1, math.complex(0, line.X)));
        z.push(math.complex(0, line.X));
        FromNode.push(line.from - 1); // Assuming zero-based indexing
        ToNode.push(line.to - 1);
    });
    console.log("tap:", tap);
    console.log("y:", y);
    console.log("z:", z);
    console.log("suceptancia:", suceptancia);
    console.log("FromNode:", FromNode);
    console.log("ToNode:", ToNode);
    // Calculate complex power flows Ss and Sr for each line
    let Ss = lines.map((line, k) => {
        // Calculate Ss[k] for power flow from i to j
        let term1 = math.divide(
            math.subtract(Va[FromNode[k]], math.multiply(defaultTap[k], Va[ToNode[k]])),
            math.multiply(math.pow(math.abs(defaultTap[k]), 2), z[k])
        );
        console.log("term1:", term1);
        let term2 = math.multiply(Va[FromNode[k]], suceptancia[k]);
        console.log("term2:", term2);
        return math.multiply(Va[FromNode[k]], math.conj(math.add(term1, term2)));
    });
    console.log("Ss:", Ss);
    let Sr = lines.map((line, k) => {
        // Calculate Sr[k] for power flow from j to i
        let term3 = math.divide(
            math.subtract(Va[ToNode[k]], Va[FromNode[k]]),
            math.multiply(defaultTap[k], z[k])
        );
        console.log("term3:", term3);
        let term4 = math.multiply(Va[ToNode[k]],     
            math.add(math.divide(math.subtract(defaultTap[k], 1), math.multiply(defaultTap[k], z[k])), suceptancia[k])          
        );
        console.log("term4:", term4);
        return math.multiply(Va[ToNode[k]], math.conj(math.add(term3, term4)));
    });
    console.log("Sr:", Sr);
    // Calculate real and reactive power flows
    let Pij = Ss.map(S => math.re(S));
    let Pji = Sr.map(S => math.re(S));
    // Calculate power losses
    let P_loss = Pij.map((P, k) => P + Pji[k]);
    // Calculate total power losses
    let TotalP_loss = math.sum(P_loss.map(P => math.abs(P)));
    // Display the results
    displayResults(Vmag, delta, Pij, Pji, P_loss, lines, TotalP_loss);
                
}   // Load Flow function closed 
// Function to display the results
function displayResults(Vmag, delta, Pij, Pji, P_loss, lines, TotalP_loss) {
    
    // Display bus data
    let resultsHtml = `<h4>Bus Data: Base Case</h4><table><tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th><th>P<sub>gen</sub> (pu)</th><th>P<sub>load</sub> (pu)</th></tr>`;
    Vmag.forEach((v, index) => {
        const bus = buses[index];
        const mag = math.abs(v).toFixed(4);
        const angle = ((delta[index]) * 180 / Math.PI).toFixed(4);
        resultsHtml += `<tr><td>${index + 1}</td><td>${mag}</td><td>${angle}</td><td>${bus.Pg.toFixed(4)}</td><td>${bus.PL.toFixed(4)}</td></tr>`;
    });
    
    resultsHtml += "</table>";
    // Display line flows
    resultsHtml += `<h4>Line Flows: Base Case</h4><table><tr><th>Line No.</th><th>From Bus</th><th>To Bus</th><th>P<sub>line(From-To)</sub> (pu)</th><th>P<sub>line(To-From)</sub> (pu)</th></th></tr>`;
    lines.forEach((line, index) => {
        resultsHtml += `<tr><td>${index + 1}</td><td>${line.from}</td><td>${line.to}</td><td>${Pij[index].toFixed(4)}</td><td>${Pji[index].toFixed(4)}</td></tr>`;
    });
    resultsHtml += "</table>";
    document.getElementById('loadFlowResults').innerHTML = resultsHtml;
}
// Contingency analysis =================>>>>>>>>>>>>>   <<<<<<<<<<<<<<<<<<<<<<<<<<=======================
// Function to save line data
// Global variables
let lines_Con = [];
let contingencyCases = [];
// console.log("genOut:", genOut);
// console.log("Bdc_genOut:", Bdc_genOut);
// Function to save line data
function saveLineData_Con() {
    lines_Con = [];
    var numLines = parseInt(document.getElementById('numLines').value);
    if (isNaN(numLines) || numLines <= 0) {
        console.error("Error: Invalid number of lines.");
        return;
    }
    for (var i = 0; i < numLines; i++) {
        let fromBus = parseInt(document.getElementById(`fromBus${i + 1}`).value);
        let toBus = parseInt(document.getElementById(`toBus${i + 1}`).value);
        let reactance = parseFloat(document.getElementById(`X${i + 1}`).value);
        let powerLimit = parseFloat(document.getElementById(`pLimit${i + 1}`).value);
        if (isNaN(fromBus) || isNaN(toBus) || isNaN(reactance) || isNaN(powerLimit)) {
            console.error(`Error: Invalid input in line ${i + 1}`);
            return;
        }
        lines_Con.push({ from: fromBus, to: toBus, X: reactance, pLim: powerLimit });
    }
    console.log("Original Line Data Saved:", lines_Con);
    
}
// Function to create contingency cases
function saveContingencyCases() {
    if (!lines_Con || lines_Con.length === 0) {
        console.error("❌ Error: No line data available to process contingencies.");
        return;
    }
    contingencyCases = []; // Reset contingency cases
    let originalLines = JSON.parse(JSON.stringify(lines_Con)); // Deep copy
    for (let lineOutage = 0; lineOutage < originalLines.length; lineOutage++) {
        let updatedLines = originalLines.filter((_, index) => index !== lineOutage);
        contingencyCases.push(updatedLines);
    }
    console.log("✅ Contingency Cases Generated:", contingencyCases);
    // runContingencyAnalysis();
    
    // ✅ Now the user must click another button to run contingency analysis
}
 
// Function to run B-Bus calculation for each contingency scenario
function runContingencyAnalysis() {
    document.getElementById('bbusContainer').innerHTML = ""; // Clear previous results
    console.log("🚀 Running Contingency Analysis...");
    // ✅ Step 1: Automatically save line data
    saveLineData_Con();
    // ✅ Step 2: Automatically generate contingency cases
    saveContingencyCases();
    // ✅ Step 3: Check if contingency cases exist
    if (!contingencyCases || contingencyCases.length === 0) {
        console.error("❌ Error: No contingency cases generated. Please check the line data.");
        return;
    }
    contingencyCases.forEach((caseLines, index) => {
        if (!caseLines || caseLines.length === 0) {
            console.error(`❌ Skipping Contingency Case ${index + 1}: Empty caseLines.`);
            return;
        }
        console.log(`✅ Running B-Bus formation for Contingency Case ${index + 1}`, caseLines);
        
        let Bbus_ConAna = calculateBbus(caseLines, index + 1); // ✅ Now correctly returning B-Bus
        if (Bbus_ConAna) {
            setTimeout(() => {  // ✅ Delay to ensure UI updates properly
                runDCLoadFlowForContingency(caseLines, Bbus_ConAna, index + 1);
            }, 500);
        }
    });
}
// Function to calculate the Bbus matrix for a specific contingency case
function calculateBbus(caseLines, caseIndex) {
    if (!caseLines || caseLines.length === 0) {
        console.error(`❌ Error: caseLines is undefined or empty for Contingency Case ${caseIndex}`);
        return;
    }
    console.log(`✅ Calculating Bbus for Contingency Case ${caseIndex}`, caseLines);
    var numBuses = parseInt(document.getElementById('numBuses').value);
    var numLines = caseLines.length; // Use modified lines for contingency
    if (isNaN(numBuses) || numBuses <= 0) {
        console.error(`❌ Error: Invalid number of buses.`);
        return;
    }
    // Initialize Bbus matrix
    let Bbus_ConAna = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));
    for (var i = 0; i < numLines; i++) {
        var from = caseLines[i].from - 1; // Convert to zero-based index
        var to = caseLines[i].to - 1;
        var X = caseLines[i].X;
        let tap = 1; // Default tap setting to 1 unless specified
        if (isNaN(from) || isNaN(to) || isNaN(X)) {
            console.error(`❌ Skipping invalid line ${i + 1} in Contingency Case ${caseIndex}`);
            continue;
        }
        var Badmittance = math.divide(1, X);
        var BshuntAdmittance = 0;
        Bbus_ConAna[from][to] = math.subtract(Bbus_ConAna[from][to], Badmittance);
        Bbus_ConAna[to][from] = Bbus_ConAna[from][to]; // Symmetric matrix
        Bbus_ConAna[from][from] = math.add(Bbus_ConAna[from][from], Badmittance, BshuntAdmittance);
        Bbus_ConAna[to][to] = math.add(Bbus_ConAna[to][to], Badmittance, BshuntAdmittance);
    }
    console.log(`✅ Bbus for Contingency Case ${caseIndex}:`, Bbus_ConAna);
    displayBbusMatrix(Bbus_ConAna, caseIndex);
    return Bbus_ConAna;  // ✅ Return the calculated B-Bus Matrix
}
function runDCLoadFlowForContingency(caseLines, Bbus_ConAna, caseIndex) {
    console.log(`🔄 Running DC Power Flow for Contingency Case ${caseIndex}`);
    saveBusData();
    var numBuses = buses.length;
    var numLines = caseLines.length;
    let type = buses.map(bus => bus.type);
    let Pg = buses.map(bus => bus.Pg);
    let Pd = buses.map(bus => bus.PL);
    let Vmag = buses.map(bus => bus.V);
    let delta = Array(numBuses).fill(0);
    let P_sch = Pg.map((pg, i) => pg - Pd[i]);
    let DP1 = math.subtract(
        P_sch.slice(1, numBuses), 
        0  
    );
    let Bp = math.zeros(numBuses, numBuses);
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
            Bp.set([i, j], Bbus_ConAna[i][j]);
        }
    }
    let pv_pq_indices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
    let Bdc = Bp.subset(math.index(pv_pq_indices, pv_pq_indices));
    let Bdc_inv = math.inv(Bdc);
    let DX = math.multiply(Bdc_inv, DP1);
    let DX_vector = DX.toArray();
    pv_pq_indices.forEach((i, idx) => {
        let dxValue = DX_vector[idx]; 
        if (delta[i] !== undefined && dxValue !== undefined && !isNaN(dxValue)) {
            delta[i] = math.add(delta[i], dxValue); 
        }
    });
    let Va = buses.map((bus, i) => math.complex({ r: Vmag[i], phi: delta[i] }));
    let PG = math.multiply(Bbus_ConAna, delta);
    buses.forEach((bus, i) => {
        if (bus.type === 1 || bus.type === 2) {
            bus.Pg = PG[i] - Pd[i];
        } else if (bus.type === 3) {
            bus.Pg = 0;
        }
    });
    let Pij = caseLines.map((line, k) => 
        math.re(
            math.multiply(Va[line.from - 1], 
            math.conj(math.divide(math.subtract(Va[line.from - 1], Va[line.to - 1]), math.complex(0, line.X)))))
    );
    let Pji = caseLines.map((line, k) => 
        math.re(
            math.multiply(Va[line.to - 1], 
            math.conj(math.divide(math.subtract(Va[line.to - 1], Va[line.from - 1]), math.complex(0, line.X)))))
    );
    let P_loss = Pij.map((P, k) => P + Pji[k]);
    let TotalP_loss = math.sum(P_loss.map(P => math.abs(P)));
    displayResultsForContingency(caseIndex, Vmag, delta, Pij, Pji, P_loss, caseLines, TotalP_loss);
}
// Function to display the Bbus matrix for each contingency case
function displayBbusMatrix(Bbus_ConAna, caseIndex) {
    let tableHtmlConAna = `<h2>Bbus Matrix for Contingency Case ${caseIndex}</h2><table><tr><th></th>`;
    for (var i = 0; i < Bbus_ConAna.length; i++) {
        tableHtmlConAna += `<th>${i + 1}</th>`;
    }
    tableHtmlConAna += '</tr>';
    for (var i = 0; i < Bbus_ConAna.length; i++) {
        tableHtmlConAna += `<tr><th>${i + 1}</th>`;
        for (var j = 0; j < Bbus_ConAna[i].length; j++) {
            tableHtmlConAna += `<td>${math.re(Bbus_ConAna[i][j]).toFixed(4)}</td>`;
        }
        tableHtmlConAna += '</tr>';
    }
    tableHtmlConAna += '</table>';
    // document.getElementById('bbusContainer').innerHTML += tableHtmlConAna;
}
function displayResultsForContingency(caseIndex, Vmag, delta, Pij, Pji, P_loss, lines, TotalP_loss) {
    // let resultsHtml = `<h3>Results for Contingency Case: Line Outage ${caseIndex}</h3>`;
    // **Bus Data Table**
    // resultsHtml += `<h4>Bus Data</h4><table border="1"><tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th></tr>`;
    // Vmag.forEach((v, index) => {
    //     resultsHtml += `<tr><td>${index + 1}</td><td>${v.toFixed(4)}</td><td>${(delta[index] * 180 / Math.PI).toFixed(4)}</td></tr>`;
    // });
    // resultsHtml += "</table>";
    // **Line Flow Table**
    let overloadedCount = 0; // Counter for overloaded lines
    let resultsHtml = `<h4><u>Results for Line Outage Contingency Analysis: Line ${caseIndex} Outage</u></h4><table border="1"><tr><th>From</th><th>To</th><th>Pij (pu)</th><th>Pji (pu)</th><th>Limit (pu)</th></tr>`;
    lines.forEach((line, index) => {
        let Pij_value = Pij[index];
        let Pji_value = Pji[index];
        // ✅ Fetch `powerLimit` from `lines_Con`
        let powerLimit = lines_Con.find(l => l.from === line.from && l.to === line.to)?.pLim || 0;
        // **Check if the line is overloaded**
        let isOverloaded = Math.abs(Pij_value) > powerLimit;
        if (isOverloaded) overloadedCount++;
        // **Apply Red Color for Overloaded Lines**
        let rowColor = isOverloaded ? ' style="background-color: red; color: white;"' : '';
        resultsHtml += `<tr${rowColor}>
                            <td>${line.from}</td>
                            <td>${line.to}</td>
                            <td>${Pij_value.toFixed(4)}</td>
                            <td>${Pji_value.toFixed(4)}</td>
                            <td>${powerLimit.toFixed(4)}</td>
                        </tr>`;
    });
    resultsHtml += "</table>";
    // **Display Total Overloaded Lines**
    resultsHtml += `<h4>Total Overloaded Lines: <span style="color: red;">${overloadedCount}</span></h4>`;
    // // **Power Loss Information**
    // resultsHtml += `<h4>Total Power Loss: ${TotalP_loss.toFixed(4)} pu</h4>`;
    // Append results to the existing contingency section
    let container = document.createElement("div");
    container.innerHTML = resultsHtml;
    document.getElementById('bbusContainer').appendChild(container);
}
//  =================>>>>>>>>>>>>> Contingency analysis  <<<<<<<<<<<<<<<<<<<<<<<<<<=======================
// Generator Outage________________________________________________________________________________________
// Function to save line data
// Global variables
// =================>>>>>>>>>>>>> Load Flow for Generator Outage Contingency <<<<<<<<<<<<<<<<<<<<<<<<<<=======================
// Function to run the power flow analysis Fast - DC (Linear Power Flow Method)
function runLoadFlow1(busesCopy) {
    saveLineData();  // Keep original line data intact
    if (!busesCopy.length || !lines.length) {
        alert('⚠️ Please generate and fill in the bus and line tables first.');
        return null;
    }
    let numBuses = busesCopy.length;
    let Pg = busesCopy.map(bus => bus.Pg);
    let Pd = busesCopy.map(bus => bus.PL);
    let Vmag = busesCopy.map(bus => bus.V);
    let delta = Array(numBuses).fill(0);
    let P_sch = Pg.map((pg, i) => pg - Pd[i]);
    let DP1 = math.subtract(P_sch.slice(1, numBuses), 0);
    console.log("✅ Running Load Flow...");
    
    let Bp = math.zeros(numBuses, numBuses);
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
            Bp.set([i, j], Bbus[i][j]);
        }
    }
    let pv_pq_indices = busesCopy.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
    let Bdc = Bp.subset(math.index(pv_pq_indices, pv_pq_indices));
    try {
        let Bdc_inv = math.inv(Bdc);
        let DX = math.multiply(Bdc_inv, DP1);
        let DX_vector = DX.toArray();
        pv_pq_indices.forEach((i, idx) => {
            if (!isNaN(DX_vector[idx])) {
                delta[i] = math.add(delta[i], DX_vector[idx]);
            }
        });
    } catch (error) {
        console.error("❌ Error: Singular Matrix Detected. Possible Islanding!");
        return null;
    }
    let Va = busesCopy.map((bus, i) => math.complex({ r: Vmag[i], phi: delta[i] }));
    let PG = math.multiply(Bbus, delta);
    busesCopy.forEach((bus, i) => {
        if (bus.type === 1 || bus.type === 2) {
            bus.Pg = PG[i] - Pd[i];
        } else {
            bus.Pg = 0;
        }
    });
    console.log("Pg:", Pg);
    let Pij = lines.map((line, k) => 
        math.re(
            math.multiply(Va[line.from - 1], 
            math.conj(math.divide(math.subtract(Va[line.from - 1], Va[line.to - 1]), math.complex(0, line.X))))
        )
    );
    let Pji = lines.map((line, k) => 
        math.re(
            math.multiply(Va[line.to - 1], 
            math.conj(math.divide(math.subtract(Va[line.to - 1], Va[line.from - 1]), math.complex(0, line.X))))
        )
    );
    let P_loss = Pij.map((P, k) => P + Pji[k]);
    let TotalP_loss = math.sum(P_loss.map(P => math.abs(P)));
    console.log("✅ Load Flow Calculation Completed.");
    
    return {
        Vmag,
        delta,
        Pg,
        Pij,
        Pji,
        lines,
    };
}
function identifyGeneratorBuses() {
    return buses.map((bus, i) => bus.type === 1 || bus.type === 2 ? i : -1).filter(i => i !== -1);
}
function runGeneratorOutageContingency() {
    let generatorBuses = identifyGeneratorBuses();
    let contingencyResults = [];
    generatorBuses.forEach(outageBus => {
        console.log(`🔴 Simulating Generator Outage at Bus ${outageBus + 1}`);
        // 🛠 Make a deep copy of the `buses` array to avoid modifying global values
        let busesCopy = JSON.parse(JSON.stringify(buses));
        // Store original Pg before modifying
        let originalPg = busesCopy[outageBus].Pg;
        busesCopy[outageBus].Pg = 0; // Simulate generator outage
        let remainingGenerators = generatorBuses.filter(busIndex => busIndex !== outageBus);
        let lostPower = originalPg;
        if (remainingGenerators.length > 0) {
            let totalPg = remainingGenerators.reduce((sum, index) => sum + busesCopy[index].Pg, 0);
            if (totalPg > 0) {
                remainingGenerators.forEach(busIndex => {
                    let proportion = busesCopy[busIndex].Pg / totalPg;
                    busesCopy[busIndex].Pg += proportion * lostPower;  // Redistribute power properly
                });
            } else {
                console.warn("⚠️ No generators available to balance the load!");
                return;  // Skip this case
            }
        } else {
            console.warn("⚠️ No remaining generators to compensate for the outage!");
            return;  // Skip this case
        }
        // ✅ Step 1: Automatically save line data
        saveLineData_Con();
        
        // ✅ Run load flow analysis with the modified buses data
        let contingencyCase = runLoadFlow1(busesCopy);
        if (!contingencyCase) {
            console.warn(`⚠️ Load flow failed for outage at Bus ${outageBus + 1}`);
            return;
        }
        // ✅ Store results for this contingency case
        contingencyResults.push({
            outageBus: outageBus + 1,
            results: contingencyCase
        });
        console.log(`✅ Completed Generator Outage at Bus ${outageBus + 1}`);
    });
    console.log("✅ Generator Outage Contingency Analysis Completed:", contingencyResults);
    
    // ✅ Display results for each contingency case
    displayResultsForGeneratorOutageContingency(contingencyResults);
    return contingencyResults;
}
function displayResultsForGeneratorOutageContingency(contingencyResults) {
    let resultsHtml = "<h3>Generator Outage Contingency Analysis Results</h3>";
    contingencyResults.forEach((contingency, index) => {
        let { outageBus, results } = contingency;
        let { Vmag, delta, Pg, Pij, Pji, lines} = results;
        console.log("Pg:", Pg);
        resultsHtml += `<h4><u>Results for Generator Outage Contingency Analysis: Generator Outage at Bus ${outageBus}</u></h4>`;
        // **Bus Data Table**
        resultsHtml += `<h4>Bus Voltage Angle and Generator Output</h4>
        <table border="1">
            <tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th><th>P<sub>gen</sub> (pu)</th></tr>`;
        Vmag.forEach((v, busIndex) => {
            let voltage = v.toFixed(4);
            let angle = ((delta[busIndex]) * 180 / Math.PI).toFixed(4);
            let Pgen = Pg[busIndex].toFixed(4); // Include remaining generator output
            console.log("Pgen:", Pgen);
            
            // Highlight Low Voltage Issues (e.g., Below 0.9 pu)
            let rowColor = v < 0.9 ? ' style="background-color: yellow;"' : '';
            resultsHtml += `<tr${rowColor}>
                                <td>${busIndex + 1}</td>
                                <td>${voltage}</td>
                                <td>${angle}</td>
                                <td>${Pgen}</td>
                            </tr>`;
        });
        resultsHtml += "</table>";
        // **Line Flow Data**
        let overloadedCount = 0;
        resultsHtml += `<h4>Line Flows</h4>
        <table border="1">
            <tr><th>From</th><th>To</th><th>Pij (pu)</th><th>Pji (pu)</th><th>Limit (pu)</th></tr>`;
        lines.forEach((line, lineIndex) => {
            let Pij_value = Pij[lineIndex];
            let Pji_value = Pji[lineIndex];
            // ✅ Fetch power limit for the line
            let powerLimit = lines_Con?.find(l => l.from === line.from && l.to === line.to)?.pLim || 0;
            // **Check for Overloaded Lines**
            let isOverloaded = Math.abs(Pij_value) > powerLimit;
            if (isOverloaded) overloadedCount++;
            let rowColor = isOverloaded ? ' style="background-color: red; color: white;"' : '';
            resultsHtml += `<tr${rowColor}>
                                <td>${line.from}</td>
                                <td>${line.to}</td>
                                <td>${Pij_value.toFixed(4)}</td>
                                <td>${Pji_value.toFixed(4)}</td>
                                <td>${powerLimit.toFixed(4)}</td>
                            </tr>`;
        });
        resultsHtml += `</table>`;
        // **Overloaded Line Count**
        resultsHtml += `<h4>Total Overloaded Lines: <span style="color: red;">${overloadedCount}</span></h4>`;
    });
    // Append results to the container
    document.getElementById('bbusContainer').innerHTML = resultsHtml;
}

