var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"risques de dissémination": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92669, 0.92685, 0.92684, 0.92685, 0.92683, 0.92683, 0.92694, 0.92712, 0.92736, 0.92745, 0.93233, 0.941, 0.94293, 0.94356, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53709, 0.537, 0.53728, 0.53747, 0.53793, 0.53797, 0.94884, 0.94911, 0.94936, 0.94849, 0.95056, 0.95218, 0.95218, 0.95306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins humanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57708, 0.63127, 0.54831, 0.54852, 0.4231, 0.42307, 0.42284, 0.39174, 0.39062, 0.39673, 0.39532, 0.43499, 0.46155, 0.46155, 0.30558, 0.10317, 0.078184, 0.078172, 0.24519, 0.2452, 0.24521, 0.93935, 0.93898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92482, 0.92483, 0.92499, 0.92498, 0.925, 0.92497, 0.92497, 0.92508, 0.92527, 0.9255, 0.92559, 0.93046, 0.93911, 0.94104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouvelles pluies": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.018701, 0.020695, 0.025327, 0.025325, 0.026431, 0.039463, 0.041481, 0.13256, 0.13208, 0.18163, 0.18159, 0.94493, 0.94509, 0.94527, 0.93947, 0.93933, 0.93933, 0.93935, 0.93938, 0.93935, 0.93898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04438, 0.044381, 0.051854, 0.92498, 0.925, 0.92497, 0.92497, 0.92508, 0.92527, 0.9255, 0.92559, 0.93046, 0.93911, 0.94104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorisation de culture": {
men: [0.20007, 0, 0, 0, 0, 0, 0, 0.020646, 0.019984, 0.019986, 0.02002, 0.02002, 0.05829, 0.058337, 0.078441, 0.092525, 0.095867, 0.089346, 0.10995, 0.12408, 0.27096, 0.37861, 0.47937, 0.47933, 0.45984, 0.45984, 0.20483, 0.093834, 0.0935, 0.18115, 0.16316, 0.20778, 0.13444, 0.13446, 0.088611, 0.088598, 0.088598, 0.068505, 0.069756, 0.14017, 0.11537, 0.09773, 0.091024, 0.044248, 0.038716, 0.038711, 0.03866, 0.038572, 0.086464, 0.086054, 0.079912, 0.089514, 0.089476, 0.047609, 0.051203, 0.28268, 0.24499, 0.25812, 0.44979, 0.44979, 0.44984, 0.24307, 0.22164, 0.22166, 0.25514, 0.25751, 0.25804, 0.25821, 0.25006, 0.1677, 0.23202, 0.23995, 0.18168, 0.18157, 0.18156, 0.19882, 0.19877, 0.20071, 0.15867, 0.15809, 0.15787, 0.15345, 0.15785, 0.10198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61882, 0.61965, 0.31154, 0.31129, 0.31172, 0.31127, 0.31112], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"législation européenne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.017456, 0.017487, 0.017487, 0.0177, 0.016263, 0.018987, 0.020542, 0.024806, 0.050903, 0.05062, 0.050383, 0.050367, 0.078914, 0.10606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16406, 0.42683, 0.51341, 0.5132, 0.5017, 0.53285, 0.53143, 0.54255, 0.55356, 0.55393, 0.56846, 0.57137, 0.59456, 0.61914, 0.49174, 0.37471, 0.29929, 0.29991, 0.30364, 0.30055, 0.30233, 0.29961, 0.30301, 0.30414, 0.30161, 0.30159, 0.2741, 0.27157, 0.062772, 0.11091, 0.12183, 0.14822, 0.13642, 0.13643, 0.13204, 0.14165, 0.13838, 0.13843, 0.14, 0.14001, 0.14014, 0.13974, 0.13186, 0.13147, 0.13425, 0.11494, 0.12522, 0.12775, 0.13277, 0.035373, 0.039533, 0.038343, 0.034499, 0.034499, 0.035111, 0.036539, 0.036556, 0.027231, 0.013537, 0.013517, 0.013511], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"droits fondamentaux": {
men: [0.062923, 0.065521, 0.049064, 0.042154, 0.0085679, 0.0066237, 0.0067435, 0.0070025, 0.0065942, 0.0064819, 0.0067753, 0.0071439, 0.006453, 0.0062713, 0.0069349, 0, 0, 0, 0, 0, 0, 0, 0, 0.0036786, 0.0073297, 0.0072835, 0.007082, 0.0067619, 0.031089, 0.029209, 0.04003, 0.040177, 0.039846, 0.039667, 0.03918, 0.059565, 0.073687, 0.067439, 0.060643, 0.06092, 0.063017, 0.062191, 0.066933, 0.10966, 0.090594, 0.093608, 0.11818, 0.15332, 0.17238, 0.25575, 0.2652, 0.31653, 0.33046, 0.32615, 0.32841, 0.33963, 0.33116, 0.32379, 0.33364, 0.33493, 0.33025, 0.32664, 0.3356, 0.3271, 0.32539, 0.23476, 0.20872, 0.21615, 0.20446, 0.17369, 0.17035, 0.19961, 0.13873, 0.13177, 0.14178, 0.13687, 0.11734, 0.021296, 0.024479, 0.16904, 0.23771, 0.23776, 0.2474, 0.28759, 0.2724, 0.24213, 0.2595, 0.27005, 0.26916, 0.26909, 0.25133, 0.26367, 0.25192, 0.18115, 0.10859, 0.10859, 0.098689, 0.0024971, 0.0024651, 0.0029117, 0.002812, 0.002709, 0.0026565, 0.0028714, 0.0033923, 0.0037425, 0.0040445, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats membres": {
men: [0.027394, 0.018053, 0.017717, 0.024549, 0.02436, 0.013887, 0.013518, 0.015244, 0.015302, 0.020098, 0.019966, 0.024747, 0.018968, 0.019973, 0.022227, 0.017101, 0.018349, 0.0054958, 0.0054257, 0.019071, 0.023302, 0.022324, 0.023197, 0.015334, 0.012186, 0.011093, 0.013565, 0.011473, 0.034441, 0.073484, 0.056694, 0.055019, 0.055426, 0.048957, 0.045544, 0.044578, 0.041406, 0.042049, 0.045228, 0.049044, 0.047173, 0.056154, 0.067452, 0.040213, 0.053529, 0.058869, 0.058143, 0.056968, 0.095766, 0.17313, 0.22069, 0.25179, 0.2553, 0.24644, 0.23785, 0.2338, 0.22289, 0.25488, 0.2595, 0.25972, 0.2616, 0.26084, 0.24042, 0.1744, 0.12289, 0.060196, 0.050681, 0.053211, 0.05395, 0.06836, 0.070842, 0.063526, 0.057742, 0.053714, 0.054133, 0.055215, 0.074834, 0.071221, 0.062344, 0.068951, 0.069244, 0.070231, 0.060724, 0.078502, 0.065483, 0.071231, 0.067974, 0.067803, 0.067616, 0.060746, 0.03983, 0.057516, 0.066258, 0.066063, 0.064694, 0.064176, 0.071386, 0.04006, 0.043962, 0.047115, 0.047845, 0.044981, 0.044595, 0.046183, 0.041783, 0.028858, 0.02333, 0.015848, 0.016206, 0.016163], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Bruxelles": {
men: [0.018329, 0.010386, 0.0093749, 0.010391, 0.0047349, 0.0046498, 0.0047084, 0.006603, 0.011349, 0.013193, 0.013154, 0.01407, 0.018971, 0.021129, 0.02479, 0.020451, 0.019929, 0.018809, 0.021023, 0.031352, 0.026685, 0.019311, 0.012235, 0.0097233, 0.008806, 0.0087437, 0.0055341, 0.0043444, 0.016688, 0.018098, 0.019081, 0.018524, 0.017363, 0.014734, 0.01448, 0.01759, 0.017968, 0.018122, 0.018067, 0.017928, 0.017805, 0.039554, 0.045185, 0.046742, 0.046787, 0.04498, 0.046513, 0.053311, 0.052254, 0.091675, 0.16053, 0.1916, 0.19279, 0.19338, 0.18937, 0.18845, 0.19065, 0.19046, 0.19404, 0.19643, 0.19603, 0.19956, 0.21361, 0.2137, 0.17458, 0.11289, 0.10579, 0.10192, 0.1062, 0.099487, 0.090424, 0.091697, 0.086873, 0.086421, 0.086292, 0.081269, 0.07985, 0.027934, 0.030813, 0.067775, 0.07461, 0.073715, 0.075552, 0.085572, 0.085513, 0.086814, 0.085251, 0.086102, 0.087118, 0.088146, 0.093432, 0.096806, 0.11226, 0.093089, 0.09145, 0.091131, 0.090967, 0.0783, 0.072525, 0.073425, 0.073052, 0.075083, 0.073867, 0.06694, 0.055864, 0.05169, 0.035147, 0.025686, 0.026193, 0.026171], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"européens": {
men: [0.015269, 0.013452, 0.011128, 0.016375, 0.01588, 0.014545, 0.013719, 0.013879, 0.013472, 0.011615, 0.011559, 0.011924, 0.010453, 0.0071203, 0.006916, 0.005056, 0.005272, 0, 0.001966, 0.0060306, 0.0080037, 0.0077105, 0.008036, 0.007564, 0.0070596, 0.00696, 0.0068537, 0.0066929, 0.020971, 0.049651, 0.051495, 0.050705, 0.049112, 0.04288, 0.041403, 0.04037, 0.039782, 0.041251, 0.042035, 0.044247, 0.08736, 0.099472, 0.1049, 0.088694, 0.099326, 0.10424, 0.11275, 0.11833, 0.093115, 0.10802, 0.14608, 0.18372, 0.18426, 0.18479, 0.16146, 0.16109, 0.15206, 0.15119, 0.15004, 0.14957, 0.14142, 0.1412, 0.1644, 0.19677, 0.17377, 0.1234, 0.12416, 0.11756, 0.10861, 0.09803, 0.094577, 0.092794, 0.083811, 0.097779, 0.10489, 0.10735, 0.11444, 0.049579, 0.045455, 0.04635, 0.047248, 0.042635, 0.051593, 0.057175, 0.057258, 0.057034, 0.062998, 0.037643, 0.034901, 0.032211, 0.034692, 0.046437, 0.053846, 0.069032, 0.06793, 0.07287, 0.070737, 0.07689, 0.084499, 0.081108, 0.080007, 0.078522, 0.078898, 0.070578, 0.047149, 0.033255, 0.026243, 0.0090391, 0.0088582, 0.0086392], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95698, 0.95507, 0.94601, 0.94198, 0.94158, 0.94147, 0.94148, 0.94164, 0.94163, 0.94165, 0.94162, 0.94162, 0.94174, 0.94192, 0.92885, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amflora": {
men: [0, 0.013479, 0.011411, 0.011404, 0.011088, 0.0093607, 0.0092522, 0.018157, 0.01816, 0.017241, 0.017271, 0.017083, 0.034088, 0.033528, 0.043691, 0.058985, 0.082022, 0.082219, 0.11592, 0.2189, 0.23458, 0.24033, 0.24058, 0.46222, 0.44407, 0.54965, 0.27047, 0.7358, 0.73318, 0.83606, 0.83588, 0.83588, 0.75433, 0.75447, 0.11239, 0.0673, 0.0673, 0.067302, 0.068508, 0.068507, 0.051972, 0.022148, 0.012676, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.022925, 0.022931, 0.020615, 0.020885, 0.023096, 0.023144, 0.023159, 0.022299, 0.023999, 0.024037, 0.026166, 0.031777, 0.034122, 0.089144, 0.27799, 0.27791, 0.4704, 0.23407, 0.23322, 0.23289, 0.20729, 0.20387, 0.18344, 0.18341, 0.18351, 0.16791, 0.16805, 0.085607, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026139, 0.082196, 0.082418, 0.082418, 0.07508, 0.075047, 0.075148, 0.075181, 0.075123, 0.075226, 0.075117, 0.075082], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"incident majeur": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.88566, 0.88528, 0.88517, 0.88518, 0.88533, 0.91826, 0.91828, 0.91825, 0.91825, 0.96315, 0.92935, 0.92958, 0.92967, 0.93456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions sanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3548, 0.35489, 0.60027, 0.60343, 0.60904, 0.61029, 0.6107, 0.64797, 0.9242, 0.92566, 0.92596, 0.92615, 0.95823, 0.95818, 0.94313, 0.85968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture productiviste": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59796, 0.59783, 0.59783, 0.7308, 0.73094, 0.73095, 0.73085, 0.93966, 0.93968, 0.93971, 0.93968, 0.93931, 0.94523, 0.94904, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"loi européenne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18126, 0.19221, 0.17418, 0.19051, 0.20599, 0.20596, 0.19766, 0.19769, 0.18614, 0.17743, 0.19123, 0.19123, 0.19125, 0.19129, 0.16206, 0.2069, 0.23704, 0.20226, 0.20268, 0.20281, 0.2181, 0.21821, 0.27399, 0.39862, 0.3987, 0.39289, 0.39286, 0.3743, 0.29755, 0, 0, 0.16156, 0.16133, 0.16136, 0.16133, 0.22078, 0.20707, 0.20718, 0.20725, 0.20945, 0.20947, 0.21709, 0.22407, 0.22413, 0.31499, 0.35162, 0.35221, 0.35221, 0.35254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mise en culture": {
men: [0.15341, 0, 0, 0, 0, 0, 0, 0.020554, 0.017889, 0.017613, 0.017644, 0.017644, 0.016849, 0.016077, 0.028072, 0.037942, 0.039763, 0.039858, 0.039637, 0.0437, 0.080834, 0.042748, 0.075325, 0.06366, 0.062223, 0.062223, 0.14981, 0.17968, 0.1126, 0.14696, 0.14693, 0.11377, 0.11379, 0.096268, 0.09627, 0.096256, 0.096256, 0.036444, 0.036936, 0.036935, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10609, 0.10606, 0.10415, 0.083009, 0.082705, 0.092281, 0.099452, 0.097749, 0.087622, 0.087607, 0.11128, 0.11132, 0.11141, 0.11142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96264, 0.96264, 0.96264, 0.96264, 0.96221, 0.59416, 0.3548, 0.35452, 0.35501, 0.35449, 0.17515], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Jacques Delors": {
men: [0.089153, 0.24657, 0.24674, 0.24659, 0.24668, 0.24694, 0.32239, 0.32239, 0.32244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24845, 0.20431, 0.20422, 0.157, 0.15472, 0.14788, 0.13526, 0.1288, 0.12879, 0.13673, 0.13674, 0.13677, 0.12763, 0.14018, 0.048332, 0.055373, 0.055487, 0.072415, 0, 0, 0.25968, 0.33498, 0.33505, 0.33485, 0.33484, 0.33489, 0.40623, 0.41019, 0.41019, 0.40869, 0.40811, 0.40819, 0.40812, 0.57233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021523, 0.020261, 0.020261, 0.02028, 0.020409, 0.020443, 0.020436, 0.023234, 0.02426, 0.025416, 0.025405, 0.030824, 0.029246, 0.037921, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des terres": {
men: [0.022146, 0.021581, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13479, 0.15512, 0.046563, 0.046675, 0.042054, 0.041857, 0.041844, 0.04186, 0.041905, 0.041901, 0.041879, 0.044296, 0.085049, 0.083086, 0.052673, 0.05264, 0.29569, 0.29569, 0.9365, 0.93667, 0.93669, 0.93655, 0.93655, 0.93657, 0.9366, 0.93658, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Daniel cohn-bendit": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25716, 0.27672, 0.35436, 0.38126, 0.40659, 0.43274, 0.49048, 0.30832, 0.24626, 0.23694, 0.23879, 0.2356, 0.15325, 0.15986, 0.11016, 0.11652, 0.093985, 0.090172, 0.090172, 0.081188, 0.076561, 0.096067, 0.12116, 0.11899, 0.12352, 0.12668, 0.25782, 0.20687, 0.2334, 0.15031, 0.15371, 0.18589, 0.18578, 0.18577, 0.16021, 0.11525, 0.078446, 0.072559, 0.11115, 0.10946, 0.10948, 0.11848, 0.12336, 0.12029, 0.11783, 0.13206, 0.13217, 0.13218, 0.15155, 0.15306, 0.079137, 0.089189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cultures conventionnelles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92669, 0.92685, 0.92684, 0.30123, 0.30122, 0.30122, 0.30126, 0.19873, 0.10118, 0.10119, 0.10173, 0.10267, 0.10288, 0.10295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20534, 0.2053, 0.20542, 0.29332, 0.29357, 0.29359, 0.29369, 0.29377, 0.29385, 0.37545, 0.37626, 0.3769, 0.3769, 0.37725, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats européens": {
men: [0, 0.017005, 0.017231, 0.029091, 0.02974, 0.035886, 0.034614, 0.032993, 0.031154, 0.035918, 0.046641, 0.048064, 0.064887, 0.07056, 0.074532, 0.050368, 0.04387, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.029646, 0.026593, 0.021453, 0.021301, 0.020961, 0.020159, 0.024606, 0.038533, 0.19858, 0.1974, 0.20253, 0.19293, 0.19293, 0.19023, 0.19227, 0.22146, 0.26014, 0.26216, 0.23956, 0.25817, 0.25963, 0.25335, 0.053855, 0.032561, 0.032746, 0.016206, 0.016215, 0.018096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062662, 0.12977, 0.22341, 0.2383, 0.22433, 0.20719, 0.23122, 0.24189, 0.20597, 0.21581, 0.21573, 0.2111, 0.2111, 0.2111, 0.17491, 0.11994, 0.15611, 0.38918, 0.39594, 0.40841, 0.35347], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effets nocifs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45717, 0.49082, 0.49352, 0.49461, 0.68992, 0.69158, 0.68774, 0.68452, 0.6843, 0.68457, 0.50723, 0.46282, 0.46257, 0.46257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082045, 0.082034, 0.081925, 0.08174, 0.081574, 0.14289, 0.07434, 0.074024, 0.046436, 0.046431, 0.036535, 0.023039, 0.023039, 0.018127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des ressources": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23513, 0.47935, 0.48127, 0.43348, 0.43359, 0.43354, 0.43296, 0.53348, 0.78649, 0.78277, 0.77534, 0.77204, 0.77171, 0.77162, 0.70446, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"droit français": {
men: [0.10153, 0.11352, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048556, 0.045865, 0.043763, 0.040947, 0.042308, 0.041339, 0.042886, 0.055582, 0.048949, 0.051985, 0.053719, 0.053648, 0.036856, 0.068153, 0.072552, 0.10044, 0.13576, 0.14184, 0.12864, 0.12373, 0.12214, 0.12468, 0.12963, 0.13133, 0.13336, 0.13338, 0.13738, 0.087369, 0.12532, 0.10901, 0.092086, 0.092276, 0.096993, 0.10366, 0.1045, 0.093504, 0.087148, 0.085602, 0.085552, 0.085548, 0.092645, 0.10941, 0.0088384, 0.009548, 0.082682, 0.14476, 0.14479, 0.1484, 0.20246, 0.22956, 0.2605, 0.27502, 0.26729, 0.26436, 0.25265, 0.25776, 0.28876, 0.31002, 0.30481, 0.23114, 0.23114, 0.22402, 0.049041, 0.052113, 0.052518, 0.058177, 0.057151, 0.059577, 0.081879, 0.090823, 0.070979, 0.072205, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"directive européenne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033974, 0.03199, 0.031744, 0.031868, 0.032567, 0.032217, 0.09716, 0.097113, 0.10861, 0.15854, 0.15951, 0.16834, 0.17733, 0.12428, 0.15488, 0.21037, 0.21829, 0.21791, 0.20725, 0.20295, 0.18591, 0.18844, 0.18338, 0.18128, 0.18662, 0.18233, 0.15936, 0.14664, 0.12128, 0.071543, 0.058824, 0.057595, 0.059217, 0.062306, 0.045117, 0.04366, 0.045561, 0.045973, 0.039668, 0.040594, 0.046563, 0.059081, 0.020765, 0.02318, 0.070223, 0.13085, 0.13371, 0.13571, 0.13696, 0.16906, 0.15753, 0.15556, 0.15789, 0.15751, 0.16004, 0.21639, 0.20801, 0.20954, 0.19018, 0.13386, 0.13386, 0.12771, 0.11418, 0.031952, 0.038671, 0.01975, 0.019606, 0.019459, 0.017446, 0.017427, 0.018834, 0.019888, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement régional": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030184, 0.03088, 0.03088, 0.044559, 0.047045, 0.047304, 0.047409, 0.047465, 0.043883, 0.048334, 0.18991, 0.18985, 0.16154, 0.20377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21636, 0.18171, 0.32477, 0.29348, 0.24092, 0.22275, 0.2058, 0.20483, 0.20288, 0.16614, 0.16607, 0.16605, 0.11517, 0.11793, 0, 0, 0.16713, 0.17376, 0.19081, 0.19953, 0.21004, 0.28456, 0.204, 0.22821, 0.22868, 0.22883, 0.31352, 0.36308, 0.41236, 0.41249, 0.19043, 0.19032, 0.19031, 0.10289, 0.10286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transformation écologique": {
men: [0.35776, 0.35865, 0.41574, 0.41548, 0.28061, 0.21754, 0.21754, 0.30959, 0.30964, 0.30966, 0.3102, 0.3102, 0.31009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2909, 0.27427, 0.27424, 0.25706, 0.25711, 0.29787, 0.41865, 0.30946, 0.30946, 0.3095, 0.33533, 0.23917, 0.23919, 0.26163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modèle agricole": {
men: [0.26547, 0.26613, 0.26632, 0.29083, 0.29093, 0.37453, 0.40419, 0.40419, 0.98176, 0.98181, 0.98352, 0.80139, 0.80112, 0.80177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fret humanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40246, 0.50017, 0.50001, 0.50021, 0.50074, 0.5007, 0.50043, 0.50043, 0.49898, 0.48747, 0.48573, 0.48543, 0.48532, 0.48532, 0.68628, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 