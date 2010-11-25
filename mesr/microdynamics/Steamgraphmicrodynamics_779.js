var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"énergie thermique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94213, 0.2431, 0.13967, 0.11689, 0.11694, 0.11695, 0.10094, 0.10102, 0.088296, 0.088378, 0.088372, 0.088409, 0.088557, 0.088594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93925, 0.95779, 0.9575, 0.95816, 0.95807, 0.95781, 0.95821, 0.95843, 0.95945, 0.9626, 0.96313, 0.96338, 0.96371, 0.96821, 0.96746, 0.96326, 0.96391, 0.96349, 0.96341, 0.96356, 0.96325, 0.96248, 0.96288, 0.96052, 0.96017, 0.96036, 0.96066, 0.92999, 0.95372, 0.9527, 0.95218, 0.95168, 0.95059, 0.95948, 0.95947, 0.95992, 0.95943, 0.95921, 0.49972, 0.49979, 0.49973, 0.49962, 0.39299, 0.39346, 0.39353, 0.39345, 0.39391, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31702, 0.31724, 0.31739, 0.3175, 0.31741, 0.31776, 0.24272, 0.24288, 0.49554, 0.4957, 0.49548], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eau chaude": {
men: [0.04369, 0.043946, 0.039181, 0.039149, 0.039139, 0.014935, 0.013753, 0.020961, 0, 0, 0, 0, 0, 0, 0, 0.042247, 0.05942, 0.05947, 0.050318, 0.031124, 0.043061, 0.033439, 0.035835, 0.035859, 0.030128, 0.028873, 0.023678, 0.017322, 0.057733, 0.048083, 0.040355, 0.040364, 0.04195, 0.046404, 0.072867, 0.078743, 0.074925, 0.070005, 0.071699, 0.071588, 0.076061, 0.085073, 0.052483, 0.13028, 0.16509, 0.16508, 0.17285, 0.19727, 0.25801, 0.30623, 0.29979, 0.30995, 0.32029, 0.32614, 0.29114, 0.30311, 0.30308, 0.30929, 0.33153, 0.3315, 0.35526, 0.34139, 0.33416, 0.26527, 0.28771, 0.29399, 0.28405, 0.26465, 0.38392, 0.39461, 0.41983, 0.41412, 0.37294, 0.37251, 0.35962, 0.33878, 0.31458, 0.31389, 0.2941, 0.2937, 0.30052, 0.32371, 0.2795, 0.29078, 0.2884, 0.27353, 0.26296, 0.25715, 0.26835, 0.14038, 0.12772, 0.16928, 0.15802, 0.1258, 0.12576, 0.11983, 0.13856, 0.12186, 0.10125, 0.097245, 0.093276, 0.094546, 0.091615, 0.15815, 0.14241, 0.22998, 0.24828, 0.31279, 0.31289, 0.28016], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fortes chaleurs": {
men: [0.067529, 0.033897, 0.067096, 0.067041, 0.10063, 0.22171, 0.28112, 0.27381, 0.36258, 0.39199, 0.37707, 0.38813, 0.38614, 0.34021, 0.4508, 0.49141, 0.44835, 0.44872, 0.42824, 0.30657, 0.24776, 0.24496, 0.23005, 0.21944, 0.22466, 0.20219, 0.13788, 0.20168, 0.12103, 0.095014, 0.11898, 0.039682, 0.039744, 0.10928, 0.10931, 0.11144, 0.10308, 0.10298, 0.10533, 0.10543, 0.11797, 0.084924, 0.084957, 0.084931, 0.085876, 0.22968, 0.22962, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39512, 0.60262, 0.61261, 0.61273, 0.61292, 0.6142, 0.959, 0.95798, 0.95745, 0.95696, 0.95586, 0.95541, 0.95539, 0.95584, 0.92611, 0.92589, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96174, 0.73377, 0.73352, 0.73369, 0.7337, 0.73387, 0.73386, 0.638, 0.63846, 0.63876, 0.63898, 0.63879, 0.63949, 0.63877, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Rayonnement électromagnétique": {
men: [0.42364, 0.35411, 0.35422, 0.52117, 0.52104, 0.52122, 0.5216, 0.52156, 0.64208, 0.64179, 0.37713, 0.37705, 0.41386, 0.22571, 0.28726, 0.2677, 0.26767, 0.26789, 0.26784, 0.25155, 0.25156, 0.25153, 0.149, 0.1491, 0.39761, 0.39759, 0.39775, 0.39842, 0.41199, 0.2564, 0.25639, 0.25645, 0.25685, 0.28685, 0.28691, 0.15969, 0.40928, 0.40887, 0.33517, 0.33549, 0.33537, 0.31905, 0.31917, 0.32789, 0.29987, 0.29984, 0.29976, 0.29989, 0.25258, 0.26514, 0.054585, 0.054615, 0.054629, 0.054648, 0.054558, 0.057051, 0.057045, 0.075892, 0, 0, 0, 0.23113, 0.29986, 0.61492, 0.63964, 0.6392, 0.49351, 0.49367, 0.49469, 0.52691, 0.5227, 0.52241, 0.56572, 0.56507, 0.5648, 0.50447, 0.54918, 0.53652, 0.47842, 0.35114, 0.302, 0.30197, 0.17318, 0.18878, 0.15808, 0.14919, 0.1186, 0.11873, 0.10888, 0.10889, 0.10889, 0.086049, 0.084372, 0.045015, 0.048104, 0.048115, 0.078835, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géothermie": {
men: [0.041532, 0.04431, 0.044337, 0.043623, 0.043391, 0.032158, 0.01495, 0.024076, 0.02629, 0.027284, 0.027272, 0.027267, 0.037289, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02006, 0.13799, 0.40215, 0.40201, 0.40239, 0.55544, 0.64419, 0.64444, 0.6118, 0.67354, 0.67347, 0.67329, 0.67357, 0.70383, 0.86533, 0.61557, 0.482, 0.47585, 0.47601, 0.47523, 0.3486, 0.34857, 0.32256, 0.30754, 0.24225, 0.24229, 0.24221, 0.22188, 0.16178, 0.16183, 0.13187, 0.13458, 0.10849, 0.18163, 0.18156, 0.20297, 0.15788, 0.23777, 0.26326, 0.28707, 0.30371, 0.30011, 0.31457, 0.32848, 0.33109, 0.33114, 0.33987, 0.32013, 0.31007, 0.31151, 0.45124, 0.34281, 0.34321, 0.30182, 0.2344, 0.32315, 0.26224, 0.21164, 0.25009, 0.25001, 0.30086, 0.68355, 0.75397, 0.45201, 0.35945, 0.35971, 0.31543, 0.303, 0.41296, 0.36475, 0.37052, 0.37077, 0.37082, 0.37094, 0.37078], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éruptions volcaniques": {
men: [0.21397, 0.21404, 0.2141, 0.21393, 0.21387, 0.11209, 0.11217, 0.12555, 0.091523, 0.22092, 0.20176, 0.20591, 0.28936, 0.26895, 0.26896, 0.26873, 0.25353, 0.23553, 0.23548, 0.23559, 0.23561, 0.18929, 0.16758, 0.073733, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085398, 0.085424, 0.1058, 0.10582, 0.10585, 0.24196, 0.24187, 0.24161, 0.94758, 0.94709, 0.94601, 0.94828, 0.94826, 0.94871, 0.94408, 0.94386, 0.94209, 0.94222, 0.94212, 0.95119, 0.95136, 0.9525, 0.95048, 0.9503, 0.95141, 0.94956, 0.56979, 0.56976, 0.57029, 0.57005, 0.57119, 0.571, 0.19306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"téléphones usagés": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95492, 0.95469, 0.95441, 0.95455, 0.95444, 0.95423, 0.95439, 0.95554, 0.9557, 0.95553, 0.95664, 0.95708, 0.95716, 0.95712, 0, 0, 0, 0, 0, 0.93149, 0.93171, 0.93169, 0.93147, 0.93214, 0.93258, 0.9329, 0.93262, 0.93365, 0.9326, 0.93324, 0.93336, 0.93366, 0.93324], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pelotes microscopiques": {
men: [0.94049, 0.94076, 0.94105, 0.94029, 0.94005, 0.53549, 0.53588, 0.53585, 0.53574, 0.5355, 0.28432, 0, 0, 0, 0.33839, 0.3381, 0.33805, 0.33834, 0.33827, 0.35646, 0.35648, 0.35645, 0.27168, 0.27186, 0.41584, 0.41581, 0.41599, 0.33451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10956, 0.1864, 0.18634, 0.18647, 0.18645, 0.1864, 0.28187, 0.28193, 0.1808, 0.1808, 0.23872, 0.23878, 0.23886, 0.23847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26003, 0.51567, 0.51538, 0.67785, 0.67707, 0.67675, 0.67674, 0.51056, 0.5103, 0.51018, 0.65206, 0.65215, 0.65207, 0.49973, 0.40594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0.94049, 0.53571, 0.53588, 0.53544, 0.53531, 0.37432, 0.3746, 0.37457, 0.3745, 0.37433, 0.2314, 0, 0, 0, 0.27962, 0.3381, 0.33805, 0.33834, 0.33827, 0.35646, 0.35648, 0.35645, 0.27168, 0.27186, 0.41584, 0.41581, 0.41599, 0.33451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10956, 0.1864, 0.18634, 0.18647, 0.18645, 0.1864, 0.28187, 0.28193, 0.1808, 0.1808, 0.23872, 0.23878, 0.23886, 0.23847, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26003, 0.51567, 0.51538, 0.67785, 0.67707, 0.67675, 0.67674, 0.51056, 0.5103, 0.51018, 0.65206, 0.65215, 0.65207, 0.49973, 0.40594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités mexicaines": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9316, 0.93165, 0.93798, 0.93866, 0.93929, 0.94017, 0.94011, 0.9405, 0.94207, 0.94246, 0.94386, 0.94383, 0.94404, 0.94552, 0.9385, 0.93871, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95577, 0.95575, 0.95553, 0.95621, 0.95666, 0.95699, 0.9567, 0.95776, 0.15945, 0.15956, 0.15958, 0.15963, 0.15956], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produire de l' électricité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053282, 0.068151, 0.071926, 0.074255, 0.088809, 0.21116, 0.32087, 0.32114, 0.64131, 0.64162, 0.64166, 0.5475, 0.5479, 0.54827, 0.42625, 0.42622, 0.4264, 0.46121, 0.39577, 0.32194, 0.33951, 0.30507, 0, 0, 0, 0, 0, 0, 0.20328, 0.20348, 0.33778, 0.277, 0.39659, 0.48133, 0.48166, 0.54873, 0.57003, 0.57026, 0.5197, 0.51897, 0.49721, 0.4503, 0.4103, 0.41044, 0.2636, 0.25183, 0.17642, 0.1226, 0.11665, 0.11579, 0.096905, 0.082042, 0.084244, 0.037052, 0.044598, 0.05062, 0.048189, 0.043101, 0.047936, 0.049369, 0.047316, 0.057707, 0.05658, 0.056887, 0.059187, 0.069719, 0.066883, 0.09115, 0.13675, 0.11576, 0.12669, 0.16482, 0.19227, 0.21006, 0.25695, 0.26115, 0.3018, 0.30215, 0.2651, 0.26889, 0.41202, 0.34758, 0.20889, 0.22012, 0.22005, 0.2201, 0.1711, 0.18239, 0.18239, 0.20579, 0.24906, 0.22324, 0.21886, 0.20516, 0.066747, 0.081523, 0.075671, 0.07397, 0.070302, 0.070271], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équivalent pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95882, 0.95905, 0.96007, 0.96007, 0.9606, 0.96085, 0.96118, 0.95959, 0.6257, 0.46419, 0.4645, 0.35777, 0.35774, 0.35779, 0, 0, 0, 0, 0.020167, 0.020171, 0.020178, 0.02022, 0.0293, 0.4749, 0.47464, 0.95391, 0.95282, 0.95237, 0.95235, 0.9528, 0.95231, 0.95209, 0.95121, 0.95134, 0.95123, 0.95102, 0.95119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94746, 0.94746, 0.94799, 0.94823, 0.94855, 0.94699, 0.94681, 0.94672, 0.94736, 0.94695, 0.94687, 0.94702, 0.94671, 0.94596, 0, 0, 0.92759, 0.92777, 0.92807, 0.92999, 0.92965, 0.92866, 0.92814, 0.92766, 0.9266, 0.23073, 0.23072, 0.23083, 0.23072, 0.23066, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0.34535, 0.28714, 0.28723, 0.24798, 0.35878, 0.30527, 0.24217, 0.2212, 0.12864, 0.12858, 0.12853, 0.1285, 0.12864, 0.15092, 0.15093, 0.162, 0.16198, 0.19582, 0.19578, 0.24051, 0.40008, 0.57416, 0, 0, 0, 0, 0, 0, 0.20952, 0.35391, 0.69894, 0.69909, 0.70019, 0.52356, 0.34823, 0.21826, 0.21812, 0.2179, 0.20022, 0.20041, 0.20034, 0.25604, 0.22352, 0.22346, 0.15614, 0.15612, 0.24441, 0.26974, 0.33999, 0.49169, 0.38701, 0.38722, 0.45041, 0.45056, 0.44982, 0.32716, 0.32712, 0.32735, 0.40997, 0.40993, 0.29261, 0.29251, 0.29228, 0.40597, 0.40039, 0.34209, 0.34216, 0.2959, 0.2579, 0.29761, 0.29729, 0.29713, 0.034669, 0.034629, 0.034613, 0.034612, 0.027527, 0.022422, 0.028588, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036269, 0.15949, 0.13575, 0.13572, 0.13582, 0.13588, 0.13593, 0.13589, 0.11494, 0.1875, 0.28584, 0.28588, 0.28597, 0.28584], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cultures énergétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95089, 0.9504, 0.94931, 0.94886, 0.94885, 0.94929, 0.94881, 0.94859, 0.94831, 0.94844, 0.94833, 0.94812, 0.94829, 0.94943, 0, 0, 0, 0, 0, 0, 0, 0.95761, 0.95952, 0.9592, 0.95942, 0.95943, 0.95965, 0.50267, 0.50255, 0.50291, 0.50315, 0.50332, 0.33846, 0.30784, 0.30749, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt française": {
men: [0.064216, 0.064235, 0.064255, 0.064203, 0.064186, 0.080612, 0.080671, 0.44205, 0.44196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94381, 0.94522, 0.94518, 0.94539, 0.94687, 0.94645, 0.95353, 0.95256, 0.95197, 0.951, 0.95066, 0.95158, 0.95124, 0.95114, 0.94521, 0.94493, 0.94558, 0.94549, 0.94523, 0.94562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092758, 0.16989, 0.11367, 0.11375, 0.11381, 0.11385, 0.11381, 0.12781, 0.096378, 0.096444, 0.11529, 0.11533, 0.11528], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rendement énergétique": {
men: [0, 0, 0, 0.019523, 0.019518, 0.02224, 0.022256, 0.025267, 0.025262, 0.025251, 0.029192, 0.029185, 0.029217, 0.048425, 0.048428, 0.07227, 0.15526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.66286, 0.66385, 0.66383, 0.66397, 0.66501, 0.66471, 0.66486, 0.48703, 0.48672, 0.48623, 0.48605, 0.48652, 0.62678, 0.62672, 0, 0, 0, 0, 0, 0.13677, 0.1368, 0.15378, 0.15378, 0.15387, 0.1539, 0.15396, 0.37341, 0.37334, 0.41051, 0.41079, 0.41061, 0.41058, 0.41064, 0.62439, 0.62389, 0.62415, 0.35507, 0.25906, 0.2539, 0.25398, 0, 0, 0, 0, 0, 0, 0, 0.10823, 0.10828, 0.10822, 0.18365, 0.27156, 0.28188, 0.28185, 0.35434, 0.32828, 0.32867, 0.35653, 0.35646, 0.41818, 0.41837, 0.0891, 0.079645, 0.079719, 0, 0, 0, 0, 0, 0.10755, 0.10755, 0.092979, 0.093046, 0.093089, 0.093121, 0.18367, 0.23204, 0.095924, 0.10222, 0.10224, 0.10227, 0.10222], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industries électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9317, 0.93157, 0.93235, 0.93217, 0.93861, 0.93866, 0.94216, 0.94285, 0.94348, 0.94436, 0.9443, 0.9447, 0.94627, 0.94666, 0.94386, 0.94383, 0.94404, 0.94552, 0.9385, 0.93871, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066436, 0.060936, 0.061057, 0.061037, 0.061051, 0.079826, 0.079845, 0.079843, 0.24441, 0.24459, 0.2447, 0.24479, 0.24471, 0.24498, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections pulmonaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30132, 0.50544, 0.50547, 0.33735, 0.16224, 0.12892, 0.10228, 0.10233, 0.10233, 0.10232, 0.1024, 0.24846, 0.2487, 0.24868, 0.17826, 0.19517, 0.17206, 0.18901, 0.27582, 0.35813, 0.57541, 0.57515, 0.57528, 0.57469, 0.57433, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9544, 0.95542, 0.95542, 0.95595, 0.95619, 0.95652, 0.95495, 0.95476, 0.95467, 0.95532, 0.9549, 0.95482, 0.95497, 0.95466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"choix techniques": {
men: [0.15463, 0.33762, 0.33772, 0.33745, 0.33736, 0.33748, 0.33772, 0.3377, 0.33763, 0.33748, 0.33734, 0.33727, 0.49842, 0.95077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.75965, 0.76092, 0.76123, 0.76237, 0.96563, 0.96584, 0.96736, 0.96692, 0.96713, 0.96615, 0.96555, 0.96456, 0.96422, 0.96515, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43576, 0.43526, 0.43556, 0.43562, 0.43576, 0.43556], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11209, 0.11213, 0.11236, 0.11232, 0.1122, 0.41717, 0.41696, 0.41648, 0.41628, 0.53817, 0.53842, 0.69575, 0.69559, 0.94081, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4508, 0.45121, 0.45102, 0.45193, 0.45177, 0.45188, 0.45188, 0.53815, 0.53814, 0.80611, 0.80669, 0.80707, 0.96336, 0.96307, 0.95251, 0.95143, 0.95208, 0.95221, 0.95251, 0.95209], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vague de chaleur": {
men: [0.65517, 0.65536, 0.44881, 0.48404, 0.42722, 0.10637, 0.10644, 0.10644, 0.096121, 0.3719, 0.26131, 0.24671, 0.51572, 0.59842, 0.53767, 0.53499, 0.53492, 0.50077, 0.48953, 0.46703, 0.46705, 0.45623, 0.4635, 0.39679, 0.45373, 0.46361, 0.31358, 0.11021, 0.17696, 0.12894, 0.12893, 0.15089, 0.16909, 0.18423, 0.18427, 0.21909, 0.16003, 0.21349, 0.10592, 0.10603, 0.10599, 0.12489, 0.015683, 0.021606, 0.02162, 0.021618, 0.027728, 0.027739, 0.027745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078749, 0.078822, 0.078789, 0.078946, 0.93224, 0.93245, 0.93246, 0.93268, 0.93266, 0.93245, 0.078994, 0.079031, 0.079058, 0.079034, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ondes électromagnétiques": {
men: [0.11294, 0.11119, 0.11123, 0.15066, 0.17758, 0.17764, 0.17777, 0.28829, 0.49918, 0.49895, 0.54633, 0.54622, 0.54682, 0.45725, 0.52714, 0.75732, 0.75722, 0.74277, 0.74261, 0.74297, 0.74301, 0.62836, 0.45804, 0.45834, 0.24222, 0.2422, 0.2423, 0.24271, 0, 0, 0, 0, 0, 0, 0, 0, 0.1182, 0.11808, 0.13169, 0.13181, 0.13177, 0.13175, 0.13631, 0.19937, 0.21557, 0.21555, 0.19128, 0.15848, 0.12676, 0.13324, 0.053171, 0.0532, 0.053214, 0.053232, 0.050966, 0.024589, 0.018674, 0.018687, 0.031175, 0.029778, 0.030581, 0.069001, 0.074368, 0.076546, 0.074026, 0.073976, 0.07048, 0.070502, 0.071529, 0.12521, 0.23314, 0.23301, 0.34452, 0.42782, 0.42762, 0.28746, 0.2876, 0.27817, 0.3187, 0.21314, 0.20497, 0.20495, 0.1332, 0.10932, 0.0645, 0.061172, 0.061161, 0.05974, 0.058703, 0.058709, 0.067493, 0.046529, 0.04651, 0.01327, 0.013231, 0.013234, 0.01919, 0.021409, 0.032267, 0.03905, 0.026433, 0.028397, 0.030056, 0.030047, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bassin versant": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40281, 0.40273, 0.40317, 0.40285, 0.40287, 0.40252, 0.40247, 0.40281, 0.40273, 0.51659, 0.51662, 0.94704, 0.50348, 0.50382, 0, 0, 0, 0, 0.2191, 0.21943, 0.21942, 0.21947, 0.21981, 0.21971, 0.36622, 0.36585, 0.58259, 0.58199, 0.95066, 0.95158, 0.95124, 0.95114, 0.94521, 0.94493, 0.94558, 0.94549, 0.94523, 0.94562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phytoplancton": {
men: [0, 0, 0, 0, 0.0017652, 0.0017658, 0.0017417, 0.0018747, 0.0018743, 0.0019681, 0.0019673, 0.0019669, 0.0020396, 0.0022429, 0.0022953, 0.0031011, 0.055631, 0.20047, 0.36095, 0.36113, 0.29366, 0.29363, 0.29385, 0.35171, 0.35204, 0.35202, 0.24516, 0.24557, 0.24567, 0.24604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93836, 0.94031, 0.94903, 0.94802, 0.9475, 0.94701, 0.94592, 0.94548, 0.94546, 0.94591, 0.94542, 0.9452, 0.94492, 0.94505, 0.9404, 0.94019, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"olkiluoto": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94808, 0.94837, 0.94772, 0.94791, 0.94821, 0.95018, 0.95706, 0.95604, 0.95551, 0.95502, 0.95392, 0.95347, 0.95346, 0.95391, 0.94742, 0.9472, 0.94692, 0.94705, 0.94694, 0.94673, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone agricole": {
men: [0.033926, 0.037564, 0.043087, 0.043052, 0.043041, 0.040787, 0.043474, 0.043472, 0, 0, 0, 0, 0, 0, 0, 0.46185, 0.46179, 0.46218, 0.46208, 0.94055, 0.9406, 0.9405, 0.94119, 0.94182, 0.9427, 0.94264, 0.94303, 0.94461, 0.945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076896, 0.076928, 0.10896, 0.10907, 0.10907, 0.94128, 0.94153, 0.94185, 0.9403, 0.94012, 0.94003, 0.94066, 0.13907, 0.11119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.58848, 0.5883, 0.5887, 0.58864, 0.95629, 0.95669, 0.95691, 0.95793, 0.95793, 0.95846, 0.95871, 0.65934, 0.65825, 0.65813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37455, 0.3749, 0.37474, 0.37549, 0.37536, 0.37545, 0.37546, 0.37554, 0.37554, 0.94468, 0.94536, 0.9458, 0.94612, 0.25124, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.18187, 0.14556, 0.1233, 0.096581, 0.096687, 0.088778, 0.088783, 0.13012, 0.1301, 0.13021, 0.088166, 0.088209, 0.088213, 0.088204, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9502, 0.95671, 0.95736, 0.95695, 0.86912, 0.86925, 0.86897, 0.86828, 0.77814, 0.77838, 0.77784, 0.778, 0.77824, 0.77986, 0.65258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37379, 0.37384, 0.3738, 0.37371, 0.27277, 0.2731, 0.27315, 0.2731, 0.27342, 0.27354, 0.27357, 0.27355, 0.27381, 0.27369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 