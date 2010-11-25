var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"marché pharmaceutique": {
men: [0.91176, 0.9184, 0.91826, 0.91823, 0.91816, 0.91325, 0.90531, 0.89554, 0.87879, 0.87902, 0.87922, 0.87926, 0.97208, 0.96765, 0.96776, 0.96341, 0.96409, 0.96403, 0.96411, 0.96674, 0.96804, 0.96607, 0.9654, 0.96534, 0.96523, 0.96512, 0.96827, 0.64511, 0.52649, 0.54261, 0.50265, 0.50284, 0.50262, 0.6076, 0.61324, 0.69678, 0.69654, 0.71858, 0.71842, 0.71843, 0.73581, 0.87871, 0.98244, 0.98308, 0.98339, 0.98321, 0.98335, 0.90272, 0.89588, 0.87748, 0.87675, 0.88476, 0.88472, 0.8844, 0.88062, 0.83949, 0.82272, 0.80944, 0.83005, 0.83009, 0.82998, 0.97324, 0.97422, 0.97351, 0.97478, 0.97266, 0.97291, 0.97317, 0.97136, 0.97276, 0.97124, 0.97171, 0.96969, 0.96938, 0.96919, 0.96868, 0.96451, 0.9634, 0.96355, 0.96265, 0.9626, 0.96262, 0.44333, 0.48118, 0.48111, 0.39173, 0.33833, 0.33833, 0.26889, 0.27032, 0.27034, 0.27035, 0.42179, 0.44848, 0.44853, 0.44856, 0.70576, 0.67702, 0.6769, 0.67656, 0.67663, 0.67667, 0.96202, 0.96035, 0.9602, 0.96011, 0.94333, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"consommation mondiale de pétrole": {
men: [0.97208, 0.96983, 0.97043, 0.97039, 0.97032, 0.96541, 0.96819, 0.96919, 0.96886, 0.96852, 0.96874, 0.96879, 0.96748, 0.96763, 0.96774, 0.9687, 0.96668, 0.96662, 0.9667, 0.96933, 0.96506, 0.96721, 0.96655, 0.96593, 0.96583, 0.96571, 0.96145, 0.95973, 0.96051, 0.96, 0.95955, 0.95992, 0.9595, 0.96365, 0.96273, 0.95849, 0.95816, 0.95204, 0.95182, 0.95183, 0.95127, 0.94991, 0.94951, 0.9548, 0.95488, 0.95471, 0.95485, 0.94622, 0.95386, 0.49185, 0.49144, 0.49133, 0.49131, 0.49114, 0.49142, 0.66408, 0.66434, 0.60857, 0.66742, 0.66744, 0.66736, 0.66783, 0.66479, 0.96162, 0.96507, 0.96534, 0.96558, 0.96584, 0.96541, 0.96374, 0.96325, 0.96348, 0.9619, 0.9616, 0.96141, 0.96086, 0.95957, 0.95266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur pharmaceutique": {
men: [0.47738, 0.4827, 0.49928, 0.49926, 0.49923, 0.4822, 0.43864, 0.39981, 0.42251, 0.42262, 0.42272, 0.42274, 0.61439, 0.61107, 0.61114, 0.69866, 0.68826, 0.68822, 0.68827, 0.69015, 0.83312, 0.80488, 0.9654, 0.93048, 0.93038, 0.93027, 0.94304, 0.96237, 0.96316, 0.96418, 0.95991, 0.96028, 0.95986, 0.82007, 0.82298, 0.8688, 0.86851, 0.88457, 0.88437, 0.88438, 0.89234, 0.85228, 0.86512, 0.87161, 0.87674, 0.87658, 0.87671, 0.93173, 0.92723, 0.91469, 0.91392, 0.91926, 0.91922, 0.9189, 0.80279, 0.80284, 0.78383, 0.76917, 0.80008, 0.80012, 0.80001, 0.65265, 0.69604, 0.69015, 0.69718, 0.6423, 0.64247, 0.64264, 0.74283, 0.7439, 0.72457, 0.7026, 0.5621, 0.56192, 0.56181, 0.96287, 0.95059, 0.94384, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"aof": {
men: [0.24621, 0.25085, 0.26933, 0.26932, 0.2693, 0.24542, 0.25662, 0.28084, 0.21998, 0.2398, 0.23985, 0.23986, 0.27595, 0.28115, 0.29884, 0.30265, 0.27296, 0.27294, 0.27297, 0.25745, 0.23439, 0.24679, 0.28447, 0.26718, 0.26715, 0.26712, 0.27622, 0.28344, 0.22332, 0.21055, 0.20207, 0.20215, 0.20206, 0.24161, 0.21808, 0.25464, 0.21613, 0.26565, 0.26559, 0.26559, 0.31686, 0.3454, 0.33847, 0.34742, 0.37453, 0.37446, 0.37452, 0.38181, 0.39784, 0.37894, 0.45905, 0.48172, 0.4817, 0.48153, 0.4565, 0.37891, 0.42521, 0.32741, 0.3517, 0.35172, 0.35167, 0.31773, 0.38374, 0.38906, 0.38393, 0.39304, 0.39314, 0.39325, 0.4029, 0.44797, 0.3802, 0.49252, 0.45651, 0.45637, 0.45628, 0.48162, 0.42548, 0.4715, 0.42116, 0.38237, 0.38235, 0.38236, 0.34676, 0.33207, 0.38761, 0.35762, 0.34865, 0.34865, 0.34883, 0.3472, 0.32188, 0.29444, 0.31056, 0.33847, 0.33851, 0.33853, 0.35287, 0.41089, 0.41004, 0.44594, 0.37929, 0.37931, 0.37926, 0.39124, 0.45219, 0.35889, 0.33659, 0.34052, 0.34047, 0.3404], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie aéronautique": {
men: [0.7826, 0.88049, 0.93662, 0.93658, 0.93652, 0.88706, 0.87383, 0.90101, 0.87933, 0.84412, 0.84431, 0.84435, 0.84408, 0.88361, 0.88371, 0.88459, 0.85034, 0.85028, 0.85035, 0.96487, 0.96637, 0.96646, 0.97303, 0.97297, 0.97287, 0.97275, 0.97264, 0.97259, 0.96977, 0.96925, 0.97273, 0.97311, 0.97269, 0.84539, 0.84459, 0.8439, 0.66176, 0.6615, 0.55103, 0.55103, 0.55071, 0.54992, 0.40876, 0.40879, 0, 0, 0, 0.66634, 0.66666, 0.74575, 0.78569, 0.78551, 0.82419, 0.8239, 0.82437, 0.76824, 0.84918, 0.84858, 0.84817, 0.8482, 0.84809, 0.77908, 0.77807, 0.70632, 0, 0, 0, 0, 0, 0.94115, 0.94068, 0.9409, 0.94112, 0.94082, 0.28369, 0.28352, 0.2838, 0.098019, 0.069185, 0.069202, 0.069199, 0.0692, 0.06925, 0.056088, 0.05608, 0.056103, 0.05611, 0.056111, 0.067867, 0.067837, 0.059148, 0.11698, 0.027254, 0.022442, 0.022445, 0.022446, 0.022459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouveaux médicaments": {
men: [0.8225, 0.75115, 0.72604, 0.72601, 0.72596, 0.75463, 0.76229, 0.73556, 0.64005, 0.62278, 0.62292, 0.62295, 0.57, 0.42085, 0.45013, 0.46074, 0.50083, 0.41923, 0.41927, 0.35776, 0.35333, 0.27198, 0.28295, 0.24017, 0.24014, 0.24011, 0.32504, 0.46636, 0.48136, 0.47913, 0.4415, 0.48379, 0.48358, 0.59135, 0.59684, 0.71367, 0.7073, 0.78516, 0.78498, 0.78499, 0.79883, 0.77664, 0.79172, 0.8465, 0.8493, 0.84914, 0.84927, 0.87968, 0.87119, 0.63914, 0.64464, 0.62796, 0.62793, 0.62771, 0.60227, 0.54227, 0.51068, 0.48827, 0.4902, 0.4766, 0.47654, 0.44425, 0.49956, 0.60307, 0.5724, 0.56337, 0.56352, 0.54769, 0.42767, 0.41612, 0.37085, 0.3401, 0.27805, 0.29233, 0.29228, 0.24027, 0.10306, 0.088047, 0.056527, 0.056541, 0.056538, 0.055052, 0.066129, 0.06971, 0.075893, 0.075924, 0.075934, 0.075935, 0.075973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pfizer": {
men: [0.3487, 0.37449, 0.19619, 0.19618, 0.19617, 0.94681, 0.22631, 0.2235, 0.22362, 0.22368, 0.19762, 0.16794, 0.16789, 0.14315, 0.13906, 0.1293, 0.12946, 0.12946, 0.12947, 0.12832, 0.05341, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065264, 0.083459, 0.10111, 0.12826, 0.12823, 0.19801, 0.19789, 0.19761, 0.19752, 0.19305, 0.15448, 0.15445, 0.15447, 0.14476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054947, 0.07496, 0.074979, 0.077453, 0.1697, 0.24154, 0.29325, 0.35566, 0.38212, 0.38374, 0.38367, 0.45682, 0.76957, 0.82044, 0.8596, 0.8609, 0.86086, 0.86087, 0.94588, 0.94466, 0.94595, 0.9452, 0.97548, 0.9554, 0.95588, 0.93037, 0.92976, 0.90809, 0.88773, 0.89122, 0.89133, 0.74987, 0.75568, 0.75946, 0.73918, 0.73386, 0.66894, 0.68803, 0.68793, 0.67525, 0.67282, 0.6393, 0.6043, 0.57725, 0.57717, 0.63982], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services pétroliers": {
men: [0.14449, 0.14428, 0.11996, 0.12068, 0.12067, 0.048377, 0.046925, 0.046974, 0.046999, 0, 0, 0, 0, 0.077246, 0.077255, 0.077332, 0.11051, 0.1105, 0.11051, 0.21698, 0.28578, 0.11099, 0.11092, 0.19302, 0.193, 0.19298, 0.19296, 0.10244, 0.10253, 0.10247, 0.1412, 0.14126, 0.1412, 0.26663, 0.26638, 0.95849, 0.95816, 0.95204, 0.95182, 0.95183, 0.95127, 0.94991, 0.092804, 0.08367, 0.077214, 0.0772, 0.077212, 0, 0.064577, 0.058452, 0.058403, 0.05839, 0.058387, 0.058367, 0.0584, 0.1521, 0.35759, 0.42716, 0.5768, 0.57682, 0.57675, 0.57716, 0.57397, 0.74429, 0.77403, 0.77425, 0.77445, 0.77465, 0.7743, 0.95667, 0.95883, 0.95906, 0.95979, 0.79578, 0.79563, 0.79517, 0.74932, 0.38841, 0.31536, 0.3956, 0.39558, 0.39559, 0.39587, 0.36604, 0.22784, 0.29379, 0.23159, 0.24821, 0.24833, 0.24823, 0.29805, 0.4176, 0.31484, 0.12649, 0.11907, 0.11908, 0.11915, 0.088679, 0.093045, 0.072496, 0.044336, 0.044339, 0.044332, 0.034121, 0.07415, 0.074143, 0.067608, 0.090003, 0.093634, 0.093615], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barils par jour": {
men: [0.19686, 0.18827, 0.18493, 0.19614, 0.24378, 0.18207, 0.26556, 0.28842, 0.3265, 0.36619, 0.37833, 0.42562, 0.40077, 0.48949, 0.48596, 0.32677, 0.36684, 0.36682, 0.332, 0.29782, 0.22472, 0.21761, 0.21746, 0.2105, 0.20453, 0.20451, 0.16173, 0.13094, 0.074325, 0.13947, 0.13941, 0.13946, 0.17201, 0.34064, 0.34032, 0.55554, 0.55535, 0.40956, 0.59722, 0.59723, 0.59688, 0.22331, 0.13909, 0.21866, 0.18324, 0.15133, 0.15135, 0.066925, 0.13309, 0.13305, 0.14004, 0.099922, 0.086691, 0.08666, 0.08671, 0.16734, 0.19597, 0.1517, 0.17925, 0.19087, 0.19085, 0.1865, 0.18536, 0.22317, 0.25879, 0.3105, 0.34752, 0.34761, 0.34099, 0.29933, 0.27445, 0.27536, 0.35477, 0.35466, 0.35459, 0.37433, 0.37284, 0.33801, 0.31521, 0.33644, 0.33642, 0.33643, 0.38603, 0.43012, 0.36867, 0.42114, 0.42052, 0.42053, 0.42074, 0.3763, 0.37478, 0.37708, 0.39407, 0.28341, 0.26316, 0.26318, 0.23283, 0.18505, 0.26093, 0.2392, 0.19437, 0.19438, 0.19435, 0.19158, 0.31209, 0.31206, 0.29479, 0.43278, 0.48251, 0.48241], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marchés émergents": {
men: [0.14191, 0.19211, 0.19902, 0.19901, 0.19349, 0.14167, 0.15106, 0.15797, 0.20893, 0.21342, 0.21347, 0.21348, 0.42647, 0.35905, 0.3876, 0.30758, 0.28185, 0.28183, 0.32496, 0.46856, 0.40356, 0.28307, 0.22156, 0.2149, 0.21487, 0.20101, 0.014287, 0.017808, 0.016591, 0.069742, 0.055885, 0.055907, 0.055882, 0.054955, 0.084939, 0.077541, 0.075801, 0.077083, 0.07554, 0.078597, 0.10119, 0.099162, 0.10861, 0.074422, 0.08763, 0.087614, 0.087627, 0.084095, 0.071067, 0.086111, 0.10741, 0.10595, 0.10595, 0.10591, 0.05591, 0.066697, 0.050832, 0.059893, 0.059864, 0.059866, 0.054051, 0.060823, 0.035485, 0.03551, 0.094592, 0.093344, 0.097489, 0.097515, 0.12858, 0.14277, 0.26325, 0.28553, 0.31107, 0.31097, 0.371, 0.29787, 0.28059, 0.24263, 0.16297, 0.16234, 0.16234, 0.16234, 0.15958, 0.23544, 0.18606, 0.14906, 0.12458, 0.23611, 0.23623, 0.22178, 0.21615, 0.22497, 0.23296, 0.24025, 0.21277, 0.21278, 0.21512, 0.18223, 0.12743, 0.13333, 0.14045, 0.024755, 0.024752, 0.063065, 0.09854, 0.11078, 0.21132, 0.1629, 0.19327, 0.19323], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vieillissement de la population": {
men: [0.2552, 0.2548, 0.25455, 0.25454, 0.2424, 0.24213, 0.28622, 0.29936, 0.29952, 0.2996, 0.29967, 0.29968, 0.22542, 0.11075, 0.13165, 0.090092, 0.090207, 0.090201, 0.10526, 0.062008, 0, 0, 0, 0, 0, 0, 0, 0.077908, 0.067634, 0.12337, 0.12332, 0.12336, 0.12331, 0.28878, 0.2885, 0.28827, 0.47436, 0.47417, 0.47407, 0.47407, 0.34345, 0.22262, 0.12496, 0.060986, 0.11476, 0.11474, 0.11476, 0.050194, 0.012632, 0.041356, 0.041562, 0.040488, 0.040486, 0.040472, 0.041476, 0.039253, 0.055906, 0.055432, 0.042446, 0.040609, 0.040129, 0.049384, 0.16246, 0.14958, 0.16356, 0.16891, 0.16895, 0.16899, 0.17033, 0.17459, 0.1707, 0.13629, 0.16977, 0.18718, 0.19254, 0.1934, 0.13624, 0.12681, 0.12586, 0.11947, 0.11122, 0.10256, 0.10709, 0.13814, 0.13259, 0.16662, 0.13075, 0.13075, 0.12553, 0.12475, 0.12853, 0.12853, 0.1461, 0.16666, 0.17159, 0.18104, 0.16438, 0.13699, 0.15204, 0.14979, 0.17891, 0.17892, 0.17175, 0.12395, 0.18444, 0.19415, 0.14505, 0.1242, 0.12508, 0.13582], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réserves pétrolières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95442, 0.95351, 0.95273, 0.95241, 0.48823, 0.48811, 0.48812, 0.21995, 0.19687, 0.17831, 0.16302, 0.14913, 0.14911, 0.13901, 0, 0, 0, 0, 0, 0, 0, 0, 0.44111, 0.38917, 0.44098, 0.51575, 0.51577, 0.60333, 0.60376, 0.43472, 0.43454, 0.43496, 0.43508, 0.43519, 0.4353, 0.33115, 0.1797, 0.23941, 0.23947, 0.41275, 0.41262, 0.41254, 0.4123, 0.56305, 0.56312, 0.56305, 0.56319, 0.56316, 0.56317, 0.95496, 0.94913, 0.94899, 0.94939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95293, 0.95284, 0.95359, 0.95389, 0.95375, 0.95355], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage en mer": {
men: [0.055568, 0.073752, 0.037542, 0.024744, 0.023648, 0.017405, 0.018719, 0.021899, 0, 0, 0, 0, 0, 0.021115, 0.021117, 0.020831, 0.022577, 0.031497, 0.033285, 0.056256, 0.062849, 0.062854, 0.042583, 0.1086, 0.10859, 0.10858, 0.10857, 0.054819, 0.051203, 0.056544, 0.056518, 0.05654, 0.056515, 0.068096, 0.068031, 0.067975, 0.15575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097552, 0.083419, 0.056806, 0.10625, 0.10624, 0.10621, 0.11908, 0.11904, 0.11909, 0.11901, 0.20929, 0.20929, 0.20927, 0.20942, 0.17972, 0.21435, 0.64691, 0.64709, 0.64725, 0.60777, 0.6075, 0.60838, 0.66839, 0.58555, 0.50998, 0.50982, 0.50972, 0.50943, 0.59343, 0.5935, 0.44041, 0.60527, 0.60525, 0.66983, 0.67031, 0.54414, 0.2364, 0.45403, 0.45408, 0.45409, 0.45432, 0.45412, 0.54823, 0.54824, 0.40639, 0.33545, 0.3355, 0.33551, 0.33571, 0.36582, 0.46042, 0.36008, 0.36012, 0.36014, 0.36009, 0.36001, 0.47532, 0.47527, 0.95156, 0.66408, 0.66399, 0.66385], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pétrole": {
men: [0.20568, 0.18654, 0.25437, 0.24853, 0.24852, 0.16575, 0.20937, 0.21148, 0.18745, 0.18486, 0.18094, 0.18095, 0.19322, 0.21138, 0.17267, 0.16466, 0.13524, 0.13763, 0.12806, 0.13995, 0.10967, 0.13385, 0.13266, 0.12527, 0.12477, 0.12475, 0.094747, 0.066577, 0.044775, 0.052098, 0.051526, 0.051546, 0.059437, 0.093031, 0.091658, 0.0648, 0.072015, 0.037415, 0.037653, 0.037653, 0.04302, 0.044745, 0.056838, 0.094776, 0.096537, 0.09652, 0.074413, 0.040983, 0.08575, 0.087271, 0.087198, 0.11381, 0.11381, 0.11377, 0.11383, 0.29121, 0.3331, 0.27974, 0.42106, 0.34624, 0.25132, 0.27318, 0.25473, 0.28248, 0.33562, 0.33571, 0.32393, 0.32401, 0.32027, 0.24832, 0.26254, 0.27641, 0.24632, 0.2637, 0.37799, 0.37042, 0.37999, 0.46515, 0.35363, 0.22441, 0.2318, 0.23181, 0.23765, 0.32116, 0.27611, 0.2688, 0.28757, 0.2993, 0.28411, 0.27801, 0.26743, 0.21651, 0.24092, 0.34076, 0.3408, 0.34082, 0.34783, 0.28317, 0.31051, 0.30108, 0.26511, 0.22043, 0.22536, 0.22252, 0.43157, 0.40718, 0.38529, 0.53526, 0.53518, 0.39001], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production de pétrole": {
men: [0.02348, 0, 0.042063, 0.04232, 0.042317, 0.04227, 0.049739, 0.05458, 0.05366, 0.052036, 0.059309, 0.059312, 0.12565, 0.21009, 0.21793, 0.21336, 0.11766, 0.11765, 0.11766, 0.11542, 0.1156, 0.16349, 0.16916, 0.20036, 0.3535, 0.35346, 0.16797, 0.16842, 0.3228, 0.16688, 0.069483, 0.06951, 0.06948, 0.071039, 0.070971, 0, 0, 0, 0, 0.051892, 0.051862, 0.042791, 0.042076, 0.063615, 0.079698, 0.079684, 0.078375, 0.064197, 0.062634, 0.059571, 0.079878, 0.094223, 0.089356, 0.031361, 0.028914, 0.035744, 0.036708, 0, 0.081021, 0.081025, 0.083058, 0.12508, 0.12262, 0.16332, 0.31586, 0.22988, 0.26581, 0.2924, 0.40463, 0.33924, 0.33907, 0.37626, 0.29383, 0.29374, 0.29368, 0.29352, 0.31247, 0.36295, 0.28987, 0.40953, 0.39662, 0.39663, 0.34402, 0.58494, 0.52685, 0.48969, 0.52846, 0.52847, 0.52873, 0.5285, 0.63352, 0.49085, 0.38585, 0.2567, 0.22693, 0.22695, 0.22708, 0.10322, 0.14931, 0.14923, 0.18595, 0.17229, 0.17227, 0.14897, 0.20078, 0.21528, 0.21019, 0.36985, 0.42292, 0.42283], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"laboratoire français": {
men: [0.09009, 0.1172, 0.11709, 0.11708, 0.11022, 0.1101, 0.18335, 0.1658, 0.19967, 0.2157, 0.20869, 0.2087, 0.19084, 0.356, 0.35604, 0.29697, 0.29735, 0.29733, 0.36929, 0.37029, 0, 0, 0, 0, 0, 0, 0, 0.95143, 0.9522, 0.95799, 0.41334, 0.41349, 0.41332, 0.081646, 0.077207, 0.053037, 0.046595, 0.046577, 0.046566, 0.046567, 0.046539, 0.030318, 0.030305, 0.014802, 0.03274, 0.032734, 0.032739, 0.036271, 0.03898, 0.10538, 0.4244, 0.42431, 0.42429, 0.42414, 0.42438, 0.42426, 0.65541, 0.65495, 0.94915, 0.94919, 0.94907, 0.073162, 0.073068, 0.096153, 0.11697, 0.12719, 0.12722, 0.12725, 0.12868, 0.12887, 0.094853, 0.094875, 0.098787, 0.098755, 0.098736, 0.25327, 0.25352, 0.22012, 0.19281, 0.18432, 0.16518, 0.16518, 0.2183, 0.26054, 0.23025, 0.19617, 0.23635, 0.23635, 0.23647, 0.23779, 0.23781, 0.23782, 0.20163, 0.2499, 0.29903, 0.29904, 0.2462, 0.17448, 0.22753, 0.41829, 0.41833, 0.41836, 0.4183, 0.26311, 0.26307, 0.26305, 0.94333, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités boursières": {
men: [0.51753, 0.51679, 0.95317, 0.95313, 0.95306, 0.11144, 0.09595, 0.09605, 0.07524, 0, 0, 0, 0, 0, 0.058313, 0.058371, 0.058445, 0.052544, 0.052548, 0.090098, 0.10365, 0.10366, 0.090969, 0.090963, 0.090953, 0.090942, 0.13949, 0.13986, 0, 0, 0, 0, 0, 0, 0, 0.17724, 0.95679, 0.95642, 0.95621, 0.95622, 0.95566, 0.95429, 0.96052, 0.96058, 0.96067, 0.96049, 0.96064, 0.9602, 0.96066, 0.95376, 0.95296, 0.95274, 0.9527, 0.40816, 0.40839, 0.40827, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50313, 0.38247, 0.38235, 0.38227, 0.38206, 0.38243, 0.17731, 0.073567, 0.073585, 0.073582, 0.073583, 0.079116, 0.079096, 0.079085, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"perspectives économiques": {
men: [0.025344, 0.026965, 0.027957, 0.030405, 0.031829, 0.033862, 0.03462, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19602, 0.19632, 0.14738, 0.11473, 0.11472, 0.11471, 0.11469, 0.11468, 0.10309, 0.082314, 0.10785, 0.067704, 0.06773, 0.067701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045354, 0.034544, 0.038563, 0.038556, 0.038561, 0.035114, 0.035131, 0.035121, 0.034063, 0.034056, 0.053942, 0.05242, 0.052449, 0.15997, 0.18281, 0.21092, 0.2434, 0.24341, 0.24338, 0.30443, 0.30403, 0.3039, 0.38812, 0.31609, 0.28069, 0.30273, 0.35447, 0.10867, 0.15231, 0.26026, 0.22201, 0.22194, 0.22189, 0.22176, 0.25348, 0.32043, 0.29904, 0.24081, 0.24079, 0.2408, 0.25502, 0.35069, 0.31794, 0.3175, 0.4077, 0.40771, 0.40792, 0.4361, 0.43453, 0.4083, 0.42569, 0.77645, 0.77654, 0.77659, 0.74936, 0.7074, 0.91268, 0.9074, 0.83338, 0.83343, 0.8333, 0.80966, 0.32625, 0.32622, 0.31263, 0.37565, 0.3756, 0.37552], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pharmacie": {
men: [0.4269, 0.50198, 0.39741, 0.35937, 0.35834, 0.32828, 0.27716, 0.25332, 0.22061, 0.22102, 0.21905, 0.17531, 0.16168, 0.124, 0.12544, 0.062332, 0.058332, 0.06081, 0.058507, 0.061817, 0.051046, 0.042093, 0.043637, 0.051955, 0.051917, 0.060985, 0.070552, 0.11407, 0.10236, 0.098425, 0.085652, 0.08667, 0.086742, 0.12019, 0.12944, 0.18831, 0.17758, 0.19418, 0.18925, 0.20367, 0.23141, 0.2567, 0.29146, 0.32865, 0.34809, 0.3547, 0.35424, 0.29815, 0.2602, 0.19451, 0.2082, 0.17892, 0.18188, 0.17882, 0.16487, 0.11302, 0.098335, 0.083721, 0.084254, 0.076021, 0.076614, 0.072361, 0.091215, 0.099389, 0.10193, 0.097981, 0.098262, 0.10003, 0.097999, 0.12034, 0.13506, 0.16319, 0.17101, 0.20408, 0.20899, 0.25718, 0.28215, 0.28879, 0.29553, 0.29351, 0.29866, 0.29753, 0.289, 0.28909, 0.27693, 0.27829, 0.30998, 0.30878, 0.27628, 0.26741, 0.25522, 0.2392, 0.24234, 0.2233, 0.1948, 0.19286, 0.189, 0.19642, 0.18504, 0.15036, 0.12, 0.12062, 0.12896, 0.12174, 0.12151, 0.11416, 0.11241, 0.10477, 0.11759, 0.11912], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités de santé": {
men: [0.28123, 0.47879, 0.47833, 0.38668, 0.36344, 0.25536, 0.35342, 0.31614, 0.2698, 0.26987, 0.26993, 0.24381, 0.19741, 0.1575, 0.15752, 0.11539, 0.11554, 0.12807, 0.13289, 0.16059, 0.095281, 0, 0, 0, 0, 0, 0, 0.17968, 0.17982, 0.084429, 0.074837, 0.074866, 0.074834, 0.11211, 0.112, 0.11816, 0.11812, 0.11807, 0.11805, 0.11805, 0.11798, 0.080122, 0.080088, 0.17072, 0.39284, 0.39277, 0.39283, 0.15836, 0.15844, 0.11003, 0.079345, 0.067551, 0.061863, 0.061841, 0.061876, 0.066776, 0.15621, 0.12641, 0.090071, 0.090075, 0.075697, 0.089056, 0.069206, 0.0951, 0.11225, 0.11295, 0.11088, 0.11091, 0.11657, 0.11418, 0.081756, 0.087083, 0.1054, 0.10537, 0.11359, 0.13488, 0.16173, 0.12994, 0.12014, 0.12781, 0.13804, 0.13087, 0.15475, 0.19672, 0.2125, 0.22211, 0.18445, 0.1756, 0.17569, 0.17038, 0.1665, 0.16683, 0.31812, 0.36717, 0.36721, 0.40739, 0.36854, 0.23247, 0.28969, 0.25209, 0.20531, 0.21418, 0.21415, 0.19564, 0.21829, 0.14829, 0.083992, 0.048218, 0.048211, 0.048201], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"harcèlement moral": {
men: [0.24339, 0.38971, 0.65868, 0.65865, 0.43408, 0.4336, 0.53658, 0.44087, 0.44111, 0.44123, 0.44133, 0.44135, 0.44121, 0.55224, 0.64725, 0.55956, 0.56027, 0.56024, 0.95715, 0.95976, 0.96074, 0.96082, 0.96016, 0.29605, 0.21216, 0.21214, 0.16998, 0.17043, 0.0843, 0.084255, 0.084215, 0.084248, 0.084211, 0.084169, 0, 0, 0, 0, 0, 0, 0.067589, 0.08992, 0.16679, 0.15226, 0.12518, 0.12516, 0.12518, 0.12049, 0.13034, 0.14475, 0.15396, 0.15393, 0.15392, 0.15386, 0.076123, 0.092075, 0.03366, 0.035092, 0.043524, 0.042673, 0.042667, 0.084293, 0.086263, 0.089062, 0.089148, 0.099734, 0.085865, 0.085888, 0.15931, 0.10655, 0.099968, 0.095131, 0.095154, 0.096862, 0.078252, 0.044412, 0.036935, 0.033803, 0.033799, 0.0096102, 0.011265, 0.011265, 0, 0, 0.055621, 0.061474, 0.061481, 0.033448, 0.039463, 0.043413, 0.055876, 0.068129, 0.06807, 0.067977, 0.057337, 0.053827, 0.053859, 0.05383, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médecin vétérinaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40285, 0.40289, 0.40281, 0.40287, 0.40269, 0.40288, 0.40277, 0.40243, 0.40234, 0.40232, 0.40218, 0.94854, 0.54789, 0.54811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94835, 0.94857, 0.94827, 0.94809, 0.94754, 0.94846, 0.94858, 0.94847, 0.9487, 0.94865, 0.94867, 0.94936, 0.94913, 0.94899, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champ pétrolifère": {
men: [0.04139, 0.039358, 0.049085, 0.054522, 0.072018, 0.13011, 0.10504, 0.10515, 0.10521, 0.10523, 0.14812, 0.14813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9423, 0.94096, 0.94056, 0.94062, 0.44506, 0.44498, 0.44505, 0.44485, 0.44506, 0.44494, 0.44456, 0.44446, 0.44444, 0.44429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93876, 0.93888, 0.93893, 0.93947, 0.93896, 0.9388, 0.93832, 0.93842, 0.93848, 0.93834, 0.1272, 0.12718, 0.12717, 0.12727, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champs pétroliers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047425, 0.049118, 0.052812, 0.079079, 0.071929, 0.075079, 0.075196, 0.075203, 0.076757, 0.076752, 0.076744, 0.076735, 0.076726, 0.10227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94484, 0.94523, 0.94535, 0.95179, 0.95227, 0.95186, 0.95195, 0.95197, 0.95116, 0.94985, 0.94997, 0.95003, 0.95057, 0.95006, 0.94319, 0.94271, 0.94281, 0, 0, 0, 0, 0.12486, 0.12496, 0.41116, 0.4111, 0.41101], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"métaux précieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065141, 0.042711, 0.042715, 0.08252, 0.066908, 0.07456, 0.064872, 0.07021, 0.074041, 0.10733, 0.14471, 0.14509, 0.14521, 0.18475, 0.14507, 0.23532, 0.20921, 0.096909, 0.13365, 0.13354, 0.18196, 0.18189, 0.18184, 0.099831, 0.099773, 0.09963, 0.099587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027246, 0.027247, 0.027244, 0.027263, 0.027228, 0.15768, 0.17231, 0.17236, 0.17538, 0.17542, 0.45364, 0.63124, 0.63093, 0.49287, 0.40565, 0.38394, 0.38386, 0.35779, 0.33204, 0.068145, 0.064028, 0.062663, 0.06266, 0.062661, 0, 0, 0, 0, 0, 0, 0, 0.11157, 0.21526, 0.31712, 0.30865, 0.31956, 0.3196, 0.31962, 0.3198, 0.38019, 0.61205, 0.58133, 0.63585, 0.63589, 0.63579, 0.54355, 0.49595, 0.37994, 0.45894, 0.53794, 0.53786, 0.53775], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"benzène": {
men: [0.055417, 0.046619, 0.044462, 0.04446, 0.041514, 0.037788, 0.037773, 0.033972, 0.038889, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026979, 0.026957, 0.026473, 0.031193, 0.030508, 0.030508, 0.031221, 0.065363, 0.080429, 0.080434, 0.072647, 0.086304, 0.092458, 0.11719, 0.18467, 0.18462, 0.16328, 0.19721, 0.23162, 0.23154, 0.23167, 0.44606, 0.44624, 0.44593, 0.47755, 0.47757, 0.4775, 0.47784, 0.52769, 0.52746, 0.70979, 0.70999, 0.71017, 0.71035, 0.79292, 0.73977, 0.7394, 0.66343, 0.83565, 0.83539, 0.83522, 0.23233, 0.14083, 0.12788, 0.10976, 0.099477, 0.099472, 0.099474, 0, 0, 0.061025, 0.055557, 0.055564, 0.051621, 0.051647, 0.095842, 0.09585, 0.10735, 0.13657, 0.17048, 0.1705, 0.17051, 0.17061, 0.22218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sables bitumineux": {
men: [0.057517, 0, 0.075924, 0.077378, 0.079716, 0.084158, 0.089054, 0.072208, 0.072247, 0.074003, 0.07402, 0.074024, 0.089652, 0.16945, 0.16947, 0.17467, 0, 0, 0, 0, 0, 0.24377, 0.2436, 0.33809, 0.33805, 0.33801, 0.33798, 0.16395, 0.16409, 0.19496, 0.19487, 0.19495, 0.19486, 0.19477, 0.067563, 0, 0, 0, 0, 0, 0, 0, 0, 0.038271, 0.038274, 0.038268, 0.038273, 0.038256, 0.059863, 0.04624, 0.059694, 0.04051, 0.043349, 0.043334, 0.043359, 0.04543, 0.045448, 0, 0, 0, 0, 0, 0, 0, 0.090464, 0.16007, 0.15979, 0.13312, 0.13865, 0.1585, 0.15842, 0.24201, 0.24207, 0.242, 0.24195, 0.24828, 0.26894, 0.32721, 0.27382, 0.27589, 0.28563, 0.33208, 0.4357, 0.55174, 0.4235, 0.37387, 0.23691, 0.23692, 0.23703, 0.23693, 0.21268, 0.103, 0.1126, 0.16079, 0.16081, 0.16082, 0.16091, 0.10631, 0.16741, 0.16732, 0.37049, 0.37051, 0.37045, 0.37037, 0.42869, 0.69916, 0.69971, 0.2897, 0.28966, 0.2896], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transport maritime": {
men: [0.019898, 0.018745, 0.021805, 0.023226, 0.023224, 0.022692, 0.022683, 0.023395, 0.015547, 0.010054, 0.010056, 0.010057, 0.010762, 0.014554, 0.017211, 0.017959, 0.017982, 0.017981, 0.017982, 0.01894, 0.01897, 0.019404, 0.032308, 0.19498, 0.19496, 0.19494, 0.26276, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044311, 0.1879, 0.63409, 0.63414, 0.63419, 0.63408, 0.63417, 0.63388, 0.63419, 0.63401, 0.38009, 0.4106, 0.41058, 0.29652, 0, 0, 0, 0, 0, 0, 0, 0.065068, 0.064984, 0.064956, 0.065517, 0.068328, 0.056145, 0.062342, 0.071273, 0.071376, 0.07134, 0.08514, 0.057885, 0.075128, 0.075114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5214, 0.52146, 0.52149, 0.52141, 0.5213, 0.94591, 0.94582, 0.94657, 0.94686, 0.94672, 0.94652], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"études cliniques": {
men: [0.2383, 0.33194, 0.33162, 0.33161, 0.38444, 0.38401, 0.3688, 0.32221, 0.42564, 0.42575, 0.42584, 0.36453, 0.29418, 0.21644, 0.18838, 0.10563, 0.10576, 0.10576, 0.10577, 0.085216, 0, 0, 0, 0, 0, 0, 0, 0.18112, 0.24293, 0.21187, 0.15122, 0.15128, 0.15121, 0.10857, 0.10542, 0.095792, 0.085157, 0.058997, 0.058983, 0.057839, 0.057805, 0.03647, 0.036454, 0.060024, 0.083916, 0.083901, 0.083913, 0.096568, 0.094574, 0.10264, 0.11623, 0.33425, 0.33424, 0.35736, 0.2067, 0.19973, 0.22825, 0.194, 0.16079, 0.16079, 0.15263, 0.1468, 0.18084, 0.17335, 0.16222, 0.14799, 0.14803, 0.14459, 0.19406, 0.20939, 0.18816, 0.1882, 0.18237, 0.18231, 0.18706, 0.13797, 0.085564, 0.078835, 0.094586, 0.10522, 0.10522, 0.10798, 0.10697, 0.12524, 0.11883, 0.11329, 0.096347, 0.09274, 0.092787, 0.15128, 0.27031, 0.28021, 0.23724, 0.21767, 0.2177, 0.20051, 0.16086, 0.10503, 0.124, 0.068095, 0.087158, 0.09684, 0.091555, 0.047002, 0.044763, 0.041275, 0.041308, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 