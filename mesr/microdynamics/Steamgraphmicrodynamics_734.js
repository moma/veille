var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"affaire Elf": {
men: [0, 0, 0.81487, 0.81444, 0.81378, 0.70545, 0.70539, 0.70569, 0.70536, 0.70525, 0.70527, 0.66455, 0.66343, 0.6631, 0.66351, 0.76983, 0.38987, 0.38985, 0.38995, 0.65392, 0.42028, 0.52922, 0.5218, 0.42418, 0.66091, 0.66392, 0.66326, 0.68573, 0.68596, 0.68659, 0.64954, 0.64945, 0.62094, 0.61987, 0.6871, 0.71192, 0.77892, 0.87195, 0.7799, 0.87485, 0.87503, 0.084868, 0.084812, 0.084798, 0.084706, 0.084608, 0.085693, 0.08568, 0.085626, 0.044499, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94935, 0.9497, 0.95138, 0.95204, 0.95199, 0.95305, 0.95324, 0.95349, 0.95317, 0.95328, 0.95304, 0.9526, 0.95281, 0.95267, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Parlement européen": {
men: [0.12612, 0.087011, 0.076465, 0.076033, 0.066617, 0.043334, 0.047418, 0.020382, 0.050034, 0.049581, 0.049032, 0.050495, 0.052187, 0.055356, 0.068771, 0.28113, 0.33786, 0.3338, 0.32055, 0.41608, 0.39699, 0.36549, 0.37828, 0.37851, 0.33225, 0.31, 0.31917, 0.27029, 0.2372, 0.095298, 0.087924, 0.088767, 0.089844, 0.090799, 0.13394, 0.12065, 0.10057, 0.1664, 0.16769, 0.17055, 0.15293, 0.21051, 0.20264, 0.11844, 0.14445, 0.14713, 0.14476, 0.15072, 0.13711, 0.14182, 0.1335, 0.12658, 0.12696, 0.1272, 0.12662, 0.12047, 0.11904, 0.14378, 0.12042, 0.11497, 0.11371, 0.087707, 0.099491, 0.09809, 0.14438, 0.13875, 0.13913, 0.14068, 0.14808, 0.12376, 0.12917, 0.13576, 0.13225, 0.13821, 0.14222, 0.1562, 0.15579, 0.14945, 0.10637, 0.098267, 0.093323, 0.098082, 0.086098, 0.089678, 0.10272, 0.14751, 0.1638, 0.15164, 0.14951, 0.14032, 0.14977, 0.14162, 0.15851, 0.19981, 0.1967, 0.17516, 0.19511, 0.19681, 0.17764, 0.13494, 0.14888, 0.15003, 0.16483, 0.20792, 0.22364, 0.22263, 0.23342, 0.21002, 0.22048, 0.23863], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Europe ecologie": {
men: [0.065399, 0.12257, 0.14717, 0.12281, 0.12044, 0.11332, 0.12499, 0.078476, 0.061926, 0.060829, 0.064227, 0.063385, 0.063278, 0.063777, 0.048725, 0.24866, 0.26697, 0.2685, 0.2576, 0.24249, 0.23101, 0.20981, 0.18011, 0.17259, 0.17325, 0.18366, 0.18331, 0.18045, 0.17505, 0.14213, 0.13632, 0.13294, 0.13801, 0.13145, 0.12899, 0.13375, 0.13268, 0.11865, 0.1344, 0.12628, 0.12179, 0.12144, 0.11292, 0.11122, 0.11342, 0.11934, 0.10242, 0.10948, 0.10765, 0.10066, 0.10533, 0.1095, 0.060945, 0.056678, 0.060046, 0.061473, 0.068501, 0.067106, 0.072341, 0.06846, 0.069959, 0.060039, 0.071654, 0.14673, 0.17476, 0.18895, 0.2169, 0.2105, 0.22759, 0.20785, 0.20811, 0.20687, 0.19757, 0.19524, 0.18652, 0.19576, 0.18993, 0.12299, 0.085079, 0.076674, 0.050714, 0.049616, 0.052864, 0.083081, 0.068756, 0.069672, 0.073632, 0.067066, 0.073398, 0.06057, 0.097153, 0.082699, 0.081016, 0.076763, 0.077138, 0.07962, 0.082292, 0.07355, 0.15892, 0.15345, 0.1537, 0.16551, 0.16499, 0.17557, 0.1605, 0.15045, 0.17731, 0.20715, 0.19391, 0.16986], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eurodéputés": {
men: [0.091877, 0.06138, 0.052944, 0.052916, 0.053598, 0.092176, 0.22551, 0, 0, 0, 0, 0, 0, 0, 0, 0.36248, 0.36281, 0.36279, 0.34001, 0.23462, 0.17713, 0.14965, 0.18016, 0.19146, 0.17879, 0.16769, 0.15846, 0.1688, 0.16035, 0.087016, 0.08703, 0.087018, 0.099017, 0.12454, 0.11864, 0.12718, 0.10099, 0.094302, 0.089853, 0.098604, 0.17111, 0.23197, 0.22045, 0.16765, 0.16711, 0.15979, 0.1516, 0.14292, 0.16929, 0.14366, 0.13361, 0.12575, 0.12664, 0.13448, 0.1209, 0.089699, 0.094514, 0.10065, 0.08966, 0.093216, 0.095128, 0.080469, 0.067107, 0.070242, 0.077171, 0.071574, 0.072598, 0.065636, 0.061788, 0.054564, 0.046391, 0.049425, 0.037972, 0.037968, 0.037457, 0.038727, 0.047758, 0.049981, 0.038222, 0.056608, 0.058227, 0.067946, 0.04907, 0.04376, 0.13895, 0.15342, 0.19215, 0.19219, 0.14441, 0.14993, 0.13047, 0.13761, 0.13785, 0.13496, 0.13496, 0.1252, 0.12489, 0.13891, 0.079685, 0.068115, 0.065131, 0.065117, 0.096519, 0.090786, 0.18641, 0.23587, 0.33965, 0.33526, 0.34516, 0.34119], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transformation écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5822, 0.58217, 0.73616, 0.4216, 0.3289, 0.32865, 0.3284, 0.5888, 0.51739, 0.43904, 0.46526, 0.43738, 0.43092, 0.43132, 0.38946, 0.38941, 0.34932, 0.38236, 0.38082, 0.35953, 0.35938, 0.15891, 0.093897, 0.13263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15513, 0.15534, 0.15551, 0.16868, 0.20574, 0.20587, 0.22417, 0.34624, 0.37746, 0.3782, 0.42347, 0.35877, 0.34182, 0.30819, 0.17965, 0.17436, 0.17439, 0.17433, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20305, 0.16365, 0.50484, 0.42817], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Corinne lepage": {
men: [0, 0.021308, 0.02427, 0.043483, 0.069232, 0.1433, 0.1797, 0.1891, 0.18497, 0.19288, 0.19289, 0.19846, 0.1589, 0.15882, 0.1906, 0.19956, 0.21887, 0.21402, 0.20681, 0.19624, 0.16146, 0.13775, 0.1749, 0.22721, 0.21291, 0.20326, 0.22214, 0.19681, 0.19297, 0.19691, 0.18412, 0.19499, 0.36163, 0.35714, 0.33946, 0.34309, 0.32826, 0.31591, 0.31408, 0.31184, 0.30455, 0.31774, 0.31851, 0.30693, 0.31139, 0.30675, 0.20146, 0.12978, 0.12574, 0.09534, 0.094012, 0.10983, 0.099264, 0.10455, 0.12195, 0.11011, 0.10568, 0.10433, 0.10144, 0.094518, 0.087072, 0.069715, 0.065508, 0.068606, 0.074145, 0.063105, 0.064785, 0.067612, 0.059105, 0.062938, 0.063761, 0.069475, 0.07369, 0.076102, 0.076235, 0.12003, 0.17383, 0.06724, 0.052495, 0.053423, 0.03992, 0.013723, 0.016951, 0.016363, 0.017677, 0.017386, 0.081596, 0.081613, 0.11508, 0.10635, 0.10552, 0.10414, 0.096355, 0.093232, 0.092922, 0.10324, 0.11392, 0.11158, 0.10211, 0.082088, 0.038352, 0.038343, 0.005643, 0.0064009, 0.0034019, 0.0029357, 0.069076, 0.11787, 0.1764, 0.16601], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de réacteur nucléaire expérimental": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96184, 0.9616, 0.96116, 0.96136, 0.96122, 0.96396, 0.96376, 0.96325, 0.962, 0.96095, 0.96098, 0.96109, 0.96116, 0.9606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-vincent placé": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082675, 0.078352, 0.078374, 0.12285, 0.11565, 0.18362, 0.251, 0.26275, 0.31971, 0.31984, 0.32545, 0.32552, 0.31201, 0.3123, 0.29302, 0.29844, 0.26839, 0.25103, 0.26484, 0.27027, 0.23792, 0.23283, 0.13523, 0.14656, 0.13354, 0.096756, 0.11432, 0.10954, 0.10942, 0.1093, 0.18741, 0.21713, 0.21699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96173, 0.96121, 0.48061, 0.48009, 0.47998, 0.47988, 0.47943, 0.4792, 0.31947, 0.27394, 0.25304, 0.27642, 0.18005], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe pandémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37776, 0.37756, 0.54449, 0.5439, 0.54391, 0.54398, 0.94551, 0.94495, 0.94444, 0.94445, 0.94343, 0.94322, 0.94302, 0.94214, 0.93528, 0.93529, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandémie grippale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01414, 0.014826, 0.01483, 0.018657, 0.018659, 0.018654, 0.018645, 0.02789, 0.037565, 0.037672, 0.076538, 0.076497, 0.12432, 0.9488, 0.94532, 0.94544, 0.94551, 0.94495, 0.94444, 0.94445, 0.94343, 0.94322, 0.94302, 0.18348, 0.10186, 0.10186, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"h5n1": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28776, 0.078687, 0.078708, 0.047805, 0.047811, 0.047799, 0.047777, 0.047787, 0.04778, 0.054153, 0.10802, 0.10796, 0.1568, 0.15663, 0.11364, 0.21274, 0.21276, 0.94495, 0.94444, 0.94445, 0.94343, 0.94322, 0.94302, 0.94214, 0.93528, 0.93529, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistance humanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94942, 0.94891, 0.94892, 0.94789, 0.94768, 0.94749, 0.94659, 0.94614, 0.94615, 0.94651, 0.94609, 0.94554, 0.94524], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fiscalité écologique": {
men: [0.45413, 0.45493, 0.38125, 0.38105, 0.38074, 0.38064, 0.3806, 0.38077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50056, 0.36615, 0.47291, 0.54102, 0.54085, 0.54191, 0.54213, 0.54307, 0.51573, 0.51555, 0.42493, 0.42488, 0.42495, 0.49034, 0.3188, 0.20528, 0.10662, 0.085542, 0.071502, 0.067247, 0.061517, 0.051858, 0.049726, 0.031799, 0.032674, 0.032681, 0.032264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046956, 0.061813, 0.062624, 0.06261, 0.063298, 0.065964, 0.065932, 0.065933, 0.065958, 0.065928, 0.065891, 0.06572], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Jean-Pierre Muller": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32388, 0.29528, 0.30996, 0.30974, 0.30961, 0.30961, 0.30951, 0.30955, 0.30962, 0.30945, 0.30925, 0.3092, 0.30886, 0.32026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49876, 0.49894, 0.49982, 0.50017, 0.50015, 0.5007, 0.5008, 0.50093, 0.50076, 0.50082, 0.5007, 0.50047, 0.50058, 0.5005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Cécile duflot": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083686, 0.083689, 0.083821, 0.13503, 0.13497, 0.18405, 0.12458, 0.24253, 0.24251, 0.25478, 0.20807, 0.21579, 0.23731, 0.19507, 0.22376, 0.23014, 0.20262, 0.1407, 0.1446, 0.14286, 0.13926, 0.13209, 0.12855, 0.12593, 0.12372, 0.1263, 0.12432, 0.14622, 0.11036, 0.088077, 0.090344, 0.14191, 0.13159, 0.13221, 0.14585, 0.15225, 0.16618, 0.17486, 0.16763, 0.17064, 0.15062, 0.085341, 0.088603, 0.08171, 0.24226, 0.27529, 0.28616, 0.23018, 0.23185, 0.23147, 0.20133, 0.20154, 0.17281, 0.15411, 0.16144, 0.12275, 0.12736, 0.12404, 0.041186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18002, 0.15425, 0.10143, 0.072231, 0.072215, 0.066644, 0.063853, 0.061883, 0.059381, 0.18708, 0.25059, 0.24569, 0.2094], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt domaniale": {
men: [0.070378, 0.15549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059797, 0.0519, 0.051908, 0.051918, 0.05189, 0.051856, 0.051847, 0.051791, 0.092325, 0.092508, 0.12986, 0.12978, 0.15145, 0.15944, 0.39477, 0.94782, 0.94712, 0.9472, 0.94724, 0.94731, 0.94765, 0.94837, 0.94315, 0.94414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"restauration rapide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17254, 0.14349, 0.25117, 0.24772, 0.25843, 0.21898, 0.21335, 0.21331, 0.20679, 0.19697, 0.19736, 0.19733, 0.23345, 0.26322, 0.15352, 0.10737, 0.0085961, 0.0086963, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32974, 0.23038, 0.23034, 0.21565, 0.1989, 0.18006, 0.17385, 0.16739, 0.1674, 0.16843, 0.13832, 0.13824, 0.13258, 0.19939, 0.17072, 0.22911, 0.30844, 0.39046, 0.47023, 0.47931, 0.4939, 0.57084, 0.57051, 0.60168], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agrochimie": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.012872, 0.012859, 0.01407, 0.019423, 0.01928, 0.019158, 0.018531, 0.018516, 0.017316, 0.016938, 0.017197, 0.017213, 0.016876, 0.10196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28045, 0.4003, 0.40102, 0.36773, 0.34395, 0.29832, 0.31563, 0.18786, 0.18779, 0.18789, 0.18787, 0.1879, 0.14458, 0.14463, 0.099108, 0.041828, 0.041826, 0.042547, 0.043154, 0.047144, 0.047128, 0.021253, 0.021248, 0.021238, 0.021242, 0.021239, 0, 0.20057, 0.20047, 0.4025, 0.40206, 0.40207, 0.40212, 0.40215, 0.40191, 0.40169, 0.3921, 0.39168, 0.39159, 0.39151, 0.20441, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Daniel cohn-bendit": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12448, 0.11494, 0.12958, 0.099817, 0.078738, 0.15597, 0.17374, 0.19527, 0.20468, 0.19806, 0.19305, 0.19618, 0.19539, 0.19766, 0.19638, 0.19502, 0.19367, 0.21159, 0.2351, 0.21259, 0.20883, 0.1648, 0.091298, 0.10075, 0.11974, 0.1446, 0.16439, 0.14977, 0.12239, 0.13039, 0.16886, 0.18099, 0.094051, 0.10295, 0.13478, 0.14341, 0.14161, 0.11853, 0.12581, 0.10402, 0.098906, 0.10136, 0.097324, 0.097461, 0.088519, 0.089836, 0.10101, 0.095249, 0.075962, 0.073574, 0.075279, 0.039877, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12401, 0.27008, 0.25957, 0.25958, 0.2376, 0.30997, 0.29046, 0.22901], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écologistes": {
men: [0, 0.042529, 0.041516, 0.041261, 0.039117, 0.035555, 0.031539, 0.042008, 0.041289, 0.031496, 0.032444, 0.033054, 0.035305, 0.03637, 0.038546, 0.013594, 0.013783, 0.012787, 0.017476, 0.06393, 0.078321, 0.097828, 0.11323, 0.14335, 0.18389, 0.2233, 0.21845, 0.22208, 0.2063, 0.19651, 0.20004, 0.19367, 0.20659, 0.18861, 0.1843, 0.17112, 0.16643, 0.16269, 0.15247, 0.1245, 0.12197, 0.11036, 0.11728, 0.12112, 0.13249, 0.14834, 0.12303, 0.12057, 0.12777, 0.15107, 0.15289, 0.16344, 0.09195, 0.053147, 0.055028, 0.054752, 0.053638, 0.053358, 0.043359, 0.042745, 0.04259, 0.039847, 0.032851, 0.025279, 0.031849, 0.028569, 0.038721, 0.050317, 0.030676, 0.02802, 0.031352, 0.030226, 0.026427, 0.024778, 0.024549, 0.030855, 0.031142, 0.022423, 0.013531, 0.014126, 0.010124, 0.010423, 0.012728, 0.015029, 0.0092137, 0.010715, 0.010862, 0.01312, 0.014004, 0, 0, 0, 0, 0.025655, 0.021879, 0.022179, 0.023213, 0.070883, 0.18393, 0.16768, 0.13329, 0.11773, 0.10983, 0.10835, 0.098658, 0.098298, 0.13269, 0.16139, 0.17186, 0.1611], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion de la pandémie": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94141, 0.94091, 0.94633, 0.9453, 0.94532, 0.94544, 0.62106, 0.62069, 0.62036, 0.62036, 0.17481, 0.17477, 0.17473, 0.17457, 0.096417, 0.096417, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations éoliennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95157, 0.95055, 0.94978, 0.94883, 0.94827, 0.94859, 0.94946, 0.44006, 0.44, 0.43695, 0.4362, 0.23576, 0.2356, 0.12274, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protection de la biodiversité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14272, 0.15431, 0.15445, 0.19314, 0.1932, 0.21236, 0.34296, 0.61808, 0.61761, 0.61657, 0.61591, 0.6154, 0.95634, 0.95578, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048855, 0.030485, 0.011521, 0.010816, 0.011144, 0.011146, 0.011144, 0.010869, 0.11147, 0.082431, 0.15531, 0.14872, 0.14092, 0.14094, 0.13098, 0.12971, 0.16651, 0.15194, 0.14409, 0.14406, 0.14403, 0.14574, 0.095153, 0.12787, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"producteurs de porcs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38254, 0.38289, 0.38287, 0.38297, 0.38259, 0.38242, 0.38212, 0.94751, 0.9459, 0.94489, 0.94412, 0.94317, 0.34413, 0.34425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Association Internationale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18451, 0.18437, 0.18423, 0.18392, 0.32343, 0.32317, 0.32285, 0.26434, 0.26443, 0.35172, 0.35178, 0.67001, 0.66536, 0.66422, 0.57301, 0.2618, 0.26168, 0.26169, 0.26566, 0.2657, 0.26575, 0.3237, 0.27621, 0.11523, 0.11511, 0.11498, 0.1152, 0.11519, 0.11511, 0.1152, 0.071723, 0.064571, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cultures de maïs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1829, 0.49629, 0.52793, 0.50101, 0.52827, 0.52886, 0.52896, 0.58863, 0.58843, 0.5885, 0.62095, 0.64625, 0.64639, 0.64629, 0.86693, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise sanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27471, 0.27481, 0.2753, 0.27549, 0.6547, 0.65543, 0.65555, 0.65573, 0.65551, 0.95245, 0.95221, 0.95178, 0.60581, 0.28969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"front de gauche": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063646, 0.061557, 0.065726, 0.092108, 0.12414, 0.094848, 0.050949, 0.044759, 0.044766, 0.042979, 0.028316, 0.027989, 0.028224, 0.02776, 0, 0, 0, 0, 0, 0, 0, 0.0094144, 0.0094042, 0.0093475, 0.0074384, 0.0070435, 0.0071643, 0.018421, 0.025698, 0.033496, 0.03627, 0.037753, 0.039456, 0.039458, 0.041843, 0.034764, 0.03479, 0.035253, 0.054905, 0.053249, 0.051714, 0.032341, 0.082079, 0.067419, 0.22188, 0.19402, 0.19256, 0.15887, 0.19998, 0.2023, 0.19275, 0.19387, 0.21654, 0.316, 0.35574, 0.37612, 0.3472, 0.32706, 0.21873, 0.23169, 0.2356, 0.2883, 0.19158, 0.20088, 0.21101, 0.20363, 0.1804, 0.10877, 0.10999, 0.049133, 0.038624, 0.040972, 0.044892, 0.045403, 0.046565, 0.048225, 0.053913, 0.053913, 0.051423, 0.0529, 0.056139, 0.072204, 0.021009, 0.093695, 0.10962, 0.10189, 0.099855, 0.11279], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"danger imminent": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.54017, 0.54077, 0.54087, 0.54102, 0.54083, 0.5409, 0.54076, 0.54051, 0.54063, 0.54055, 0.54209, 0.62614, 0.62581, 0.96591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 