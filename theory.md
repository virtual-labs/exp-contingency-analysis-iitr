
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h3>Introduction</h3>

Contingency analysis is an essential study in power system planning and operations to identify the potential failures in the system and assess their impact on system stability, reliability, and security. It ensures the power system performance under the transmission line and generator outage conditions. Line outages consider studying the system behavior when a transmission line is out of service, while generator outages consider studying how the system responds when a generator is out of service. 

<b><u>Line Outage Contingency Analysis  </u>:</b> 

When a transmission line is lost, power is redistributed among the remaining lines. This may cause power flow shifts, leading to possible overloading of the remaining lines. For performing the line outage contingency analysis, DC power flow method is utilized for simplicity.  
The following steps are performed for the line outage contingency analysis - 

<b>Step 1 :</b>  Perform the DC power flow without the consideration of line outage in the transmission network.

<b>Step 2 :</b>  Consider the outage of a transmission line by disconnecting it and run the DC power flow with the remaining network.

<b>Step 3 :</b>  Observe the change in power flow of the remaining lines and check for any overloaded lines. Mark the overloaded transmission lines.

<b>Step 4 :</b>  Bring this line back online and repeat steps 2 and 3 for the remaining transmission lines.


<b><u>Generator Outage Contingency Analysis  </u>:</b> 

When a generator is lost, power generation of lost generator is redistributed among the remaining generator. For the redistributing of the lost power generation among the remaining generators, the concept of proportional load sharing is utilized. Based on this principle, the power generation of the remaining generator can be calculated as follows - 
 
<center><img src="images/Formula.png" style=" height: 80px; width: 430px;" align="center"></center><br>


The redispatched power generation affects the power flow of the transmission lines. This may cause power flow shifts, leading to possible overloading of lines. For performing the generator outage contingency analysis, DC power flow method is utilized for simplicity.  

The following steps are performed for the generator outage contingency analysis - 

<b>Step 1 :</b>  Perform the DC power flow without the consideration of generator outage in the transmission network.

<b>Step 2 :</b> Consider the outage of a generator by disconnecting it and the power generation of this generator is redistributed among the remaining generators using (1). With this new power of the remaining generator, perform the DC power flow.

<b>Step 3 :</b> Observe the change in power flow of the lines and check for any overloaded transmission lines. Mark the overloaded transmission lines.

<b>Step 4 :</b>  Bring this generator back online and repeat steps 2 and 3 for the remaining generators.




