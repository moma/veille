var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"diversité génétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97031, 0.97031, 0.97354, 0.58508, 0.39908, 0.39833, 0.39865, 0.34627, 0.26753, 0.26753, 0.26823, 0.26823, 0.1947, 0.1947, 0, 0, 0, 0, 0, 0.3395, 0.30069, 0.32728, 0.41184, 0.41184, 0.41145, 0.41062, 0.27886, 0.27871, 0.27871, 0.27871, 0.27792, 0.27769, 0.22867, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18722, 0.18726, 0.96899, 0.97223, 0.97154, 0.97027, 0.97092, 0.97112, 0.97262, 0.77138, 0.81764, 0.69785, 0.69716, 0.69733, 0.68177, 0.68172, 0.52981, 0.37925, 0.37962, 0.38067, 0.20646, 0.20646], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.040507, 0.13418, 0.39491, 0.97951, 0.97933, 0.97972, 0.97972, 0.97722, 0.9776, 0.97799, 0.97826, 0.97806, 0.97806, 0.97806, 0.97111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9583, 0.95866, 0.95789, 0.95695, 0.95718, 0.95751, 0.95745, 0.95873, 0.95898, 0.95992, 0.96258, 0.96258, 0.96258], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"trame verte": {
men: [0.15366, 0.15982, 0.23672, 0.23672, 0.23672, 0.23656, 0.23623, 0.22031, 0.2757, 0.16521, 0.16521, 0.054347, 0.054474, 0.066156, 0.23259, 0.23344, 0.32791, 0.32774, 0.32774, 0.085976, 0.086624, 0.10516, 0.10496, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13821, 0.10307, 0.098373, 0.098349, 0.11217, 0.11223, 0.19083, 0.19083, 0.19065, 0.19027, 0.19056, 0.18105, 0.18105, 0.18105, 0.11666, 0.16766, 0.16945, 0.16923, 0.13024, 0.13029, 0.13029, 0.12152, 0.12157, 0.12162, 0.12165, 0.12247, 0.11215, 0.11215, 0.10624, 0.042018, 0.040206, 0.040229, 0, 0.09261, 0.092481, 0.11896, 0.1071, 0.088707, 0.074379, 0.074381, 0.099189, 0.099128, 0.098908, 0.092377, 0.10214, 0.10219, 0.085114, 0, 0.036545, 0.06958, 0.075542, 0.092344, 0.20607, 0.20608, 0.20602, 0.17647, 0.16082, 0.18713, 0.18709, 0.33417, 0.24929, 0.24946, 0.23105, 0.21267, 0.17258, 0.1548, 0.12143, 0.11883, 0.11386, 0.11952, 0.11952, 0.12957, 0.1296, 0.035493, 0.040836, 0.040836, 0.036849], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94533, 0.9457, 0.94438, 0.94642, 0.94499, 0.94553, 0.94534, 0.94537, 0.94537, 0.94479, 0.94269, 0.94174, 0.94157, 0.94207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux côtières": {
men: [0, 0, 0, 0, 0, 0, 0.53971, 0.60497, 0.53977, 0.54011, 0.54011, 0.54023, 0.5415, 0.5418, 0.5418, 0.54379, 0.54424, 0.54396, 0.54396, 0.54577, 0.53861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38803, 0.38804, 0.38793, 0.38792, 0.31379, 0.3136, 0.31353, 0.31331, 0.3129, 0.31311, 0.31318, 0.31366, 0.23291, 0.233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces exogènes": {
men: [0, 0, 0, 0, 0, 0, 0.75666, 0.7229, 0.65042, 0.65083, 0.65083, 0.65098, 0.65251, 0.65287, 0.65287, 0.65527, 0.6558, 0.65547, 0.65547, 0.65765, 0.40035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"atteintes à l' environnement": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048151, 0.039237, 0.039304, 0.04166, 0.056531, 0.080427, 0.080552, 0.080508, 0.068796, 0.068796, 0.068603, 0.078638, 0.078607, 0.11784, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15175, 0.15165, 0.95025, 0.94992, 0.94994, 0.94967, 0.94965, 0.94987, 0.9493, 0.9491, 0.94842, 0.94718, 0.94782, 0.94801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ressources halieutiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97306, 0.97306, 0.97371, 0.97371, 0.97335, 0.97956, 0.97956, 0.97932, 0.97913, 0.97963, 0.98129, 0.33208, 0.33177, 0.26334, 0.1703, 0.17021, 0.17021, 0.17021, 0.15645, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution des sols": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5264, 0.45669, 0.49003, 0.49003, 0.48985, 0.48878, 0.68429, 0.68412, 0.68398, 0.68433, 0.6855, 0.6855, 0.35971, 0.35899, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion durable": {
men: [0.12048, 0.14103, 0.13935, 0.13935, 0.13935, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26701, 0.26701, 0.26719, 0.26719, 0.20125, 0.23487, 0.31976, 0.31968, 0.31962, 0.31978, 0.32033, 0.24604, 0.1636, 0.12294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04664, 0.050041, 0.049988, 0.070358, 0.070199, 0.059531, 0.059294, 0.061811, 0.077173, 0.077863, 0.071035, 0.067631, 0.06759, 0.076694, 0.044079, 0.044597, 0.043064, 0.024598, 0.022678, 0.05923, 0.058299, 0.070605, 0.044566, 0.044577, 0.052352, 0.070839, 0.053868, 0.033602, 0.036807, 0.03857, 0.040388, 0.040388], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêts primaires": {
men: [0.062718, 0.47722, 0.532, 0.63528, 0.63528, 0.63483, 0.58009, 0.61622, 0.61622, 0.55281, 0.55281, 0.55294, 0.55424, 0.58668, 0.5687, 0.32249, 0, 0, 0, 0, 0, 0, 0.23298, 0.35463, 0.19399, 0.19348, 0.1774, 0.10743, 0.12348, 0.1229, 0.1229, 0.12298, 0.12298, 0.10558, 0.088658, 0.093719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"capacité de stockage": {
men: [0, 0.39478, 0.46151, 0.46151, 0.41825, 0.43716, 0.35061, 0.37174, 0.37174, 0.37198, 0.37198, 0.37206, 0.49766, 0.49793, 0.4764, 0.12713, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"milieu marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25419, 0.25419, 0.25512, 0.25533, 0.28912, 0.28912, 0.2316, 0.23334, 0.23446, 0.33923, 0.43795, 0.43491, 0.43377, 0.43377, 0, 0, 0.33647, 0.33647, 0.3367, 0.3367, 0.55877, 0.55755, 0.55755, 0.33575, 0.33569, 0.33586, 0.33643, 0.33643, 0.33611, 0.45119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.032511, 0.030654, 0.030173, 0.028274, 0.037996, 0.037989, 0.040011, 0.038304, 0.038263, 0.038297, 0.042013, 0.040168, 0.048846, 0.03368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"patrimoine naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3845, 0.4977, 0.19928, 0.19534, 0.17956, 0.17963, 0.17963, 0.17917, 0.19061, 0.19721, 0.19726, 0.19988, 0.19988, 0.20671, 0.074848, 0, 0, 0, 0, 0.08471, 0.084592, 0.1322, 0.132, 0.10373, 0.10371, 0.14024, 0.14024, 0.14015, 0.19604, 0.15216, 0.15214, 0.14444, 0.21928, 0.13711, 0.17289, 0.15205, 0.14296, 0.19805, 0.19798, 0.094313, 0.1259, 0.12589, 0.11791, 0.13093, 0.12908, 0.13249, 0.13232, 0.13241, 0.12035, 0.10114, 0.13761, 0.13315, 0.12717, 0.1744, 0.14725, 0.1473, 0.14729, 0.23858, 0.25178, 0.24064, 0.2413, 0.2413, 0.2413], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones humides": {
men: [0.20099, 0.32907, 0.32949, 0.32949, 0.32949, 0.32926, 0, 0, 0, 0.03887, 0.035387, 0.030273, 0.026908, 0.025461, 0.025181, 0.024554, 0.024574, 0.023133, 0.023133, 0.02321, 0.023385, 0.028462, 0.03141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060622, 0.17251, 0.17251, 0.16916, 0.1963, 0.21299, 0.20605, 0.13313, 0.11598, 0.106, 0.084572, 0.091148, 0.084526, 0.083407, 0.14495, 0.12518, 0.11223, 0.10737, 0.094374, 0.094412, 0.095805, 0.088157, 0.065737, 0.11864, 0.1356, 0.13436, 0.13137, 0.12755, 0.08455, 0.064892, 0.09318, 0.094576, 0.090756, 0.089598, 0.089473, 0.11148, 0.17966, 0.071772, 0.071758, 0.073384, 0.09139, 0.10483, 0.059415, 0.057924, 0, 0, 0, 0.13184, 0.13195, 0.13881, 0.097646, 0.099199, 0.12458, 0.094197, 0.09417, 0.095398, 0.10232, 0.096026, 0.096006, 0.094358, 0.096135, 0.044293, 0.044302, 0.035491, 0.068174, 0.0682, 0.048578, 0.064747, 0.064763, 0.048432, 0.059567, 0.07803, 0.071488, 0.083968, 0.053302, 0.053302, 0.04587], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"perte de biodiversité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.031137, 0.031111, 0.031099, 0.028235, 0.033881, 0.035379, 0.035379, 0.026303, 0.022908, 0.033264, 0.032782, 0.032775, 0.032775, 0.032775, 0, 0, 0, 0, 0, 0, 0, 0, 0.092397, 0.087883, 0.10425, 0.12794, 0.12117, 0.12109, 0.079999, 0.082821, 0.081651, 0.082188, 0.077132, 0.077049, 0.10689, 0.1068, 0.080691, 0.074419, 0.074393, 0.056108, 0.057737, 0.055363, 0.21138, 0.24672, 0.29133, 0.292, 0.30716, 0.30736, 0.29148, 0.33064, 0.37398, 0.44848, 0.43208, 0.43166, 0.43176, 0.45708, 0.37517, 0.30465, 0.27852, 0.30419, 0.30504, 0.30504, 0.30504], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces sauvages": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18274, 0.24412, 0.21508, 0.53712, 0.53748, 0.53759, 0.53842, 0.49985, 0.58009, 0.57962, 0.57905, 0.57919, 0.57939, 0.52698, 0.1391, 0.067306, 0.074585, 0.074792, 0.068197, 0.068197], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50565, 0.50579, 0.58348, 0.54501, 0.5113, 0.5123, 0.79024, 0.79025, 0.72268, 0.71904, 0.71933, 0.71833, 0.71988, 0.71879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"richesses naturelles": {
men: [0, 0, 0, 0, 0, 0, 0.094249, 0.13534, 0.13534, 0.11796, 0.097917, 0.088467, 0.088675, 0.088723, 0.076286, 0.074502, 0.069726, 0.069691, 0.069691, 0.093786, 0, 0, 0, 0, 0.017261, 0.019422, 0.019422, 0.019473, 0.026539, 0.028046, 0.033348, 0.019857, 0.019857, 0.019553, 0.030391, 0.011323, 0.01132, 0.011318, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24856, 0.24863, 0.24858, 0.2102, 0.2102, 0.21061, 0.211, 0.25309, 0.4022, 0.40017, 0.35055, 0.4715, 0.47252, 0.41128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038496, 0.035346, 0.037321, 0.082221, 0.075414, 0.075146, 0.094869, 0.087699, 0.089462, 0.089443, 0.084, 0.078112, 0.078164, 0.078181, 0.10951, 0.12323, 0.10503, 0.03777, 0.044191, 0.045407, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"année internationale de la biodiversité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085302, 0.092961, 0.1174, 0.11749, 0.18079, 0.18492, 0.22808, 0.2298, 0.488, 0.25761, 0.25782, 0.25603, 0.25536, 0.29381, 0.15416, 0.15416, 0.089227, 0.073686, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078201, 0.074909, 0.16858, 0.16855, 0.1395, 0.1395, 0.18144, 0.21337, 0.26718, 0.26726, 0.24638, 0.24638, 0.23599, 0.2447, 0.23246, 0.24671, 0.11264, 0.11207, 0.18133, 0.16798, 0.062313, 0.063941, 0.047643, 0.047634, 0.055228, 0.055228, 0.060659, 0.063539, 0.07261, 0.059123, 0.059155, 0.032089, 0.026473, 0.02725, 0, 0, 0, 0, 0, 0, 0, 0.026097, 0.062545, 0.061702, 0.057939, 0.062979, 0.060352, 0.060365, 0.06686, 0.075704, 0.07962, 0.085651, 0.084017, 0.098228, 0.10201, 0.054532, 0.0063661, 0.0067997, 0.0074147, 0.0068295, 0.0081521, 0.0081521], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équilibre biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11188, 0.11158, 0.11158, 0.11188, 0.11188, 0.11135, 0.11135, 0.11142, 0.11142, 0.11138, 0.11114, 0.11114, 0.11111, 0.04181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34817, 0.34769, 0.34843, 0.34791, 0.34811, 0.34804, 0.34805, 0.34805, 0.34783, 0.34706, 0.96012, 0.95995, 0.96046, 0.96308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diversité biologique": {
men: [0.11817, 0.15794, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098487, 0.098228, 0.098228, 0.96215, 0.96215, 0.040235, 0.023889, 0.023905, 0.023905, 0.029761, 0.029696, 0.029696, 0.028354, 0.042165, 0.034833, 0.034892, 0.031594, 0.024865, 0.11734, 0.10796, 0.114, 0.114, 0.114, 0.19067, 0.16145, 0.16138, 0.15718, 0.13745, 0.13751, 0.13388, 0.12842, 0.15431, 0.027325, 0.028815, 0.095575, 0.094756, 0.094756, 0.064573, 0.062743, 0.062744, 0.067493, 0.073141, 0.07317, 0.073842, 0.073906, 0.075135, 0.076054, 0.10206, 0.023374, 0.02257, 0.022556, 0.012022, 0.013355, 0.012379, 0.011067, 0.026367, 0.025105, 0.038385, 0.077551, 0.075743, 0.073713, 0.07166, 0.064846, 0.062457, 0.060045, 0.070408, 0.099342, 0.10219, 0.10989, 0.10419, 0.096976, 0.093215, 0.078494, 0.10592, 0.10462, 0.10613, 0.11198, 0.11654, 0.12115, 0.12135, 0.08708, 0.079331, 0.06451, 0.070723, 0.090587, 0.096733], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protection de la biodiversité": {
men: [0.015234, 0.014251, 0, 0, 0, 0, 0.077593, 0.068616, 0.068616, 0.072854, 0.072854, 0.072871, 0.086694, 0.099868, 0.11054, 0.12031, 0.1204, 0.1505, 0.1505, 0.16615, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37859, 0.088118, 0.088118, 0.088096, 0.14066, 0.14074, 0.14098, 0.14098, 0.11733, 0.074116, 0.07423, 0.07419, 0.07419, 0.07191, 0.029425, 0.046992, 0.046974, 0.12518, 0.10046, 0.1005, 0.094119, 0.062926, 0.059684, 0.074871, 0.074891, 0.074876, 0.074876, 0.076555, 0.082551, 0.080504, 0.11576, 0.069867, 0.078454, 0.078485, 0.083414, 0.12757, 0.14622, 0.1463, 0.14627, 0.1822, 0.1822, 0.18209, 0.18169, 0.18759, 0.13446, 0.11733, 0.082423, 0.082335, 0.082408, 0.11117, 0.069349, 0.047237, 0.044339, 0.029515, 0.029507, 0.029506, 0.055501, 0.04266, 0.040559, 0.07072, 0.067707, 0.064196, 0.064209, 0.058011, 0.073162, 0.083306, 0.075958, 0.072039, 0.072056, 0.072081, 0.060368, 0.080672, 0.096938, 0.056412, 0.068285, 0.079661, 0.079463], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bâtiments neufs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.073504, 0.073504, 0.073521, 0.073693, 0.14082, 0.14082, 0.14134, 0.96186, 0.96138, 0.96138, 0.96457, 0.97183, 0.97649, 0.97465, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021597, 0.021548, 0.026293, 0.024075, 0.024066, 0.025725, 0.025718, 0.034393, 0.034401, 0.031216, 0.014409, 0.012947, 0.01293, 0.012938, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"wwf-france": {
men: [0.11775, 0.11271, 0.11286, 0.11286, 0.11286, 0, 0.038943, 0.038919, 0.038919, 0.031018, 0.031018, 0.031025, 0.032332, 0.03401, 0.033686, 0.034966, 0.034994, 0.034976, 0.034976, 0.11091, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075047, 0.073758, 0.073787, 0.071803, 0.18715, 0.17113, 0.178, 0.17805, 0.17971, 0.17971, 0.17971, 0.33926, 0.33989, 0.35912, 0.27895, 0.28689, 0.287, 0.30318, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.024954, 0.076033, 0.075952, 0.086182, 0.15183, 0.17756, 0.23826, 0.21223, 0.20038, 0.20032, 0.20339, 0.17205, 0.1756, 0.13315, 0.095249, 0.073387, 0.072039, 0.066766, 0.032618, 0.032929, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1312, 0.69676, 0.69676, 0.6986, 0.5582, 0.55556, 0.40464, 0.40491, 0.40491, 0.40476, 0.40387, 0.48705, 0.48692, 0.34356, 0.32851, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protection de la nature": {
men: [0, 0, 0, 0, 0, 0, 0.061274, 0.049942, 0.049942, 0.053043, 0.054198, 0.058016, 0.070169, 0.073841, 0.08741, 0.10414, 0.1124, 0.17719, 0.1065, 0.091059, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03962, 0.048764, 0.048701, 0.059372, 0.059395, 0.052439, 0.053641, 0.051878, 0.07677, 0.051043, 0.1418, 0.13767, 0.14468, 0.15601, 0.12457, 0.14291, 0.11845, 0.078858, 0.10424, 0.10999, 0.11023, 0.11152, 0.11159, 0.11521, 0.060839, 0.032706, 0.028329, 0.025435, 0.025324, 0.013209, 0.012904, 0.014109, 0.045346, 0.050823, 0.050708, 0.049417, 0.059661, 0.063665, 0.069458, 0.11707, 0.1393, 0.18775, 0.17065, 0.166, 0.19271, 0.24386, 0.09474, 0.073701, 0.073814, 0.15607, 0.11006, 0.11992, 0.10855, 0.10857, 0.09989, 0.099884, 0.11603, 0.08574, 0.091286, 0.087677, 0.090401, 0.090142], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"récifs coralliens": {
men: [0.31192, 0.31115, 0.29426, 0.29426, 0.29426, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075916, 0.062105, 0.072401, 0.072383, 0.11508, 0.11514, 0.11533, 0.11533, 0.12828, 0.15566, 0.1559, 0.15581, 0.15581, 0.25945, 0.12423, 0.091858, 0.091822, 0.091703, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0909, 0.090839, 0.17194, 0.17188, 0.17189, 0.17184, 0.18797, 0.18801, 0.1879, 0.18786, 0.18239, 0.18215, 0.17896, 0.17899, 0.14522, 0.11644, 0.053012, 0.083511, 0.076784, 0.076802, 0.03599, 0.035987, 0.017955, 0.017959, 0.019399, 0.019453, 0.020742, 0.020742], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"méduses": {
men: [0, 0, 0, 0, 0, 0, 0.19722, 0.24392, 0.2201, 0.18432, 0.18712, 0.18716, 0.18791, 0.17709, 0.17709, 0.16075, 0.16546, 0.16537, 0.16537, 0.15108, 0.063178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14155, 0.14152, 0.14142, 0.14124, 0.14133, 0.14136, 0.14158, 0.14822, 0.2111, 0.21093, 0.21072, 0.27749, 0.9646, 0.96453, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 