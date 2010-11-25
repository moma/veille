var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"éducation thérapeutique": {
men: [0.79616, 0.73055, 0.73075, 0.72966, 0.72966, 0.73223, 0.98087, 0.22803, 0.12151, 0.11826, 0.11837, 0.11837, 0.11837, 0.077285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29472, 0.29548, 0.29459, 0.29407, 0.29407, 0.29407, 0.29424, 0.38154, 0.59885, 0.3585, 0.35866, 0.35866, 0.35866, 0.46646, 0.23409, 0.23409, 0.19895, 0.18932, 0.18932, 0.18932, 0.29522, 0.2486, 0.2486, 0.32351, 0.32405, 0.32405, 0.32405, 0.32532, 0.43682, 0.43428, 0.74426, 0.98784, 0.98784, 0.98467, 0.76149, 0.72293, 0.73961, 0.73939, 0.73792, 0.7375, 0.7375, 0.7849, 0.64406, 0.64452, 0.64452, 0.64452, 0.64452, 0.64494, 0.60462, 0.54356, 0.50224, 0.50195, 0.43666, 0.43725, 0.43725, 0.21088, 0, 0, 0.8647, 0.58121, 0.58121, 0.58088, 0.55566, 0.55566, 0.55625, 0.55667, 0.60601, 0.60601, 0.60601], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur de la santé": {
men: [0.1792, 0.1298, 0.1066, 0.10644, 0.10644, 0.12128, 0.12158, 0.1246, 0.068022, 0.05243, 0.048702, 0.049972, 0.052902, 0.053874, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036683, 0.037309, 0.039102, 0.039665, 0.039665, 0.044273, 0.034851, 0.033443, 0.041196, 0.074734, 0.044296, 0.037793, 0.038874, 0.040709, 0.030011, 0.030375, 0.030425, 0.029138, 0.029138, 0.029138, 0.074553, 0.062953, 0.056853, 0.05845, 0.082214, 0.094222, 0.090286, 0.090952, 0.057102, 0.055229, 0.049058, 0.04702, 0.04702, 0.046869, 0.10524, 0.24517, 0.28863, 0.26238, 0.25243, 0.26693, 0.27946, 0.27682, 0.29584, 0.24216, 0.24216, 0.2594, 0.2594, 0.25957, 0.20948, 0.11947, 0.11933, 0.11926, 0.12575, 0.12592, 0.12592, 0.038369, 0, 0, 0.27337, 0.27317, 0.27317, 0.27301, 0.2616, 0.2616, 0.26188, 0.29613, 0.29613, 0.27252, 0.27252], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0.33558, 0.33572, 0.19716, 0.19687, 0.22641, 0, 0, 0, 0, 0.1334, 0.13353, 0.16555, 0.16555, 0.16483, 0.16501, 0.16501, 0.16503, 0.16563, 0.17983, 0.49841, 0.49769, 0.49769, 0.4017, 0, 0, 0, 0, 0, 0.85285, 0.85285, 0.85537, 0.85537, 0.85537, 0.85442, 0.85757, 0.8563, 0.9895, 0.98702, 0.98702, 0.98702, 0.98702, 0.75758, 0, 0, 0.63681, 0.63681, 0.63681, 0.63718, 0.73583, 0.73615, 0.73699, 0.73732, 0.73732, 0.73732, 0.5474, 0.67141, 0.67141, 0.67252, 0.44323, 0.44323, 0.44323, 0.33104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.032774, 0.064746, 0.20875, 0.22423, 0.21922, 0.21514, 0.21506, 0.21521, 0.27504, 0.28941, 0.28941, 0.2896, 0.36631, 0.63252, 0.71867, 0.68804, 0.21783, 0, 0, 0, 0, 0, 0.62319, 0.62274, 0.38533, 0.38511, 0.38511, 0.38511, 0.34624, 0.3465, 0.3465, 0.3465, 0.31446], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"séropositifs": {
men: [0.23404, 0.21873, 0.22154, 0.29219, 0.29981, 0.37487, 0.42357, 0.33502, 0.42031, 0.6689, 0.66954, 0.66954, 0.66954, 0.80276, 0.83395, 0.83395, 0.80968, 0.65633, 0.67056, 0.55149, 0.50932, 0.55595, 0.54554, 0.52894, 0.5197, 0.5197, 0.48475, 0.17291, 0.12933, 0.11897, 0.043478, 0.047087, 0.047087, 0.082949, 0.0831, 0.048035, 0.097271, 0.1287, 0.12951, 0.12951, 0.12941, 0.14736, 0.15542, 0.14771, 0.17636, 0.17636, 0.17636, 0.16277, 0.23945, 0.40234, 0.34757, 0.32682, 0.32682, 0.31204, 0.30674, 0.31755, 0.31755, 0.43578, 0.38131, 0.38131, 0.38131, 0.47148, 0.24461, 0.23354, 0.22351, 0.17405, 0.17045, 0.18829, 0.2093, 0.11635, 0.11029, 0.10504, 0.10134, 0.099429, 0.14026, 0.2463, 0.30391, 0.29814, 0.30106, 0.32445, 0.33271, 0.33471, 0.36447, 0.38526, 0.52041, 0.49746, 0.50662, 0.51613, 0.50238, 0.37653, 0.31992, 0.3645, 0.43203, 0.37655, 0.35522, 0.33207, 0.21882, 0.28223, 0.33725, 0.61753, 0.50611, 0.48257, 0.47133, 0.42783, 0.40464, 0.3619, 0.32751, 0.32751, 0.32751, 0.33571], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accès universel": {
men: [0.36745, 0.31433, 0.2182, 0.21788, 0.28828, 0.40161, 0.4026, 0.40446, 0.40446, 0.58266, 0.58322, 0.58322, 0.58322, 0.58066, 0.34465, 0.34465, 0.34467, 0.34593, 0.34593, 0.97191, 0.21786, 0.21786, 0.21763, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22453, 0.22511, 0.22443, 0.22403, 0.19003, 0.24767, 0.35571, 0.25589, 0.27637, 0.20619, 0.20628, 0.20628, 0.20628, 0.29052, 0.27997, 0.21451, 0.15701, 0.1525, 0.16434, 0.16434, 0.23919, 0.2418, 0.13416, 0.14301, 0.1397, 0.1397, 0.1397, 0.10177, 0.061037, 0.068227, 0.084848, 0.087302, 0.087302, 0.087023, 0.18336, 0.32426, 0.49705, 0.4969, 0.51159, 0.52626, 0.52626, 0.58551, 0.61109, 0.61152, 0.61152, 0.61152, 0.61152, 0.61192, 0.53409, 0.43973, 0.62688, 0.62651, 0.69562, 0.66809, 0.66809, 0.31024, 0, 0, 0.67939, 0.6789, 0.6789, 0.67851, 0.61213, 0.61213, 0.71545, 0.71599, 0.71599, 0.71599, 0.71599], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre le sida": {
men: [0.11687, 0.11973, 0.10916, 0.109, 0.12187, 0.1051, 0.10228, 0.08975, 0.14344, 0.21886, 0.21906, 0.31028, 0.31028, 0.37011, 0.24947, 0.33481, 0.49045, 0.37317, 0.39907, 0.16111, 0.16209, 0.16209, 0.15747, 0.15754, 0.15348, 0.15042, 0.1304, 0.012082, 0.012089, 0.011501, 0, 0, 0, 0, 0, 0, 0.01093, 0.010902, 0.010922, 0.010937, 0.010973, 0.042237, 0.037364, 0.037732, 0.043381, 0.043381, 0.043381, 0.037958, 0.066866, 0.060952, 0.03336, 0.032611, 0.030149, 0.025109, 0.044951, 0.041933, 0.040198, 0.037692, 0.037601, 0.036225, 0.036225, 0.037442, 0.032617, 0.032928, 0.02573, 0.024922, 0.025615, 0.027782, 0, 0, 0, 0, 0, 0, 0, 0.02353, 0.046102, 0.045285, 0.050452, 0.055232, 0.066957, 0.067472, 0.0914, 0.12048, 0.14514, 0.15125, 0.20894, 0.19602, 0.19614, 0.14943, 0.058395, 0.099834, 0.098234, 0.13173, 0, 0, 0, 0.44054, 0.43821, 0.18933, 0.16554, 0.16413, 0.214, 0.17223, 0.17223, 0.17044, 0.18018, 0.16405, 0.16405, 0.16178], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sida": {
men: [0.091056, 0.086344, 0.079125, 0.092232, 0.096572, 0.07876, 0.076123, 0.05507, 0.068755, 0.072245, 0.091067, 0.097463, 0.10477, 0.11084, 0.097137, 0.08322, 0.085242, 0.033089, 0.032865, 0.03218, 0.05206, 0.050125, 0.064015, 0.061887, 0.060162, 0.058129, 0.056281, 0.053465, 0.039966, 0.041057, 0.039276, 0.040623, 0.040218, 0.044428, 0.023505, 0.023847, 0.031429, 0.04334, 0.037343, 0.036754, 0.033338, 0.0393, 0.033826, 0.035326, 0.043267, 0.043867, 0.043792, 0.042649, 0.066133, 0.072248, 0.059941, 0.052035, 0.058201, 0.052733, 0.054641, 0.04862, 0.047779, 0.049249, 0.043689, 0.042369, 0.042208, 0.047549, 0.027911, 0.028003, 0.024749, 0.02093, 0.020811, 0.023203, 0.020313, 0.016794, 0.025432, 0.025049, 0.024693, 0.025668, 0.034667, 0.060972, 0.083641, 0.077945, 0.086794, 0.10595, 0.11299, 0.11231, 0.13937, 0.15224, 0.17755, 0.21098, 0.22111, 0.21938, 0.21497, 0.15068, 0.11176, 0.14258, 0.15244, 0.12061, 0.099006, 0.10075, 0.037953, 0.050535, 0.11542, 0.20249, 0.16903, 0.16925, 0.14731, 0.12584, 0.11217, 0.11225, 0.10528, 0.096253, 0.099671, 0.099452], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre le vih": {
men: [0.46109, 0.42729, 0.41872, 0.41809, 0.45449, 0.35113, 0.41821, 0.27835, 0.32571, 0.31077, 0.31107, 0.31107, 0.31107, 0.33742, 0.031754, 0.027202, 0.025265, 0.024553, 0.024553, 0.02161, 0.023504, 0.026558, 0.026529, 0.026639, 0.025996, 0.025996, 0.020862, 0, 0, 0, 0, 0, 0, 0, 0, 0.03472, 0.063162, 0.096092, 0.097627, 0.097627, 0.10788, 0.19873, 0.19924, 0.23399, 0.27897, 0.27897, 0.27897, 0.22175, 0.25584, 0.22522, 0.1522, 0.1205, 0.1205, 0.1205, 0.22866, 0.21845, 0.21845, 0.19213, 0.16755, 0.16755, 0.16755, 0.24066, 0.27578, 0.26383, 0.31226, 0.30153, 0.30153, 0.30153, 0.24634, 0.12965, 0.11777, 0.14129, 0.12098, 0.12098, 0.18779, 0.24201, 0.307, 0.24718, 0.26132, 0.27305, 0.27289, 0.27289, 0.34868, 0.43693, 0.46205, 0.47229, 0.5293, 0.5293, 0.49917, 0.44153, 0.40879, 0.87274, 0.86196, 0.85644, 0.85758, 0.85758, 0.66239, 0, 0, 0.64209, 0.32026, 0.32026, 0.34573, 0.28499, 0.27643, 0.2723, 0.27251, 0.27251, 0.27251, 0.27251], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cd4": {
men: [0.11351, 0.11356, 0.16044, 0.1602, 0.18457, 0, 0, 0, 0, 0, 0, 0, 0, 0.49849, 0.69007, 0.69007, 0.69013, 0.69265, 0.97321, 0.97321, 0.9718, 0.9718, 0.69091, 0.69123, 0.69123, 0.69123, 0.69123, 0.297, 0.65919, 0.65919, 0.31807, 0.31807, 0.31807, 0.31772, 0.31889, 0.31842, 0.13158, 0.17363, 0.17363, 0.17363, 0.1499, 0.13382, 0.063275, 0.063083, 0.11567, 0.11087, 0.11087, 0.10465, 0.10421, 0.10189, 0.15461, 0.078065, 0.078065, 0.078065, 0.093925, 0.12331, 0.12331, 0.12351, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.028128, 0.1628, 0.19258, 0.18874, 0.19941, 0.21812, 0.20285, 0.19971, 0.19971, 0.19971, 0.19984, 0.22881, 0.34219, 0.46113, 0.42841, 0.13897, 0, 0, 0, 0, 0, 0.57259, 0.50557, 0.50557, 0.45166, 0.45033, 0.45033, 0.4241, 0.42442, 0.42442, 0.42442, 0.48907], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réservoir viral": {
men: [0.96934, 0.96974, 0.97001, 0.96855, 0.96855, 0.97196, 0.97437, 0.97887, 0.97887, 0.98199, 0.98293, 0.98293, 0.98293, 0.97861, 0.96829, 0.96829, 0.96837, 0.97191, 0.97191, 0.15556, 0.15534, 0.15534, 0.15517, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.067082, 0.067109, 0.071212, 0.071105, 0.071105, 0, 0, 0, 0, 0.071748, 0.071817, 0.071817, 0.071817, 0.10968, 0.1098, 0.1015, 0.10151, 0.10188, 0.10188, 0.11656, 0.32225, 0.4134, 0.41296, 0.076818, 0.076818, 0.076818, 0.059356, 0, 0, 0, 0, 0, 0, 0, 0, 0.065215, 0.11561, 0.23228, 0.23228, 0.23228, 0.2755, 0.40081, 0.40184, 0.40063, 0.53212, 0.53212, 0.53212, 0.48166, 0.4747, 0.41627, 0.25206, 0.14533, 0.14533, 0.14533, 0.14502, 0.14674, 0.14674, 0.14699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2009, 0.15947, 0.15854, 0.15854, 0.16838, 0.16838, 0.16784, 0.16554, 0.11989, 0.16888, 0.22095, 0.26467, 0.25396, 0.25396, 0.18743, 0.22363, 0.22379, 0.22379, 0.22379, 0.22379, 0.22393, 0.24828, 0.33671, 0.27805, 0.21041, 0.15476, 0, 0, 0, 0, 0, 0.60318, 0.38014, 0.38014, 0.46179, 0.35556, 0.38086, 0.35981, 0.36008, 0.36008, 0.3302, 0.3302], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Préservatif masculin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19602, 0.62451, 0.62451, 0.62457, 0.62685, 0.62685, 0.62685, 0.62593, 0.76907, 0.76825, 0.78043, 0.54954, 0.54954, 0.34694, 0.26343, 0, 0, 0, 0, 0, 0, 0, 0.069214, 0.1223, 0.18565, 0.21168, 0.21168, 0.24319, 0.26331, 0.26399, 0.26319, 0.41765, 0.41765, 0.41765, 0.38596, 0.38116, 0.32227, 0.20088, 0.11249, 0.11249, 0.11249, 0.14502, 0.14674, 0.14674, 0.14699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13154, 0.13202, 0.096055, 0.16752, 0.22585, 0.22573, 0.22573, 0.22976, 0.2738, 0.274, 0.274, 0.274, 0.274, 0.27417, 0.20791, 0.23987, 0.49676, 0.29154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"résilience": {
men: [0.51648, 0.39507, 0.39518, 0.39459, 0.38892, 0.39029, 0.45427, 0.45637, 0.45637, 0.45613, 0.45657, 0.45657, 0.45657, 0.23638, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.057385, 0.058228, 0.058052, 0.067535, 0.067535, 0.065344, 0.065383, 0.062332, 0.068964, 0.07273, 0.072763, 0.067973, 0.091843, 0.10534, 0.070095, 0.091909, 0.070005, 0.080714, 0.071067, 0.074433, 0.099177, 0.10363, 0.10363, 0.10324, 0.10291, 0.10891, 0.10891, 0.10331, 0.057211, 0.039909, 0.043266, 0.041947, 0.04437, 0.043229, 0.13111, 0.22108, 0.22101, 0.22317, 0.22358, 0.22346, 0.22346, 0.28887, 0.37239, 0.5614, 0.59273, 0.58727, 0.58727, 0.57679, 0.4833, 0.37038, 0.36993, 0.40173, 0.19717, 0.17774, 0.17774, 0.069002, 0, 0, 0.1931, 0.20452, 0.20452, 0.21071, 0.21071, 0.16745, 0.16763, 0.16573, 0.20881, 0.22129, 0.22129], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antirétroviral": {
men: [0.16719, 0.17451, 0.16584, 0.16084, 0.17193, 0.076172, 0.061955, 0, 0, 0.052007, 0.052057, 0.052057, 0.059141, 0.097669, 0.11563, 0.11563, 0.21566, 0.22461, 0.22461, 0.21213, 0.27331, 0.27331, 0.27302, 0.25721, 0.25273, 0.23862, 0.22348, 0.21715, 0.26009, 0.23548, 0.15885, 0.15932, 0.15932, 0.24488, 0.13577, 0.13557, 0.14986, 0.21418, 0.21878, 0.23603, 0.23535, 0.15992, 0.11818, 0.096317, 0.11214, 0.11272, 0.11272, 0.077719, 0.098192, 0.096306, 0.076092, 0.074785, 0.074785, 0.069405, 0.069601, 0.085685, 0.082448, 0.10438, 0.088041, 0.092821, 0.092821, 0.12177, 0.0652, 0.049709, 0.051987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027973, 0.024668, 0.045821, 0.066866, 0.10567, 0.14138, 0.13806, 0.14317, 0.17919, 0.20328, 0.20855, 0.21533, 0.21533, 0.21547, 0.24074, 0.35641, 0.54006, 0.50638, 0.43831, 0.37428, 0.41043, 0.43389, 0.29476, 0.29321, 0.31302, 0.29909, 0.27456, 0.2744, 0.22288, 0.22288, 0.082317, 0.091895, 0.10319, 0.093678, 0.093678], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection au vih": {
men: [0.28787, 0.28798, 0.2976, 0.29716, 0.29716, 0.22972, 0.46485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41086, 0.41086, 0.5059, 0.5059, 0.5059, 0.50534, 0.5072, 0.5783, 0.57727, 0.57582, 0.57582, 0.57582, 0.57582, 0.5748, 0.97695, 0.97399, 0.97227, 0.97227, 0.97227, 0.97285, 0.9687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccination contre la fièvre jaune": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19602, 0.19624, 0.19624, 0.19626, 0.19698, 0.19698, 0.19698, 0.19669, 0.33234, 0.33199, 0.34805, 0.34805, 0.34805, 0.14919, 0, 0, 0, 0, 0, 0, 0, 0, 0.11092, 0.1894, 0.28681, 0.28681, 0.28681, 0.3557, 0.40081, 0.40184, 0.40063, 0.53212, 0.53212, 0.53212, 0.48166, 0.4747, 0.41627, 0.25206, 0.14533, 0.14533, 0.14533, 0.14502, 0.14674, 0.14674, 0.14699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14301, 0.26085, 0.2607, 0.2607, 0.27085, 0.3237, 0.32393, 0.32393, 0.32393, 0.32393, 0.32414, 0.37789, 0.49735, 0.49676, 0.29154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"efficacité virologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.081336, 0.081429, 0.081429, 0.081436, 0.081733, 0.081733, 0.19698, 0.19669, 0.33234, 0.33199, 0.34805, 0.34805, 0.34805, 0.14919, 0, 0, 0, 0, 0, 0, 0, 0, 0.11092, 0.1894, 0.28681, 0.28681, 0.28681, 0.3557, 0.40081, 0.40184, 0.40063, 0.53212, 0.53212, 0.53212, 0.48166, 0.4747, 0.41627, 0.25206, 0.14533, 0.14533, 0.14533, 0.14502, 0.14674, 0.14674, 0.14699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13052, 0.23678, 0.23665, 0.19829, 0.20404, 0.23264, 0.2328, 0.2328, 0.2328, 0.2328, 0.23295, 0.28901, 0.35429, 0.35387, 0.18508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espoir thérapeutique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19602, 0.19624, 0.19624, 0.10542, 0.10581, 0.10581, 0.10581, 0.10565, 0.13532, 0.13518, 0.1378, 0.1378, 0.1378, 0.0902, 0, 0, 0, 0, 0, 0, 0, 0, 0.11092, 0.1894, 0.28681, 0.22654, 0.22654, 0.26746, 0.29204, 0.2928, 0.29191, 0.3897, 0.3897, 0.3897, 0.36199, 0.35767, 0.29971, 0.18815, 0.10461, 0.14533, 0.14533, 0.14502, 0.14674, 0.14674, 0.14699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14301, 0.26085, 0.2607, 0.2607, 0.27085, 0.3237, 0.32393, 0.32393, 0.32393, 0.32393, 0.32414, 0.37789, 0.49735, 0.49676, 0.29154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit immunitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49999, 0.49911, 0.49911, 0.49911, 0.978, 0.97383, 0.34788, 0.34828, 0.26228, 0.26228, 0.26228, 0.26171, 0.26176, 0.26176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26482, 0.48969, 0.48941, 0.48941, 0.48876, 0.48856, 0.48891, 0.48891, 0.48891, 0.48891, 0.48923, 0.55938, 0.56074, 0.97803, 0.97291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies transmissibles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15693, 0.157, 0.97258, 0.97258, 0.97048, 0.97067, 0.97067, 0.97228, 0.97367, 0.97367, 0.97367, 0.97253, 0.97791, 0.97791, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé sexuelle": {
men: [0.1373, 0.22942, 0.22949, 0.22914, 0.21176, 0.24962, 0.60104, 0.60382, 0.60382, 0.47815, 0.47861, 0.47861, 0.47861, 0.41939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96921, 0.96962, 0.97073, 0.094748, 0.094748, 0.094748, 0.094544, 0.094562, 0.094562, 0.094719, 0.094854, 0.094854, 0.094854, 0.094744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053497, 0.064797, 0.064668, 0.064632, 0.064632, 0.092957, 0.09292, 0.19569, 0.19569, 0.2936, 0.2936, 0.29379, 0.29516, 0.29588, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pronostic vital": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42468, 0.75081, 0.75057, 0.17691, 0.17656, 0.17646, 0.17646, 0.14672, 0.14666, 0.14677, 0.095911, 0.095911, 0.095911, 0.063719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27108, 0.27089, 0.27089, 0.69922, 0.69922, 0.69922, 0.69996, 0.70049, 0.98561, 0.98561, 0.98561], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"anrs": {
men: [0.081452, 0.081485, 0.058189, 0.065261, 0.067433, 0.036859, 0, 0, 0, 0.0896, 0.089686, 0.089686, 0.089686, 0.089292, 0.089394, 0.089394, 0.089401, 0.077387, 0.077387, 0.076834, 0.14402, 0.14402, 0.14387, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.031626, 0.075437, 0.067225, 0.067135, 0.079473, 0.079529, 0.083248, 0.083248, 0.083248, 0.083302, 0.096409, 0.12602, 0.16095, 0.18677, 0.13626, 0, 0, 0, 0, 0, 0.87145, 0.58188, 0.58188, 0.64039, 0.64039, 0.64039, 0.59529, 0.59574, 0.59574, 0.53434, 0.53434], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"thérapie génique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39428, 0.39465, 0.97145, 0.97145, 0.96719, 0.96829, 0.96829, 0.96837, 0.97191, 0.97191, 0.34593, 0.34543, 0.2157, 0.21547, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"données épidémiologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16159, 0.16125, 0.21768, 0.23283, 0.27683, 0.27667, 0.27667, 0.66011, 0.65985, 0.66032, 0.66032, 0.66032, 0.66032, 0.66075, 0.62244, 0.62395, 0.96515, 0.96459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rapport récent": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43345, 0.4332, 0.4332, 0.62174, 0.62149, 0.62193, 0.62193, 0.97346, 0.97346, 0.9741, 0.37282, 0.37373, 0.37328, 0.33286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11049, 0.11049, 0.11049, 0.11055, 0.11008, 0.96911, 0.97022, 0.97066, 0.97066, 0.97066, 0.96856, 0.96875, 0.96875, 0.97036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules immunitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50896, 0.50896, 0.77759, 0.77795, 0.77795, 0.77795, 0.77795, 0.62208, 0.62244, 0.62244, 0.62428, 0.62428, 0.62428, 0.52413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues injectables": {
men: [0, 0, 0.20208, 0.2899, 0.2899, 0.34196, 0.34281, 0.42126, 0.62707, 0.98099, 0.98193, 0.98193, 0.98193, 0.97762, 0.97873, 0.71366, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 