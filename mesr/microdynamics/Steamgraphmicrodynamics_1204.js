var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"communautés hospitalières": {
men: [0.58756, 0.97341, 0.97259, 0.97259, 0.97259, 0.97126, 0.97174, 0.9715, 0.97084, 0.97477, 0.97477, 0.97477, 0.97061, 0.97167, 0.96591, 0.96591, 0.969, 0.969, 0.969, 0.9714, 0.97408, 0.97902, 0.98799, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9728, 0.3424, 0.34174, 0.38296, 0.38237, 0.38237, 0.38237, 0.38206, 0.38206, 0.38245, 0.38275, 0.38193, 0.38193, 0.38193, 0.33506, 0.966, 0.96545, 0.96877, 0.96862, 0.96862, 0.58117, 0.58182, 0.5808, 0.58121, 0.58031, 0.58158, 0.58158, 0.58158, 0.58097, 0.27665, 0.27689, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonds structurels européens": {
men: [0.24558, 0.24532, 0.23082, 0.23082, 0.23082, 0.23728, 0.24755, 0.25141, 0.26088, 0.25934, 0.25934, 0.25934, 0.25973, 0.25797, 0.28388, 0.28388, 0.30059, 0.30059, 0.30059, 0.30285, 0.29583, 0.26291, 0.21938, 0, 0, 0, 0, 0, 0.17574, 0.15974, 0.15974, 0.15974, 0.15974, 0.2019, 0.21394, 0.21519, 0.2309, 0.23803, 0.23803, 0.23803, 0.24034, 0.22044, 0.22136, 0.23404, 0.23477, 0.23477, 0.23477, 0.22666, 0.20204, 0.22154, 0.19325, 0.20332, 0.20332, 0.20332, 0.19747, 0.21411, 0.21882, 0.20999, 0.19108, 0.19108, 0.19108, 0.21203, 0.20591, 0.18773, 0.19514, 0.17528, 0.17528, 0.17528, 0.16849, 0.15701, 0.16525, 0.1591, 0.1621, 0.1621, 0.1621, 0.14124, 0.18112, 0.18093, 0.17168, 0.18698, 0.18698, 0.18698, 0.20437, 0.21437, 0.22489, 0.23517, 0.24832, 0.24832, 0.24832, 0.23769, 0.23278, 0.2279, 0.24513, 0.23162, 0.23162, 0.23162, 0.23184, 0.23081, 0.21092, 0.19606, 0.2038, 0.2038, 0.2038, 0.23429, 0.2265, 0.21887, 0.2219, 0.2219, 0.2219, 0.2219], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de loi de réforme": {
men: [0.22722, 0.22467, 0.218, 0.22315, 0.22588, 0.2361, 0.24755, 0.25141, 0.26088, 0.25934, 0.25934, 0.25934, 0.25973, 0.25797, 0.28388, 0.28388, 0.30059, 0.30059, 0.30059, 0.30285, 0.29583, 0.26291, 0.21938, 0, 0, 0, 0, 0, 0.19262, 0.16896, 0.16896, 0.16896, 0.16896, 0.19851, 0.21082, 0.20844, 0.22447, 0.22788, 0.22684, 0.22438, 0.22746, 0.20956, 0.20929, 0.19149, 0.19818, 0.19818, 0.19625, 0.18999, 0.1693, 0.17941, 0.15645, 0.16349, 0.16416, 0.16581, 0.1529, 0.16919, 0.16947, 0.18886, 0.17047, 0.17047, 0.17267, 0.19163, 0.18662, 0.1785, 0.18294, 0.1631, 0.16079, 0.14546, 0.14478, 0.12996, 0.13871, 0.13115, 0.13027, 0.12931, 0.12836, 0.11119, 0.14089, 0.13817, 0.1316, 0.14442, 0.1413, 0.15084, 0.16103, 0.17092, 0.16895, 0.16574, 0.16476, 0.16121, 0.16135, 0.15577, 0.14468, 0.13958, 0.15027, 0.13782, 0.14283, 0.14482, 0.14993, 0.15008, 0.14013, 0.15081, 0.16732, 0.17419, 0.17568, 0.20312, 0.21054, 0.20032, 0.20139, 0.20139, 0.20139, 0.20139], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ehpad": {
men: [0.18232, 0.18256, 0.14806, 0.14806, 0.18048, 0.18023, 0.18545, 0.26123, 0.26105, 0.26111, 0.26111, 0.26111, 0.26137, 0.30212, 0.3022, 0.3022, 0.36002, 0.36002, 0.36002, 0.36092, 0.36191, 0, 0, 0, 0, 0, 0, 0, 0.13537, 0.13485, 0.12279, 0.12279, 0.12279, 0.12193, 0.12169, 0.10487, 0.10466, 0.1045, 0.1045, 0.1045, 0.10442, 0.08721, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052787, 0.052824, 0.054294, 0.054413, 0.054413, 0.045648, 0.0456, 0.0456, 0.064773, 0.06175, 0.061886, 0.061886, 0.082447, 0.098779, 0.095674, 0.095545, 0.15848, 0.10628, 0.10628, 0.18628, 0.17347, 0.25206, 0.26088, 0.2862, 0.26319, 0.26319, 0.26319, 0.22744, 0.1719, 0.14861, 0.19969, 0.31415, 0.31415, 0.31415, 0.33958, 0.21942, 0.075448, 0.08387, 0.091726, 0.091726, 0.091726, 0.20337, 0.23411, 0.25589, 0.18817, 0.21698, 0.21698, 0.21698, 0.2553, 0.25322, 0.26328, 0.26355, 0.2157, 0.2157, 0.2157], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hpst": {
men: [0.24978, 0.23942, 0.28451, 0.28451, 0.28451, 0.32224, 0.35143, 0.30544, 0.26334, 0.29519, 0.29519, 0.29519, 0.26841, 0.26871, 0.18948, 0.20161, 0.18132, 0.18132, 0.18132, 0.18177, 0.14651, 0.14521, 0.12256, 0, 0, 0, 0, 0, 0.051306, 0.051112, 0.042926, 0.042926, 0.042926, 0.038276, 0.085511, 0.085346, 0.1317, 0.13149, 0.11872, 0.11872, 0.18032, 0.21788, 0.18226, 0.1824, 0.29338, 0.29338, 0.29338, 0.33821, 0.33916, 0.1873, 0.1501, 0.15008, 0.1662, 0.15946, 0.13669, 0.156, 0.12984, 0.12964, 0.067602, 0.060466, 0.054692, 0.19121, 0.18031, 0.20989, 0.19719, 0.18126, 0.18126, 0.18593, 0.18561, 0.15316, 0.19326, 0.19355, 0.19352, 0.20516, 0.20957, 0.049358, 0.054557, 0.055937, 0.061392, 0.059138, 0.057666, 0.057666, 0.068429, 0.090314, 0.027582, 0.027564, 0.025657, 0.025657, 0.026874, 0.070655, 0.058744, 0.061815, 0.050256, 0.054786, 0.0555, 0.0555, 0.044593, 0.070812, 0.093604, 0.093555, 0.097229, 0.081804, 0.075792, 0.029907, 0.084563, 0.039583, 0.043314, 0.043314, 0.043314, 0.041927], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sig": {
men: [0.19017, 0.16465, 0.163, 0.16768, 0.17135, 0.18678, 0.19095, 0.19431, 0.20306, 0.20571, 0.20305, 0.20305, 0.1947, 0.19319, 0.20587, 0.25553, 0.26578, 0.2722, 0.2722, 0.13319, 0.11016, 0.042547, 0.017643, 0, 0, 0, 0, 0, 0.025708, 0.025611, 0.025611, 0.025611, 0.025611, 0.037381, 0.03794, 0.10998, 0.14263, 0.14241, 0.17359, 0.16413, 0.164, 0.15403, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15064, 0.15075, 0.15899, 0.15004, 0.15004, 0.15004, 0.19657, 0.16386, 0.17445, 0.15207, 0.14448, 0.14448, 0.13342, 0.13398, 0.12238, 0.13114, 0.12314, 0.12542, 0.12542, 0.12542, 0.091281, 0.10458, 0.10021, 0.10251, 0.11925, 0.11925, 0.12626, 0.13387, 0.14147, 0.14941, 0.15739, 0.16032, 0.16032, 0.16032, 0.18954, 0.2179, 0.2279, 0.24937, 0.22467, 0.22467, 0.22467, 0.22495, 0.22372, 0.20336, 0.18983, 0.19808, 0.19808, 0.19518, 0.22417, 0.21692, 0.20664, 0.20459, 0.21399, 0.21399, 0.21399], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agence régionale de santé": {
men: [0.049907, 0.045694, 0.068209, 0.062267, 0.061084, 0.08365, 0.093441, 0.09485, 0.089256, 0.1116, 0.1116, 0.1116, 0.102, 0.11976, 0.12968, 0.12968, 0.097977, 0.12012, 0.13169, 0.091876, 0.059046, 0.043184, 0.060033, 0, 0, 0, 0, 0, 0.039079, 0.037271, 0.031031, 0.029668, 0.027382, 0.040553, 0.049702, 0.048309, 0.059399, 0.090736, 0.10242, 0.09475, 0.14628, 0.14895, 0.11657, 0.12196, 0.16625, 0.17823, 0.18968, 0.16594, 0.14894, 0.18087, 0.17844, 0.15987, 0.12997, 0.14648, 0.09901, 0.13117, 0.12179, 0.1216, 0.096157, 0.077656, 0.075819, 0.078339, 0.073838, 0.06818, 0.042054, 0.042773, 0.05217, 0.053576, 0.053224, 0.045071, 0.068121, 0.059511, 0.060539, 0.069942, 0.074607, 0.054512, 0.056198, 0.055135, 0.05282, 0.052732, 0.052732, 0.052732, 0.066684, 0.048311, 0.026898, 0.045558, 0.039717, 0.039465, 0.040219, 0.065822, 0.074555, 0.062166, 0.065132, 0.062986, 0.062986, 0.062986, 0.052928, 0.074337, 0.082976, 0.050065, 0.049063, 0.050969, 0.050969, 0.027315, 0.011566, 0.0096306, 0.010363, 0.0098496, 0.0084687, 0.0082582], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blocs chirurgicaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062503, 0.062503, 0.062503, 0.062565, 0.080653, 0.96591, 0.96591, 0.969, 0.969, 0.969, 0.9714, 0.97408, 0.97902, 0.98799, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38942, 0.38915, 0.38888, 0.96311, 0.9636, 0.9636, 0.9636, 0.96381, 0.96409, 0.96486, 0.96434, 0.96588, 0.96588, 0.96588, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Fédération hospitalière": {
men: [0.060205, 0.068895, 0.05747, 0.05747, 0.051346, 0.051275, 0.051301, 0.051288, 0.051253, 0.051265, 0.051265, 0.051265, 0.051316, 0.063564, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4388, 0.43795, 0.43711, 0.9638, 0.9638, 0.20839, 0.20822, 0.20822, 0.20843, 0.20859, 0.20815, 0.20815, 0.12793, 0.098832, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51719, 0.51683, 0.51648, 0.51614, 0.5164, 0.5164, 0.5164, 0.51651, 0.51666, 0.51708, 0.969, 0.97055, 0.97055, 0.97055, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"indemnités journalières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98469, 0.98097, 0.98097, 0.98097, 0.98097, 0.64416, 0.64287, 0.64163, 0.6404, 0.22864, 0.19312, 0.19312, 0.19296, 0.1508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22349, 0.22341, 0.45919, 0.45919, 0.45919, 0.4584, 0.45916, 0.45854, 0.45924, 0.45916, 0.27516, 0.27516, 0.13107, 0.10619, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"établissements médico-sociaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18084, 0.18015, 0.18015, 0.18015, 0.18015, 0.17889, 0.62441, 0.97243, 0.97528, 0.97377, 0.54189, 0.54189, 0.54146, 0.54146, 0.46785, 0.46822, 0.46721, 0.46721, 0.46721, 0.46795, 0.31395, 0.31377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dispositions réglementaires": {
men: [0.97372, 0.37978, 0.37947, 0.37947, 0.37947, 0.37894, 0.37913, 0.37904, 0.37878, 0.37887, 0.37887, 0.37887, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24842, 0.24842, 0.22793, 0.26668, 0.27901, 0.27901, 0.26148, 0.28075, 0.31807, 0.26273, 0.27308, 0.27303, 0.27303, 0.25701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"opérations de dépollution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50892, 0.50814, 0.50814, 0.50814, 0.50773, 0.50773, 0.50824, 0.50864, 0.50755, 0.50755, 0.50755, 0.96827, 0.9694, 0.96885, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistantes maternelles": {
men: [0.13654, 0.13672, 0.22818, 0.22818, 0.35398, 0.29108, 0.29123, 0.29116, 0.29096, 0.26136, 0.26136, 0.26136, 0.17275, 0.17293, 0.24414, 0.24414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1137, 0.1137, 0.10473, 0.1063, 0.10623, 0.10616, 0.1263, 0.13449, 0.15918, 0.15479, 0.24128, 0.24135, 0.24154, 0.24141, 0.17294, 0.17294, 0.21054, 0.26899, 0.2691, 0.26977, 0.17895, 0.17865, 0.17865, 0.074425, 0.051008, 0.038001, 0.037177, 0.037216, 0.037216, 0.037216, 0.037157], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux financiers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98195, 0.98195, 0.98195, 0.98195, 0.97507, 0.97312, 0.39003, 0.12312, 0.087669, 0.087669, 0.087669, 0.087598, 0.087598, 0.072162, 0, 0.063844, 0.059684, 0.059684, 0.059777, 0.059847, 0.065873, 0.068104, 0.080308, 0.080308, 0.080308, 0.080397, 0.080257, 0.09997, 0.10377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25365, 0.25269, 0.97467, 0.97467, 0.97467, 0.96784, 0.96591, 0.96404, 0.23601, 0.23564, 0.23564, 0.23564, 0.23545, 0.23545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"consultations médicales": {
men: [0.96411, 0.96537, 0.96456, 0.96456, 0.96456, 0.96323, 0.96371, 0.96348, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Développement des territoires": {
men: [0, 0, 0.047501, 0.047501, 0.047501, 0.050507, 0.15105, 0.16517, 0.24013, 0.26382, 0.26382, 0.27854, 0.29883, 0.31664, 0.30673, 0.33404, 0.29168, 0.29168, 0.29168, 0.29241, 0.20309, 0.20412, 0.20599, 0, 0, 0, 0, 0, 0.12737, 0.11489, 0.09635, 0.09635, 0.09635, 0.064926, 0.064796, 0.06027, 0.060155, 0.060062, 0.060062, 0.060062, 0.060013, 0.060013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092884, 0.098721, 0.16081, 0.16106, 0.16103, 0.16103, 0.16103, 0.16124, 0.16088, 0.12407, 0.12412, 0.12488, 0.11111, 0.11111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0.28718, 0.28699, 0.28705, 0.28705, 0.28705, 0.28734, 0.36168, 0.36178, 0.36178, 0.2471, 0.2471, 0.43015, 0.43121, 0.20482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18571, 0.18546, 0.18574, 0.18571, 0.18571, 0.18571, 0.18596, 0.18553, 0.2036, 0.23338, 0.23299, 0.23299, 0.23299, 0.23309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"soins palliatifs": {
men: [0, 0, 0, 0, 0, 0, 0, 0.23632, 0.23616, 0.35803, 0.35803, 0.35803, 0.35839, 0.35878, 0.35887, 0.35887, 0.36002, 0.36002, 0.36002, 0.36092, 0.36191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14789, 0.1476, 0.14737, 0.14737, 0.14737, 0.14725, 0.44751, 0.1474, 0.14752, 0.1472, 0.1472, 0.1203, 0.1408, 0.14097, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones blanches": {
men: [0.097016, 0.097142, 0.097061, 0.10266, 0.10266, 0.15699, 0.20162, 0.20157, 0.20143, 0.20148, 0.20148, 0.20148, 0.16965, 0.1855, 0.21483, 0.21483, 0.21552, 0.21552, 0.21552, 0.1248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19152, 0.17549, 0.17516, 0.17489, 0.17489, 0.17489, 0.15966, 0.15966, 0.17365, 0.21405, 0.19938, 0.17164, 0.17164, 0.1568, 0.052969, 0.059222, 0.059304, 0.053674, 0.053674, 0.053674, 0.061337, 0.06123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"adulte handicapé": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96581, 0.96544, 0.96757, 0.44135, 0.44135, 0.4406, 0.44132, 0.29284, 0.29329, 0.29324, 0.29324, 0.20548, 0.088388, 0.088188, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"viticole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11757, 0.1175, 0.11755, 0.11755, 0.11755, 0.4154, 0.41552, 0.41585, 0.96997, 0.97152, 0.62969, 0.62969, 0.62962, 0.37399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgences médicales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31924, 0.31871, 0.31871, 0.31871, 0.51348, 0.51354, 0.51323, 0.51377, 0.51377, 0.51377, 0.51377], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement rural": {
men: [0.077885, 0.082726, 0.10302, 0.10302, 0.10302, 0.10288, 0.095995, 0.15183, 0.1593, 0.072804, 0.088598, 0.13442, 0.13455, 0.1347, 0.13474, 0.096085, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1992, 0.19948, 0.19177, 0.19177, 0.19636, 0.18835, 0.2101, 0.25842, 0.25802, 0.2203, 0.23934, 0.231, 0.23075, 0.22477, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"personnes handicapées": {
men: [0.030986, 0.012726, 0.011621, 0.010961, 0.010961, 0.014782, 0.01482, 0.016723, 0.013539, 0.032843, 0.033387, 0.03402, 0.034054, 0.034091, 0.034938, 0.034141, 0.021213, 0.023149, 0.023149, 0.023207, 0.023628, 0.025563, 0.029656, 0, 0, 0, 0, 0, 0.053144, 0.081794, 0.081794, 0.081794, 0.081794, 0.066328, 0.075207, 0.095879, 0.13205, 0.12895, 0.12241, 0.11413, 0.10899, 0.10503, 0.068629, 0.048085, 0.039371, 0.033829, 0.029655, 0.030274, 0.025856, 0.012245, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.012168, 0.011293, 0.010022, 0.0098949, 0.010703, 0.010648, 0.016956, 0.014979, 0.015132, 0.016894, 0.016894, 0.019538, 0.030236, 0.029781, 0.016517, 0.019434, 0.024491, 0.025207, 0.023941, 0.024696, 0.022294, 0.059033, 0.10361, 0.10624, 0.10624, 0.09481, 0.15477, 0.17595, 0.1761, 0.14889, 0.12328, 0.11328, 0.12418, 0.10928, 0.14077, 0.097776, 0.066439, 0.056582, 0.055739, 0.059586, 0.025233, 0.022093, 0.02208, 0.024634, 0.029181, 0.029779, 0.028236], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement urbain": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25163, 0.25166, 0.25177, 0.28515, 0.28515, 0.28515, 0.27096, 0.25816, 0.25799, 0.25781, 0.22453, 0.22453, 0.20145, 0.17363, 0, 0, 0, 0, 0, 0, 0, 0.066754, 0.066922, 0.061726, 0.06869, 0.06869, 0.076443, 0.092684, 0.096045, 0.10622, 0.10633, 0.10633, 0.10633, 0.10633], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"précarité énergétique": {
men: [0.22357, 0.22386, 0.22368, 0.22368, 0.22368, 0.22337, 0.20892, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12183, 0.085116, 0.057794, 0.051854, 0.051773, 0.051773, 0.051773, 0.050923, 0.053585, 0.070631, 0.070687, 0.070535, 0.070535, 0.070535, 0.036849, 0.045824, 0.068902, 0.083879, 0.083866, 0.083866, 0.083866, 0.091544, 0.087828, 0, 0, 0, 0, 0, 0.11321, 0.12352, 0.065314, 0.062652, 0.057484, 0.057484, 0.057484, 0.054182, 0.056445, 0.074685, 0.063921, 0.06391, 0.062114, 0.062114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055236, 0.037775, 0.033865, 0.033865, 0.031071, 0.031068, 0.03108, 0.030228, 0.030212, 0.030162, 0.030162, 0.030162, 0.030126, 0.040957, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de la ville": {
men: [0, 0, 0, 0, 0, 0, 0.061013, 0.054349, 0.057122, 0.065535, 0.060642, 0.060642, 0.060702, 0.055538, 0.055351, 0.057658, 0.067148, 0.073039, 0.091396, 0.09891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027447, 0.028878, 0.081061, 0.077144, 0.079491, 0.088211, 0.090049, 0.097717, 0.087769, 0.085466, 0.083677, 0.097132, 0.078257, 0.069633, 0.051613, 0.055889, 0, 0, 0, 0, 0, 0, 0, 0.015853, 0.014862, 0.014862, 0.017879, 0.061801, 0.080575, 0.08041, 0.10277, 0.10671, 0.11584, 0.12595, 0.12319, 0.125, 0.13529, 0.15026, 0.13743, 0.13743, 0.13743, 0.11222, 0.09207, 0.093855, 0, 0, 0, 0, 0, 0.062306, 0.082016, 0.082955, 0.068461, 0.062254, 0.059118], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 