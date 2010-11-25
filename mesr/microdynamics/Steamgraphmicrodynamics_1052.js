var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"douleurs musculaires": {
men: [0.5572, 0.55686, 0.36303, 0.36263, 0.38992, 0.38974, 0.38938, 0.37253, 0.50912, 0.50884, 0.50894, 0.50842, 0.50837, 0.043646, 0.043648, 0.043639, 0.066825, 0.066601, 0, 0, 0, 0, 0.066563, 0.066592, 0.06659, 0.066631, 0.055056, 0.11315, 0.11317, 0.11324, 0.11327, 0.11378, 0.11381, 0.11394, 0.11388, 0.11372, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27292, 0.27325, 0.2732, 0.37569, 0.403, 0.55628, 0.55602, 0.95576, 0.95585, 0.95602, 0.95607, 0.95706, 0.95686, 0.95688, 0.95065, 0.95018, 0.95058, 0.94294, 0.93672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95441, 0.95499, 0.95567, 0.95491, 0.95612, 0.95595, 0.95482, 0.95454, 0.95545, 0.95408, 0.95387, 0.95498, 0.95511, 0.95538, 0, 0.11708, 0.057097, 0.057088, 0.057049, 0.10826], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abattage rituel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21915, 0.21897, 0.55309, 0.47964, 0.56298, 0.56273, 0.51933, 0.51936, 0.51913, 0.66654, 0.6669, 0.68487, 0.68481, 0.68523, 0.68935, 0.68928, 0.57877, 0.75289, 0.58928, 0.58977, 0.95358, 0.95474, 0.95455, 0.95475, 0.95354, 0.94918, 0.94874, 0.94855, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95068, 0.95136, 0.9506, 0.95181, 0.95164, 0.95052, 0.95023, 0.95114, 0.94978, 0.94957, 0.95067, 0.95081, 0.95107, 0.95028, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pfizer": {
men: [0, 0, 0, 0, 0, 0, 0.3674, 0.30578, 0.30545, 0.30528, 0.26971, 0.27974, 0.27971, 0.23899, 0.2603, 0.3116, 0.31155, 0.3105, 0.31045, 0.30655, 0.20643, 0.20953, 0.1813, 0.15975, 0.18995, 0.16029, 0.13439, 0.16575, 0.12614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013625, 0.012524, 0.01208, 0.010899, 0.012307, 0.012099, 0.012095, 0.012641, 0.0051509, 0.0051572, 0.059886, 0.080184, 0.080082, 0.082722, 0.16979, 0.24127, 0.2931, 0.31622, 0.34611, 0.34805, 0.34798, 0.42572, 0.72756, 0.68092, 0.63461, 0.63816, 0.63832, 0.63855, 0.68415, 0.67808, 0.68655, 0.71533, 0.73677, 0.72107, 0.72204, 0.69701, 0.69335, 0.75097, 0.89089, 0.89491, 0.89604, 0.75366, 0.75816, 0.71866, 0.69533, 0.68844, 0.62272, 0.6412, 0.64129, 0.62739, 0.62414, 0.59251, 0.55945, 0.52882, 0.52846, 0.58578], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alzheimer": {
men: [0, 0, 0, 0, 0.0061611, 0.066523, 0.1609, 0.19233, 0.086278, 0.073378, 0.06831, 0.070919, 0.066322, 0.053887, 0.064859, 0.064844, 0.066345, 0.063497, 0.062315, 0.049756, 0.013344, 0.011044, 0.015044, 0.016821, 0.018168, 0.01818, 0.018548, 0.017949, 0.0059471, 0.0059508, 0.0052182, 0.0055224, 0.0054588, 0.0046007, 0.0044305, 0.0048793, 0.0040795, 0.0038311, 0.0034696, 0.0031901, 0.0031244, 0.0036438, 0.013212, 0.011277, 0.012117, 0.012234, 0.01232, 0.012962, 0.01342, 0.014222, 0.017702, 0.019105, 0.022333, 0.019336, 0.014495, 0.0087352, 0, 0, 0, 0, 0, 0, 0.0018325, 0.0017686, 0.011734, 0.014764, 0.014671, 0.015836, 0.040429, 0.08042, 0.10253, 0.098995, 0.11639, 0.12597, 0.13362, 0.22396, 0.26297, 0.32373, 0.3414, 0.3755, 0.36577, 0.36591, 0.33119, 0.33213, 0.33554, 0.41535, 0.44194, 0.45467, 0.43559, 0.46146, 0.50203, 0.44106, 0.4413, 0.4465, 0.47621, 0.47612, 0.46853, 0.47082, 0.46677, 0.39125, 0.34631, 0.34736, 0.3575, 0.32221, 0.27304, 0.2735, 0.25947, 0.20678, 0.20377, 0.20102], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"difficultés respiratoires": {
men: [0.31849, 0.3183, 0.31837, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8959, 0.79516, 0.79535, 0.79498, 0.79482, 0.7949, 0.79504, 0.79508, 0.85062, 0.71265, 0.71267, 0.73319, 0.73283, 0.73314, 0.22901, 0.32204, 0.32216, 0.3225, 0.22112, 0.22095, 0.22105, 0.22111, 0.22095, 0.40382, 0.40357, 0, 0, 0, 0, 0, 0.53492, 0.53429, 0.95214, 0.95305, 0.95169, 0.95148, 0.95258, 0.95272, 0.95298, 0.95218, 0.95121, 0.95092, 0.95078, 0.95013, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géant pharmaceutique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16913, 0.42597, 0.4259, 0.42447, 0.4244, 0.42395, 0.76704, 0.95788, 0.95862, 0.95905, 0.95902, 0.95961, 0.95848, 0.95798, 0.95514, 0, 0, 0, 0, 0.96278, 0.96224, 0.93214, 0.93213, 0.93164, 0.93109, 0.93106, 0.55552, 0.55536, 0.55499, 0.55453, 0.55415, 0.55403, 0.5538, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49599, 0.49575, 0.49596, 0.49648, 0.4966, 0.49679, 0.95638, 0.95659, 0.1648, 0.16488, 0.16492, 0.1648, 0.16503, 0.16492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"muqueuses": {
men: [0.022211, 0.022198, 0.019277, 0.019256, 0.035373, 0.027472, 0.027447, 0.01062, 0.010608, 0.0090151, 0.009017, 0.0090078, 0.0084521, 0.011352, 0.01616, 0.016157, 0.018066, 0.018006, 0, 0, 0, 0, 0, 0, 0, 0, 0.34923, 0.34904, 0.41145, 0.41171, 0.50569, 0.46304, 0.46316, 0.39043, 0.39021, 0.49191, 0.49191, 0.49165, 0.49136, 0.49134, 0.35358, 0.27863, 0.16832, 0.16818, 0, 0, 0, 0, 0, 0.23595, 0.23585, 0.23567, 0.2358, 0.41965, 0.41961, 0.49884, 0.69511, 0.47962, 0.29667, 0.33945, 0.33936, 0.3186, 0.29537, 0.24115, 0.24111, 0.25029, 0.23827, 0.088893, 0.12619, 0.32295, 0.36995, 0.52011, 0.68893, 0.67186, 0.67172, 0.46617, 0.49403, 0.49379, 0.494, 0.49047, 0.50717, 0.50736, 0.53772, 0.38758, 0.31192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21182, 0.17572, 0.17588, 0.29691, 0.29685, 0.29719, 0.29723, 0.29732, 0.29707, 0.22587, 0.2258, 0.40157, 0.4013, 0.52137], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"douleurs articulaires": {
men: [0.027691, 0.019033, 0.10532, 0.10521, 0.11506, 0.11501, 0.1149, 0.089262, 0.089164, 0.089115, 0.089134, 0.089043, 0.089033, 0.096377, 0.14507, 0.20531, 0.076928, 0.07667, 0, 0, 0, 0, 0.07068, 0.036529, 0.032057, 0.032077, 0.0255, 0.025487, 0.025492, 0.025508, 0.025514, 0.02563, 0.025637, 0.027815, 0.027799, 0.02776, 0, 0, 0, 0, 0, 0.55442, 0.55405, 0.29495, 0.29474, 0.29468, 0.29456, 0.16993, 0.24669, 0.2467, 0.24659, 0.27852, 0.27867, 0.27862, 0.27859, 0.12677, 0.12681, 0.19122, 0.19123, 0.12895, 0.12891, 0.30531, 0.19677, 0.19701, 0.19697, 0.19701, 0.25893, 0.31254, 0.31239, 0.31233, 0.44831, 0.23368, 0.23369, 0.2165, 0.21645, 0.1883, 0.18836, 0.18827, 0.18835, 0.18855, 0.15981, 0.12854, 0.30709, 0.4687, 0.4238, 0.68936, 0.68954, 0.96465, 0.96596, 0.96536, 0.96469, 0.96526, 0.96596, 0.96518, 0.96641, 0.96624, 0.96018, 0, 0, 0, 0, 0, 0, 0, 0, 0.24649, 0.086702, 0.086689, 0.08663, 0.15963], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"endorphines": {
men: [0, 0, 0, 0, 0.024819, 0.024808, 0.024785, 0.024798, 0.024771, 0.024757, 0.024762, 0.024737, 0.024734, 0.024761, 0.024762, 0.020976, 0.030195, 0.030094, 0, 0, 0, 0, 0, 0, 0, 0, 0.57085, 0.57055, 0.57067, 0.71379, 0.95195, 0.95628, 0.95653, 0.95761, 0.95707, 0.95572, 0.95571, 0.9552, 0.95464, 0.95461, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95326, 0.95418, 0.95281, 0.9526, 0.95371, 0.95384, 0.95411, 0.95331, 0.95233, 0.95204, 0.9519, 0.95125, 0.95098], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35239, 0.35248, 0.52736, 0.52707, 0.52632, 0.43541, 0.33503, 0.33484, 0.33483, 0.46909, 0.46896, 0.3637, 0.3634, 0.36315, 0, 0, 0, 0.11674, 0.11675, 0.13323, 0.17636, 0.17646, 0.17643, 0.17641, 0.17652, 0.24912, 0.24909, 0.2491, 0.45926, 0.45914, 0.94808, 0.94243, 0.94357, 0.94339, 0.94359, 0.94239, 0.94262, 0.94218, 0.942, 0.94209, 0.94226, 0.9423, 0.94328, 0.94308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"courant électrique": {
men: [0, 0, 0, 0, 0.012578, 0.012572, 0.018714, 0.018723, 0.0094466, 0.0083535, 0.0083552, 0.0083466, 0.0083458, 0.0083548, 0.014864, 0.014861, 0.014858, 0.014808, 0, 0.10366, 0.10366, 0.34453, 0.69844, 0.95709, 0.95706, 0.95765, 0.95653, 0.76961, 0.76977, 0.77026, 0.77044, 0.77395, 0.77415, 0.73291, 0.7325, 0.75212, 0.75211, 0.75171, 0.49344, 0.49342, 0.49432, 0.48903, 0.48871, 0.48831, 0.48797, 0.48786, 0.48766, 0.48745, 0.38349, 0.10411, 0.10406, 0.10398, 0.17232, 0.17229, 0.13737, 0.057442, 0.057462, 0.057456, 0.057459, 0.057395, 0.05738, 0.057428, 0.057422, 0, 0, 0.0049736, 0.0044557, 0.0044568, 0.0046078, 0.0063609, 0.0063615, 0.0063626, 0.0063629, 0.0063696, 0.0063682, 0.0052625, 0.0057284, 0.0065242, 0.009164, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.017819, 0.017814, 0.015173, 0.015151, 0.015148, 0.015166, 0.015168, 0.015172, 0.011248, 0.011236, 0.01329, 0.013288, 0.013279, 0.013275], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92692, 0.92575, 0.92597, 0.92554, 0.92536, 0.92544, 0.92561, 0.92565, 0.92662, 0.23079, 0.2308, 0.23087, 0.23076, 0.23086, 0, 0, 0, 0, 0.44133, 0.44099, 0.4412, 0.44132, 0.441, 0.93916, 0.93857, 0.93792, 0.93849, 0.93916, 0.93841, 0.9396, 0.93943, 0.93833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maux de tête": {
men: [0.27772, 0.21402, 0.22995, 0.2297, 0.2468, 0.24669, 0.24646, 0.20506, 0.17734, 0.15652, 0.15361, 0.15345, 0.13228, 0.14564, 0.076986, 0.090132, 0.032589, 0.032479, 0, 0, 0, 0, 0.01386, 0.012907, 0.012499, 0.011372, 0.040823, 0.041277, 0.054349, 0.054383, 0.051301, 0.047483, 0.034534, 0.035854, 0.033066, 0.032469, 0.054564, 0.060216, 0.062045, 0.066341, 0.04914, 0.049126, 0.039909, 0.075129, 0.075077, 0.081278, 0.15843, 0.069147, 0.08674, 0.092011, 0.059047, 0.053791, 0.040158, 0.037485, 0.037481, 0.037504, 0.037517, 0.01344, 0.014043, 0.014207, 0.06422, 0.25053, 0.27418, 0.27451, 0.27445, 0.2971, 0.35873, 0.40771, 0.40753, 0.40744, 0.3775, 0.37272, 0.35374, 0.35411, 0.383, 0.2066, 0.24593, 0.2458, 0.24591, 0.24617, 0.3443, 0.32569, 0.43712, 0.43722, 0.56991, 0.59993, 0.76786, 0.7673, 0.42522, 0.51454, 0.43449, 0.15427, 0.13437, 0.21735, 0.21762, 0.21758, 0.10869, 0.17726, 0.16929, 0.16905, 0.13256, 0.13271, 0.14878, 0.14882, 0.14869, 0.22526, 0.25851, 0.088223, 0.088163, 0.1009], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système digestif": {
men: [0.48041, 0.95901, 0.74433, 0.74351, 0.74394, 0.79628, 0.79554, 0.78657, 0.78572, 0.78528, 0.78545, 0.78464, 0.78456, 0.54556, 0.54559, 0.54548, 0.37066, 0.36942, 0.36936, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30391, 0.30375, 0.21612, 0.18426, 0.1846, 0.18454, 0.16363, 0.26299, 0.25943, 0.25937, 0.25927, 0.25915, 0.25928, 0.23198, 0.11465, 0.11456, 0.14075, 0.13607, 0.13606, 0.13615, 0.15372, 0, 0, 0, 0, 0, 0, 0, 0, 0.05041, 0.050346, 0.12045, 0.1204, 0.12037, 0.12038, 0.40067, 0.19831, 0.08636, 0.086342, 0.09852, 0.098552, 0.08037, 0.080404, 0.065249, 0.065265, 0.065289, 0.065359, 0.065373, 0.048728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03516, 0.030533, 0.022635, 0.022602, 0.022597, 0.022623, 0.022627, 0.022443, 0.022424, 0.022401, 0.022394, 0.022391, 0.022376, 0.022369], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dégénérative": {
men: [0.14784, 0.14775, 0.14778, 0.14762, 0.14771, 0.062894, 0.062836, 0, 0, 0.43254, 0.43263, 0.43219, 0.43214, 0.22253, 0.22255, 0.2225, 0.22246, 0.22171, 0.22168, 0.30781, 0.25128, 0.25124, 0.25143, 0, 0, 0, 0, 0, 0.074122, 0.074168, 0.060913, 0.06119, 0.061206, 0.061275, 0.49727, 0.40452, 0.40451, 0.57859, 0.51276, 0.51274, 0.51367, 0.47705, 0.4561, 0.45573, 0.51429, 0.51419, 0.51397, 0.51375, 0, 0.14399, 0.14392, 0.14381, 0.18464, 0.18461, 0.18459, 0.22837, 0.22844, 0.22842, 0.22843, 0.36987, 0.36977, 0.37008, 0.37004, 0.94282, 0.35675, 0.35682, 0.22732, 0.22738, 0.22727, 0.18304, 0.15666, 0.15668, 0.13572, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038741, 0.041776, 0.041796, 0.039732, 0.039704, 0.039757, 0.039732, 0.039705, 0.039729, 0.057442, 0.057396, 0.057469, 0.057459, 0.018492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage ovin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95812, 0.95858, 0.95863, 0.95821, 0.95749, 0.958, 0.95783, 0.95774, 0.95833, 0.95866, 0.65356, 0.6536, 0.65287, 0.65269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23267, 0.23289, 0.23256, 0.23251, 0.23278, 0.23281, 0.23287, 0.23268, 0.23244, 0.45673, 0.94593, 0.94529, 0.94502], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hernie discale": {
men: [0.027775, 0.027758, 0.027765, 0.027734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.016979, 0.022993, 0.026079, 0.026093, 0.035745, 0.13764, 0.13773, 0.20731, 0.20729, 0.2073, 0.34182, 0.34173, 0.34202, 0.34198, 0.087335, 0.010762, 0.010764, 0.01075, 0.040909, 0.040891, 0.040883, 0.040886, 0.040894, 0.040896, 0.030947, 0.03094, 0.030941, 0.030951, 0.033181, 0.49415, 0.49467, 0.49479, 0, 0, 0, 0, 0.95143, 0.95167, 0.95099, 0.95227, 0.95168, 0.95102, 0.95159, 0.95227, 0.95151, 0.95272, 0.95254, 0.95142, 0.95114, 0.15867, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médicaments orphelins": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95098, 0.95143, 0.95167, 0.95099, 0.95227, 0.95168, 0.95102, 0.95159, 0.95227, 0.95151, 0.95272, 0.95254, 0.95142, 0.95114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champs pétroliers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94682, 0.94727, 0.94751, 0.95326, 0.95455, 0.95395, 0.95329, 0.95387, 0.95455, 0.95378, 0.955, 0.95483, 0.9537, 0.95342, 0.94759, 0.94623, 0.94602, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie virale": {
men: [0.95539, 0.95482, 0.52779, 0.52721, 0.36966, 0.36948, 0.36914, 0.36933, 0.36893, 0.27384, 0.2739, 0.27362, 0.27359, 0.27388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.065325, 0.068437, 0.13937, 0.18506, 0.18529, 0.18525, 0.26009, 0.95555, 0.95578, 0.95534, 0.52533, 0.52538, 0.56244, 0.56247, 0.31991, 0.31985, 0.15896, 0.15901, 0.15893, 0.159, 0.15916, 0.1592, 0.15926, 0.15943, 0.94231, 0.94158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"soins palliatifs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16108, 0.16099, 0.16797, 0.16797, 0.16788, 0.16778, 0.16778, 0.16808, 0.51066, 0.16792, 0.16778, 0.16767, 0.16763, 0.13694, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0679, 0.067983, 0.067969, 0.93817, 0.93699, 0.93721, 0.93678, 0.93659, 0.93668, 0.93685, 0.055111, 0.055169, 0.055157, 0.015464, 0, 0, 0, 0, 0, 0, 0.048277, 0.048288, 0.048251, 0.048274, 0.056903, 0.054892, 0.054966, 0.10362, 0.10355, 0.10361, 0.30842, 0.30817, 0.30856, 0.2657, 0.19602, 0.24324, 0.24348, 0.24313, 0.24307, 0.26094, 0.26098, 0.31675, 0.37931, 0.37892, 0.37881, 0.37875, 0.37849, 0.40293], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection bactérienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11384, 0.11391, 0.11378, 0.11372, 0.10848, 0.11569, 0.18185, 0.41029, 0.4104, 0.4937, 0.49342, 0.49272, 0.49272, 0.49246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033048, 0.03305, 0.033035, 0.03301, 0.034461, 0.034455, 0.038707, 0.069353, 0.10048, 0.11459, 0.1146, 0.11447, 0.14111, 0.32124, 0.48395, 0.31707, 0.31701, 0.31707, 0.31667, 0.31675, 0.5003, 0.5002, 0.50025, 0.56369, 0.56372, 0.5643, 0.56418, 0.51361, 0.51377, 0.46547, 0.46567, 0.46616, 0.46628, 0.46645, 0.24109, 0.16332, 0.16319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"moelle épinière": {
men: [0, 0, 0, 0, 0, 0.063174, 0.087226, 0.087271, 0.087176, 0.087128, 0.087145, 0.11725, 0.11724, 0.11736, 0.14358, 0.14355, 0.14352, 0.14304, 0.94392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066351, 0.066313, 0.06631, 0.18255, 0.80311, 0.89955, 0.89881, 0.89818, 0.898, 0.89763, 0.89723, 0.89766, 0.95216, 0.95175, 0.34437, 0.34456, 0.3445, 0.34446, 0.34468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1294, 0.12934, 0.12931, 0.12932, 0.12935, 0.16477, 0.18474, 0.1847, 0.083185, 0.06317, 0.062169, 0.068029, 0.0681, 0.069286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie grave": {
men: [0.057775, 0.055623, 0.097608, 0.10104, 0.1011, 0.18125, 0.16871, 0.16879, 0.16861, 0.14738, 0.143, 0.15334, 0.41128, 0.3862, 0.41524, 0.43582, 0.42385, 0.42243, 0.42236, 0.42191, 0.4531, 0.4124, 0.41272, 0.58914, 0.61982, 0.66496, 0, 0, 0, 0, 0, 0, 0, 0.10018, 0.071916, 0.080983, 0.075661, 0.082552, 0.10107, 0.10106, 0.10125, 0.088264, 0.099251, 0.12932, 0.13347, 0.13345, 0.13339, 0.039782, 0.0607, 0.061597, 0.043067, 0.043035, 0, 0, 0, 0, 0, 0, 0.1195, 0.11937, 0.11934, 0.11944, 0.14129, 0.14146, 0.94421, 0.34507, 0.34464, 0.34472, 0.33231, 0.41176, 0.16, 0.16003, 0.1291, 0.12923, 0.1292, 0.12185, 0.089714, 0.072212, 0.069507, 0.072169, 0.072187, 0.072214, 0.030393, 0, 0, 0, 0, 0, 0, 0, 0.0097134, 0.019294, 0.024108, 0.024089, 0.02412, 0.024115, 0.018129, 0.028079, 0.0077871, 0.006392, 0.0063906, 0.0070899, 0.0070909, 0.0069072, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sérotonine": {
men: [0, 0, 0, 0, 0.019073, 0.027696, 0.02767, 0.027684, 0.057307, 0.057275, 0.057287, 0.057229, 0.057223, 0.057285, 0.92736, 0.11963, 0.063931, 0.063717, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94798, 0.22764, 0.22759, 0.22986, 0.23, 0.23008, 0.23005, 0.23007, 0.22981, 0.22975, 0.22994, 0.22992, 0.2302, 0.23015, 0.11607, 0.21337, 0.21342, 0.1301, 0.13007, 0.048699, 0.048708, 0.04871, 0.048761, 0.048751, 0.048752, 0.048768, 0.031729, 0.031742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052079, 0.41535, 0.41574, 0.52379, 0.95336, 0.95447, 0.9546, 0.51096, 0.51053, 0.39112, 0.391, 0.39094, 0.39068, 0.39057], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19574, 0.2399, 0.39339, 0.39289, 0.39299, 0.39281, 0.39273, 0.39276, 0.39284, 0.9494, 0.95038, 0.95018, 0.95021, 0.95051, 0, 0, 0, 0, 0, 0, 0, 0, 0.95143, 0.95167, 0.95099, 0.95227, 0.95168, 0.39159, 0.068868, 0.068918, 0.068863, 0.06895, 0.065549, 0.063683, 0.061382, 0.061441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infertilité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15705, 0.15696, 0.157, 0.23451, 0.26342, 0.26462, 0.26469, 0.26499, 0.3965, 0.39594, 0.47785, 0.9552, 0.95464, 0.95461, 0, 0, 0, 0, 0.94866, 0.94846, 0.94807, 0.58582, 0.33233, 0.33234, 0.3322, 0.33195, 0.33213, 0.33207, 0.33203, 0.33224, 0.33235, 0.33232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19105, 0.16464, 0.16459, 0.14354, 0.14344, 0.1434], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules tumorales": {
men: [0.064977, 0.064939, 0.064954, 0.064883, 0.06492, 0.06489, 0.25783, 0.45856, 0.45806, 0.45781, 0.4579, 0.94536, 0.94526, 0.94628, 0.94635, 0.94614, 0.94599, 0.94281, 0.94266, 0.59128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15915, 0.17003, 0.12683, 0.12696, 0.093128, 0.093131, 0.093161, 0.093115, 0.1145, 0.14478, 0.14482, 0.14487, 0.14503, 0.14506, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01017, 0.011359, 0.013189, 0.021097, 0.050352, 0.05041, 0.050417, 0.039592, 0.039559, 0.15348, 0.15343, 0.15341, 0.15331, 0.15326], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médecin vétérinaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94781, 0.94785, 0.94884, 0.94864, 0.94866, 0.94897, 0.9485, 0.94891, 0.9499, 0.95014, 0.9505, 0.9515, 0.95171, 0.95098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 