var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"calotte glaciaire": {
men: [0.46462, 0.51698, 0.51648, 0.37211, 0.3159, 0.16621, 0.16658, 0.11942, 0.089976, 0.089965, 0.21347, 0.51156, 0.56782, 0.67669, 0.7693, 0.78135, 0.78175, 0.85471, 0.90885, 0.94348, 0.94361, 0.94417, 0.94438, 0.94445, 0.98898, 0.98604, 0.984, 0.97384, 0.97224, 0.964, 0.96345, 0.96428, 0.96423, 0.96267, 0.9605, 0.96127, 0.66247, 0.66236, 0.66252, 0.66243, 0.66233, 0.35889, 0.50532, 0.50531, 0.50559, 0.50559, 0.50562, 0.50602, 0.50716, 0.5085, 0.53105, 0.54361, 0.54361, 0.54359, 0.56153, 0.97881, 0.96599, 0.96841, 0.96841, 0.78916, 0.66624, 0.66857, 0.66702, 0.6665, 0.79382, 0.44127, 0.44118, 0.42106, 0.29589, 0.29581, 0.29581, 0.29564, 0.29564, 0.3066, 0.31831, 0.31843, 0.31873, 0.31886, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"giec": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.015932, 0.015573, 0.04918, 0.085134, 0.13869, 0.13967, 0.16758, 0.17467, 0.16064, 0.16541, 0.2676, 0.23578, 0.23214, 0.24822, 0.28085, 0.28273, 0.23597, 0.20042, 0.095806, 0.081165, 0.22801, 0.22826, 0.2308, 0.22867, 0.21331, 0.20824, 0.20601, 0.2086, 0.2087, 0.20264, 0.20699, 0.21393, 0.27179, 0.30704, 0.15311, 0.10363, 0.10278, 0.11426, 0.083419, 0.1025, 0.14642, 0.19296, 0.21713, 0.20544, 0.14549, 0.14129, 0.14796, 0.14459, 0.1343, 0.13364, 0.13393, 0.1519, 0.14935, 0.15748, 0.1477, 0.10282, 0.059268, 0.064773, 0.099017, 0.097436, 0.080924, 0.081402, 0.10273, 0.093872, 0.10363, 0.026016, 0.10302, 0.072314, 0.061328, 0.046905, 0.046849, 0.040713, 0.10339, 0.10589, 0.10462, 0.10264, 0.1057, 0.10583, 0.098767, 0.067702, 0.048904, 0.046326, 0.047948, 0.054255, 0.051414, 0.054284, 0.016113, 0.016087, 0.016065, 0.022793, 0.015879, 0.016243, 0.016712, 0.026076, 0.022314, 0.027454, 0.028479], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc de glace": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73085, 0.88975, 0.91325, 0.94188, 0.94569, 0.98992, 0.99043, 0.99033, 0.99006, 0.98993, 0.99007, 0.99066, 0.99087, 0.99095, 0.99001, 0.98758, 0.98598, 0.97741, 0.97258, 0.96471, 0.96417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060022, 0.060055, 0.060055, 0.060059, 0.060106, 0.11901, 0.11932, 0.11931, 0.11941, 0.11941, 0.11941, 0.11926, 0.11928, 0.9585, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96119, 0.96098, 0.96135, 0.96227, 0.96265, 0.96525, 0.96531, 0.9657, 0.9651, 0.96357, 0.96556, 0.16895, 0.16867, 0.16841, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"himalaya": {
men: [0.23259, 0.23248, 0.20454, 0.19525, 0.19525, 0.30139, 0.30206, 0.30105, 0.31689, 0, 0, 0, 0, 0, 0, 0.079293, 0.11876, 0.13132, 0.13129, 0.13127, 0.13129, 0.13137, 0.079096, 0.29541, 0.29552, 0.2629, 0.26308, 0.2039, 0.20381, 0.21343, 0.19145, 0.19161, 0.1916, 0.48542, 0.55764, 0.57617, 0.65916, 0.61335, 0.6135, 0.64934, 0.66706, 0.73446, 0.73332, 0.77036, 0.80784, 0.74616, 0.74621, 0.47524, 0.33259, 0.28005, 0.28003, 0.28631, 0.28631, 0.28631, 0.22932, 0.29144, 0.29274, 0.056627, 0.057561, 0.071376, 0.0714, 0.33914, 0.98081, 0.88506, 0.50463, 0.50431, 0.50421, 0.50439, 0.50584, 0.63583, 0.57984, 0.5795, 0.5795, 0.57955, 0.57942, 0.57964, 0.41969, 0.43195, 0.45517, 0.19952, 0.1996, 0.19948, 0.19916, 0.093187, 0.096568, 0.070659, 0.065918, 0.065896, 0.065915, 0.065886, 0.066333, 0.065267, 0.068471, 0.023973, 0.023965, 0.018761, 0.018765, 0, 0, 0, 0, 0, 0.10509, 0.10513, 0.13312, 0.15067, 0.15085, 0.15137, 0.15148, 0.96983], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonte des glaces": {
men: [0.66055, 0.58089, 0.6596, 0.65966, 0.65966, 0.65941, 0.62604, 0.67752, 0.6773, 0.67722, 0.76092, 0.6812, 0, 0, 0, 0, 0, 0, 0, 0.15724, 0.20173, 0.20185, 0.1873, 0.18732, 0.18739, 0.35553, 0.35578, 0.12714, 0.10732, 0.12001, 0.11994, 0.12004, 0.12585, 0, 0, 0.31975, 0.16289, 0.13092, 0.13095, 0.13094, 0.13091, 0.35031, 0.47151, 0.4715, 0.47176, 0.45934, 0.4434, 0.44375, 0.44475, 0.38608, 0.47148, 0.50382, 0.50382, 0.50381, 0.50318, 0.50397, 0, 0, 0, 0, 0, 0, 0.17672, 0.20329, 0.24411, 0.26603, 0.26598, 0.26607, 0.26684, 0.26676, 0.26676, 0.26661, 0.26661, 0.26663, 0.27712, 0.68568, 0.70456, 0.70484, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13709, 0.13716, 0.13718, 0.11127, 0.11117, 0.11113, 0.080717, 0.11728, 0.11733, 0.11782, 0.11796, 0.11826, 0.17518, 0.043302, 0.0060014, 0.0060014, 0.0060014, 0.0063039, 0.0063259, 0.0063304, 0.0070236], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"calotte": {
men: [0.2164, 0.2163, 0.67335, 0.67341, 0.21611, 0.16307, 0.095864, 0.16918, 0.1106, 0.11058, 0.17414, 0.17395, 0.17415, 0.17393, 0.17398, 0.20372, 0.17198, 0.25828, 0.29571, 0.31773, 0.40458, 0.32558, 0.55623, 0.55627, 0.47461, 0.47523, 0.2909, 0.19205, 0.19197, 0.15837, 0.20122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15519, 0.15522, 0.96141, 0.96382, 0.96382, 0.96358, 0.9639, 0.96727, 0.96502, 0.96428, 0.96257, 0.96196, 0.96176, 0.9621, 0, 0, 0, 0, 0, 0.058609, 0.058596, 0.058619, 0.058675, 0.058698, 0.058857, 0.05886, 0.058884, 0.058848, 0.058754, 0.058876, 0.050735, 0.050649, 0.05057, 0, 0, 0.27484, 0.27497, 0.27502, 0.090977, 0.21739, 0.20343, 0.20345, 0.16691, 0.19065, 0.20627, 0.20652, 0.20075, 0.20054, 0.20049, 0.1759, 0.1759, 0.1759, 0.22572, 0.080641, 0.094528, 0.081648], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"évolution du climat": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048348, 0.046297, 0.081705, 0.08801, 0.16035, 0.22245, 0.22242, 0.18766, 0.23817, 0.23822, 0.54989, 0.5501, 0.55082, 0.5512, 0.60862, 0.51389, 0.319, 0.31882, 0.31909, 0.31908, 0.56003, 0.50644, 0.42951, 0.42968, 0.41299, 0.38143, 0.39153, 0.38584, 0.37984, 0.37925, 0.38806, 0.38828, 0.38828, 0.39136, 0.26535, 0.22335, 0.28023, 0.28916, 0.1815, 0.23002, 0.2355, 0.35453, 0.37051, 0.37216, 0.38481, 0.37744, 0.37734, 0.36914, 0.33502, 0.32107, 0.31454, 0.30623, 0.31019, 0.31634, 0.28644, 0.18312, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16979, 0.15016, 0.13527, 0.11683, 0.11824, 0.10396, 0.14185, 0.15451, 0.14903, 0.15077, 0.18136, 0.19107, 0.1911, 0.18469, 0.15891, 0.15789, 0.16392, 0.17203, 0.17745, 0.19188, 0.19875, 0.19925, 0.20305, 0.2181, 0.20704, 0.20401, 0.20401, 0.23625, 0.2293, 0.2677, 0.25421], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"climatologues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085701, 0.10274, 0.073113, 0.10369, 0.10042, 0.1005, 0.10559, 0.11138, 0.11135, 0.13837, 0.13192, 0.14091, 0.17428, 0.32375, 0.29315, 0.29353, 0.35637, 0.62316, 0.42208, 0.42175, 0.42152, 0.42188, 0.42186, 0.49947, 0.52479, 0.46383, 0.42671, 0.27234, 0.25057, 0.23744, 0.23741, 0.24377, 0.28506, 0.26117, 0.26131, 0.26131, 0.26133, 0.13281, 0, 0, 0.03076, 0.034335, 0.0431, 0.052274, 0.10591, 0.095344, 0.085442, 0.076474, 0.076474, 0.075327, 0.075352, 0.071942, 0.071774, 0.069755, 0.063286, 0.062843, 0.081606, 0.081635, 0.044428, 0.030541, 0.033421, 0.040429, 0.03594, 0.03689, 0.11256, 0.090922, 0.088117, 0.091522, 0.09177, 0.086228, 0.06218, 0.060666, 0.059502, 0.062948, 0.049937, 0.11721, 0.18161, 0.17905, 0.15154, 0.19376, 0.19205, 0.18615, 0.10056, 0.11186, 0.10522, 0.099758, 0.11711, 0.10017, 0.1081, 0.079907, 0.047712, 0.046266, 0.053718, 0.046174, 0.046279, 0.046873, 0.072517, 0.055215, 0.061357, 0.069424], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophes climatiques": {
men: [0.95079, 0.95034, 0.94942, 0.94951, 0.7691, 0.76881, 0.25621, 0.05278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11141, 0.069786, 0.045414, 0.045453, 0.045451, 0.38126, 0.38039, 0.3684, 0.36854, 0.35205, 0.35213, 0.35208, 0.28143, 0.31757, 0.32032, 0.31685, 0.39708, 0.34413, 0.31554, 0.039243, 0.039331, 0.041031, 0.078617, 0.057656, 0.055045, 0.055044, 0.070552, 0.033078, 0.033224, 0.033753, 0.033753, 0.036179, 0.019975, 0.020044, 0.019998, 0.018817, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34852, 0.17244, 0.17261, 0.19408, 0.16422, 0.13334, 0.1334, 0.13673, 0.13198, 0.13225, 0.14452, 0.14735, 0.14712, 0.14707, 0, 0.061885, 0.061915, 0.061927, 0.093797, 0.39867, 0.39853, 0.39856, 0.9477, 0.9481, 0.95208, 0.95324, 0.95564, 0.95466, 0.29713, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géologues": {
men: [0.3165, 0.45215, 0.53014, 0.52185, 0.52059, 0.50974, 0.50027, 0.51091, 0.51075, 0.56214, 0.55822, 0.56066, 0.58404, 0.71521, 0.66473, 0.54892, 0.20538, 0.21476, 0.13291, 0.10331, 0.10626, 0.097868, 0.087555, 0, 0, 0, 0, 0, 0.069279, 0.080804, 0.094828, 0.09452, 0.13084, 0.19218, 0.17154, 0.18838, 0.24515, 0.35058, 0.33377, 0.33372, 0.33367, 0.44705, 0.58192, 0.56047, 0.51997, 0.52652, 0.42081, 0.38974, 0.40814, 0.43064, 0.43762, 0.40363, 0.40912, 0.40912, 0.40692, 0.31356, 0.060376, 0.058596, 0.059887, 0.059872, 0.078592, 0.090164, 0.092825, 0.08377, 0.056332, 0.042424, 0.042416, 0.036238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.069034, 0.084063, 0.084068, 0.084102, 0.10171, 0.10155, 0.09322, 0.089163, 0.10131, 0.12843, 0.079405, 0.081168, 0.076522, 0.082295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réserves d' eau": {
men: [0, 0, 0, 0, 0, 0.41309, 0.29043, 0.27205, 0.27196, 0.27193, 0.27181, 0.25753, 0.25783, 0.25749, 0.21684, 0.21701, 0.17738, 0.17727, 0.14981, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13661, 0.14763, 0.16109, 0.17512, 0.1401, 0.14008, 0.17491, 0.16751, 0.16751, 0.1676, 0.15566, 0.14096, 0.24779, 0.26756, 0.15842, 0.13517, 0.15486, 0.14349, 0.18021, 0.14331, 0.12736, 0.13741, 0.13775, 0.10106, 0.10587, 0.11883, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.034307, 0.035387, 0.035375, 0.035386, 0.039942, 0.039961, 0.055547, 0.053949, 0.070636, 0.070613, 0.070617, 0.065779, 0.057424, 0.077901, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arctique": {
men: [0.019578, 0.023779, 0.021849, 0.02131, 0.02131, 0.020992, 0.020419, 0.53009, 0.63809, 0.628, 0.62171, 0.67536, 0.67789, 0.7677, 0.77231, 0.77937, 0.73641, 0.74599, 0.74389, 0.7537, 0.7342, 0.59733, 0.60856, 0.61837, 0.65302, 0.55742, 0.48741, 0.13494, 0.077894, 0.037111, 0.031933, 0.0085756, 0.0086035, 0, 0.0599, 0.061943, 0.05603, 0.053012, 0.053025, 0.052139, 0.054297, 0.062102, 0.07027, 0.081187, 0.10588, 0.10471, 0.10239, 0.11002, 0.014186, 0.012249, 0.013429, 0.013526, 0.012887, 0.013417, 0.012201, 0.016416, 0.016826, 0, 0, 0, 0, 0.013172, 0.012669, 0.014687, 0.017592, 0.021709, 0.022395, 0.017261, 0.017688, 0.015518, 0.015905, 0.016605, 0.019549, 0.01955, 0.019308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10865, 0.1513, 0.1964, 0.19782, 0.19773, 0.17794, 0.17798, 0.15766, 0.16162, 0.16157, 0.15609, 0.1733, 0.17544, 0.15512, 0.12412, 0.076117, 0.0037765, 0.0037756, 0.0034039, 0.0039499, 0.0035439, 0.0050943, 0.0055972, 0.0056011, 0.0061374], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau douce": {
men: [0.026273, 0.027134, 0.035855, 0.038403, 0.035688, 0.035464, 0.032993, 0.010691, 0, 0, 0.058876, 0.25454, 0.32295, 0.45466, 0.53998, 0.51941, 0.55845, 0.56493, 0.58969, 0.49957, 0.50957, 0.49645, 0.48325, 0.50496, 0.48378, 0.34667, 0.27177, 0.05698, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098124, 0.098148, 0.1501, 0.12991, 0.13613, 0.13592, 0.16318, 0.13894, 0.13894, 0.1343, 0.13578, 0.14028, 0.10601, 0.10903, 0.061021, 0.059975, 0.038191, 0.044196, 0.039531, 0.038711, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"température de l' eau": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15187, 0.21273, 0.21279, 0.28246, 0.29075, 0.29057, 0.2905, 0.29046, 0.2905, 0.26062, 0.26068, 0.27139, 0.34566, 0.34611, 0.22987, 0.045714, 0.045693, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46058, 0.42902, 0.4824, 0.48267, 0.48267, 0.64268, 0.58107, 0.58237, 0.58391, 0.74271, 0.74332, 0.74332, 0.7433, 0.45412, 0, 0, 0, 0, 0, 0.097487, 0.10463, 0.10438, 0.1043, 0.10412, 0.10405, 0.089243, 0.089275, 0.12937, 0.21347, 0.38166, 0.38144, 0.38144, 0.38147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones arides": {
men: [0.11404, 0.12892, 0.12879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98099, 0.98302, 0.97471, 0.97305, 0.97155, 0.97122, 0.97151, 0.97109, 0.97155, 0.97173, 0.97114, 0.97025, 0.96993, 0.96999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones habitées": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96509, 0.96555, 0.96573, 0.96515, 0.96427, 0.96394, 0.964, 0.9642, 0.9646, 0.96865, 0.96983, 0.97227, 0.97127, 0.97102, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hausse des températures": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62626, 0.7533, 0.75335, 0.7535, 0.75381, 0.75698, 0.79433, 0.90241, 0.9875, 0.98724, 0.98757, 0.8875, 0.8875, 0.88854, 0.65936, 0.45793, 0.45811], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"téléphones usagés": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93858, 0.93897, 0.94291, 0.94406, 0.94644, 0.94547, 0.94523, 0.94554, 0.94554, 0.94554, 0.94666, 0.94996, 0.95062, 0.95099], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit pluviométrique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95476, 0.95444, 0.9545, 0.9547, 0.95509, 0.9591, 0.96027, 0.96269, 0.9617, 0.96145, 0.96177, 0.96177, 0.28853, 0.28887, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61508, 0.6153, 0.96487, 0.9646, 0.9646, 0.96404, 0.96404, 0.96411, 0.9639, 0.96428, 0.96519, 0.96557, 0.96819, 0.96824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94563, 0.94638, 0.9485, 0.951, 0.95094, 0.95173, 0.95173, 0.9517, 0.95052, 0.9507, 0.95492, 0.1787, 0.1787, 0.17865, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rendements agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94833, 0.94882, 0.94824, 0.94798, 0.94786, 0.94799, 0.94856, 0.94876, 0.69782, 0.24414, 0.24446, 0.046271, 0.046363, 0.046342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.084352, 0.084352, 0.08435, 0.084245, 0.084261, 0.084635, 0.14386, 0.18267, 0.18263, 0.18269, 0.11407, 0.1138, 0.089207, 0.073829, 0.028244, 0.028239, 0.028249, 0.02833, 0.028322, 0.028322, 0.028305, 0.028305, 0.028308, 0.026227, 0.041715, 0.013582, 0.01579, 0.01874, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"altitude": {
men: [0.028245, 0.076098, 0.1065, 0.099843, 0.099434, 0.11887, 0.12088, 0.1519, 0.15244, 0.15404, 0.27499, 0.2976, 0.33241, 0.34075, 0.29785, 0.18775, 0.11517, 0.12232, 0.1267, 0.054915, 0.052484, 0.030917, 0.029323, 0.027882, 0.014445, 0.013543, 0.013755, 0.012893, 0.043196, 0.028269, 0.054141, 0.045912, 0.047058, 0.045766, 0.075189, 0.11506, 0.11452, 0.10575, 0.10711, 0.10933, 0.10695, 0.10967, 0.12105, 0.16288, 0.14652, 0.20242, 0.17184, 0.17784, 0.12694, 0.015919, 0.016713, 0.021973, 0.021313, 0.021312, 0.020933, 0.032448, 0.012005, 0.012122, 0.014942, 0.026372, 0.03224, 0.02489, 0.063183, 0.097451, 0.11775, 0.16758, 0.16097, 0.1597, 0.15608, 0.1496, 0.15643, 0.12254, 0.11905, 0.11548, 0.12343, 0.14581, 0.10985, 0.070072, 0.045442, 0, 0, 0, 0, 0.0084809, 0.0084875, 0.082547, 0.079411, 0.079384, 0.074477, 0.088842, 0.08093, 0.073725, 0.12482, 0.11327, 0.11065, 0.10966, 0.10964, 0.10644, 0.10714, 0.091142, 0.095468, 0.093667, 0.098477, 0.093925, 0.098215, 0.11194, 0.078322, 0.051465, 0.047521, 0.046376], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éruptions volcaniques": {
men: [0.72982, 0.72947, 0.72877, 0.72884, 0.72884, 0.76456, 0.76627, 0.85487, 0.79997, 0.6807, 0.46497, 0.47412, 0.066139, 0.061442, 0.06146, 0.061508, 0.058066, 0.053865, 0.05385, 0.053843, 0.053851, 0.043295, 0.038309, 0.042838, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.022286, 0.022281, 0.022289, 0.05099, 0.050975, 0.050975, 0.11897, 0.11897, 0.11897, 0.089275, 0.08931, 0.089395, 0.13855, 0.13892, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sras": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25469, 0.25479, 0.25475, 0.93531, 0.93517, 0.93503, 0.93419, 0.93273, 0.93271, 0.93322, 0.93322, 0.93329, 0.93402, 0.061638, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"glacier du massif du Mont-Blanc": {
men: [0.18123, 0.27687, 0.31274, 0.31277, 0.31277, 0.37039, 0.37122, 0.36998, 0.36986, 0.36981, 0.36965, 0.36925, 0.36968, 0.3692, 0.71651, 0.97288, 0.96916, 0.96856, 0.9683, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064675, 0.046525, 0.046499, 0.046539, 0.046537, 0.046461, 0.046356, 0.046394, 0.046412, 0.046404, 0.046416, 0.046409, 0.046402, 0.047053, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25196, 0.25173, 0.33136, 0.33138, 0.46842, 0.46861, 0.47058, 0.47115, 0.47234, 0.47185, 0.96593, 0.96625, 0.96625, 0.96625, 0, 0, 0.9702, 0.97058], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94355, 0.94336, 0.94369, 0.94641, 0.94614, 0.94614, 0.94559, 0.94559, 0.94566, 0.23554, 0.23563, 0.23585, 0.23594, 0.23658, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0, 0.41052, 0.41013, 0.41017, 0.41017, 0.28661, 0.28725, 0.28629, 0.28619, 0.28616, 0.17689, 0.2344, 0.23468, 0.23437, 0.45104, 0.34298, 0.34316, 0.34294, 0.34285, 0.36107, 0.36113, 0.36134, 0.27527, 0.27529, 0.42085, 0.4214, 0.42169, 0.3392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 