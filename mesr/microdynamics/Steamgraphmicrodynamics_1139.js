var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"sables bitumineux": {
men: [0.30686, 0.29971, 0.40597, 0.39515, 0.37781, 0.34485, 0.30855, 0.4335, 0.43373, 0.52368, 0.52359, 0.52353, 0.58063, 0.7788, 0.78188, 0.80487, 0.76801, 0.76592, 0.76582, 0.76525, 0.79775, 0.72932, 0.72943, 0.63841, 0.63803, 0.63819, 0.63785, 0.8064, 0.80598, 0.95853, 0.95814, 0.96026, 0.96078, 0.96161, 0.30561, 0.38863, 0.30689, 0.27653, 0.2604, 0.26042, 0.26059, 0.15238, 0.15232, 0.18515, 0.18523, 0.18525, 0.18523, 0.18526, 0.25782, 0.22107, 0.2857, 0.24547, 0.26285, 0.26265, 0.26256, 0.27505, 0.27541, 0.4221, 0.42163, 0.42135, 0.421, 0.41173, 0.42551, 0.4111, 0.42478, 0.66854, 0.60699, 0.50547, 0.40922, 0.35801, 0.35751, 0.20154, 0.20157, 0.20149, 0.20154, 0.20698, 0.2432, 0.30314, 0.24736, 0.24182, 0.24883, 0.28933, 0.36854, 0.57983, 0.44498, 0.39739, 0.27384, 0.27401, 0.274, 0.27398, 0.23906, 0.12989, 0.14214, 0.18856, 0.18866, 0.18857, 0.18858, 0.13449, 0.19869, 0.19892, 0.36937, 0.36929, 0.36911, 0.36922, 0.4272, 0.69686, 0.69734, 0.78643, 0.78632, 0.78725], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz naturel": {
men: [0.50433, 0.4769, 0.48413, 0.48225, 0.48218, 0.44678, 0.47244, 0.43119, 0.39749, 0.41749, 0.39714, 0.40655, 0.39712, 0.30382, 0.21228, 0.25732, 0.20928, 0.20871, 0.26978, 0.47631, 0.48216, 0.51277, 0.50109, 0.50075, 0.51446, 0.51458, 0.50201, 0.5218, 0.55852, 0.55003, 0.53539, 0.53657, 0.51201, 0.47855, 0.41733, 0.31918, 0.33536, 0.376, 0.38344, 0.39556, 0.40635, 0.38947, 0.34208, 0.30181, 0.37536, 0.34802, 0.391, 0.40827, 0.46462, 0.33665, 0.31453, 0.30962, 0.30981, 0.25367, 0.23553, 0.22108, 0.2204, 0.21003, 0.21854, 0.22455, 0.20237, 0.15476, 0.14202, 0.17286, 0.17728, 0.14073, 0.14332, 0.19176, 0.20165, 0.18651, 0.19099, 0.19914, 0.23644, 0.24093, 0.22887, 0.2364, 0.23773, 0.23213, 0.2327, 0.22702, 0.22689, 0.19384, 0.18539, 0.2157, 0.21695, 0.20838, 0.13148, 0.11902, 0.12636, 0.1284, 0.13604, 0.14476, 0.16043, 0.17569, 0.17578, 0.17856, 0.18917, 0.16716, 0.20211, 0.21499, 0.19845, 0.21554, 0.20336, 0.19385, 0.26805, 0.25114, 0.23453, 0.34148, 0.34143, 0.32503], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby pétrolier": {
men: [0.42422, 0.40881, 0.50679, 0.50671, 0.50665, 0.5073, 0.65863, 0.65848, 0.62442, 0.62467, 0.62456, 0.62449, 0.62514, 0.62519, 0.40447, 0.30155, 0, 0, 0, 0, 0, 0, 0, 0.22442, 0.22428, 0.22434, 0.22422, 0.22422, 0.38137, 0.93912, 0.93873, 0.94081, 0.94132, 0.94213, 0.9472, 0.95088, 0.95494, 0.95181, 0.95237, 0.95241, 0.95305, 0.95628, 0.9559, 0.9548, 0.9552, 0.95533, 0.95519, 0.95534, 0.95317, 0.95015, 0.94094, 0.9411, 0.94169, 0.28708, 0.28698, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041305, 0.041288, 0.085908, 0.11505, 0.11505, 0.11503, 0.11488, 0.93402, 0.93415, 0.93379, 0.93403, 0.93423, 0.93431, 0.10072, 0.16638, 0.16619, 0.12195, 0.12196, 0.12197, 0.12196, 0.12192, 0.12179, 0.1217, 0.12177, 0.12177, 0.12176, 0.12175, 0.93339, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48272, 0.32831, 0.32841, 0.32824, 0.51726, 0.51762, 0.51835, 0.51828, 0.51889], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0.09914, 0.12778, 0.050034, 0.041873, 0.041867, 0.081661, 0.081664, 0.081646, 0.081689, 0.081722, 0.081707, 0.081698, 0.081782, 0.085897, 0.07724, 0.060039, 0.20687, 0.95069, 0.95056, 0.94086, 0.94064, 0.94132, 0.94146, 0.94081, 0.94025, 0.94048, 0.93999, 0.94001, 0.93952, 0.21281, 0.21272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41979, 0.42011, 0.41994, 0.95177, 0.95217, 0.9523, 0.95216, 0.95231, 0.95214, 0.9516, 0.95181, 0.95198, 0.95257, 0.95184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052175, 0.052174, 0.094514, 0.19595, 0.19593, 0.19592, 0.1959, 0.19562, 0.72774, 0.72784, 0.72756, 0.72775, 0.94105, 0.94113, 0.93912, 0.93846, 0.93454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barils par jour": {
men: [0.18981, 0.1813, 0.16694, 0.17336, 0.21545, 0.21701, 0.097243, 0.023872, 0.029563, 0.035279, 0.036434, 0.040982, 0.04286, 0.046734, 0.039151, 0.026293, 0, 0, 0, 0, 0, 0.15187, 0.15189, 0.15317, 0.17614, 0.17618, 0.18583, 0.19295, 0.21791, 0.4093, 0.40913, 0.41004, 0.50624, 0.61741, 0.61724, 0.21937, 0.21923, 0.297, 0, 0, 0, 0.59968, 0.37351, 0.43064, 0.361, 0.29822, 0.29818, 0.35397, 0.32771, 0.32752, 0.29508, 0.21063, 0.18286, 0.18272, 0.18266, 0.072029, 0.084427, 0.044879, 0.24, 0.25537, 0.25516, 0.23552, 0.23591, 0.27086, 0.36358, 0.43594, 0.48743, 0.48737, 0.46754, 0.49835, 0.41959, 0.40993, 0.33568, 0.33555, 0.33564, 0.3546, 0.39162, 0.29321, 0.16634, 0.16084, 0.16083, 0.16085, 0.13567, 0.17187, 0.42215, 0.45171, 0.48924, 0.48953, 0.48952, 0.47819, 0.45537, 0.56179, 0.54577, 0.69109, 0.64199, 0.6417, 0.66909, 0.68523, 0.60645, 0.62551, 0.57669, 0.57658, 0.57629, 0.62846, 0.59344, 0.5935, 0.60956, 0.30229, 0.33703, 0.33743], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production de pétrole": {
men: [0.29695, 0.29034, 0.31253, 0.3084, 0.30836, 0.30876, 0.19103, 0.099668, 0.097987, 0.095034, 0.14532, 0.1453, 0.15556, 0.26037, 0.13313, 0.13018, 0.074582, 0.074379, 0.074369, 0.072702, 0.072685, 0.18514, 0.19172, 0.22693, 0.25783, 0.25789, 0.33585, 0.33586, 0.64287, 0.85627, 0.35653, 0.35732, 0.35752, 0.36604, 0.36593, 0.2353, 0.42818, 0.48621, 0.4865, 0.46008, 0.46039, 0.38069, 0.37435, 0.31202, 0.39103, 0.39108, 0.38455, 0.31518, 0.3073, 0.29219, 0.15244, 0.049474, 0.053487, 0.054178, 0.049906, 0.061682, 0.063403, 0.03152, 0.028803, 0.028784, 0.029485, 0.044326, 0.043532, 0.057976, 0.21662, 0.12909, 0.14398, 0.15832, 0.25419, 0.21278, 0.21248, 0.25643, 0.29201, 0.2919, 0.29197, 0.29204, 0.31062, 0.36091, 0.28807, 0.40642, 0.39361, 0.39366, 0.3412, 0.48582, 0.4375, 0.39307, 0.43825, 0.43851, 0.4385, 0.43847, 0.5082, 0.34308, 0.47454, 0.47745, 0.42226, 0.42207, 0.42209, 0.3709, 0.42337, 0.42385, 0.39876, 0.44081, 0.44059, 0.51277, 0.48008, 0.51487, 0.42322, 0.33111, 0.37862, 0.37907], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur pétrolier": {
men: [0.14695, 0.13203, 0.072544, 0.075972, 0.077849, 0.083782, 0.084795, 0.12108, 0.14863, 0.12643, 0.1264, 0.12639, 0.081745, 0.10356, 0.10874, 0.084048, 0.11338, 0.11307, 0.11305, 0.11297, 0.11294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11102, 0.13188, 0.33904, 0.33906, 0.33929, 0.41439, 0.72765, 0.61977, 0.62004, 0.62012, 0.62003, 0.30535, 0.28053, 0.33692, 0.30568, 0.30573, 0.21741, 0.21725, 0.21717, 0.21707, 0.13713, 0.11396, 0.10742, 0.10735, 0.10726, 0.15504, 0.14329, 0.32683, 0.30992, 0.2641, 0.35126, 0.35121, 0.31601, 0.30331, 0.32241, 0.34121, 0.3024, 0.30228, 0.30236, 0.26817, 0.28928, 0.16681, 0.28284, 0.35886, 0.20572, 0.19626, 0.20477, 0.23762, 0.2736, 0.28046, 0.41401, 0.41426, 0.40585, 0.42869, 0.42335, 0.36894, 0.35176, 0.38373, 0.54293, 0.57626, 0.5763, 0.54453, 0.50444, 0.54387, 0.37692, 0.37685, 0.39717, 0.39729, 0.35898, 0.50234, 0.47648, 0.20011, 0.20008, 0.20032], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère industrielle": {
men: [0, 0, 0, 0.17322, 0.93091, 0.9321, 0.93214, 0.93193, 0.93242, 0.9328, 0.93262, 0.93253, 0.94885, 0.94893, 0.64919, 0.64902, 0.67721, 0.67061, 0.67051, 0.55566, 0.55553, 0.55593, 0.55601, 0.53211, 0.50569, 0.50581, 0.28406, 0.28407, 0.33314, 0.33327, 0.685, 0.4784, 0.47866, 0.55666, 0.5565, 0.55669, 0.55634, 0.58042, 0.61351, 0.61353, 0.61395, 0.47041, 0.3902, 0.38975, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10868, 0.19588, 0.15217, 0.2136, 0.21348, 0.28788, 0.28777, 0.28755, 0.28751, 0.078119, 0.078109, 0.078, 0.087882, 0.087894, 0.060103, 0.030667, 0.033766, 0.033769, 0.033783, 0, 0, 0, 0, 0, 0, 0, 0.11624, 0.11615, 0.11622, 0.11622, 0.18605, 0.18604, 0.18604, 0.18608, 0.25289, 0.30104, 0.30091, 0.44534, 0.44549, 0.44588, 0.33257, 0.33312, 0.33306, 0.33289, 0.11509, 0.098982, 0.084068, 0.073912, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"océanographes": {
men: [0, 0, 0, 0, 0, 0, 0.079833, 0.074584, 0.068338, 0.068366, 0.068353, 0.068346, 0.063014, 0.08996, 0.12401, 0.30219, 0.23789, 0.23724, 0.23721, 0.23703, 0.33329, 0.22444, 0.22689, 0.39149, 0.47574, 0.47585, 0.42365, 0.42619, 0.43298, 0.42886, 0.43566, 0.43663, 0.43687, 0.43724, 0.42836, 0.4938, 0.4998, 0.51317, 0.13204, 0.12518, 0.46899, 0.57374, 0.56831, 0.56766, 0.5679, 0.56797, 0.56789, 0.46435, 0.46426, 0.464, 0.34002, 0.34008, 0.34029, 0.39042, 0.2274, 0.20308, 0, 0, 0, 0, 0, 0, 0.32639, 0.32621, 0.39051, 0.39035, 0.39006, 0.39001, 0.58602, 0.73011, 0.7291, 0.72907, 0.72917, 0.72888, 0.72907, 0.72923, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22947, 0.36277, 0.93999, 0.94156, 0.94137, 0.9409, 0.94118, 0.41155, 0.4116, 0.41188, 0.41246, 0.4124, 0.41289], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz de schiste": {
men: [0.953, 0.95303, 0.95286, 0.95272, 0.58872, 0.17075, 0.17076, 0.17072, 0.17081, 0.17088, 0.17085, 0.17083, 0.1311, 0.0040871, 0.0041033, 0.0041022, 0.0041054, 0.0040942, 0, 0, 0.12169, 0.12178, 0.12179, 0.12171, 0.12164, 0.12167, 0.94243, 0.25472, 0.13018, 0.13023, 0.13018, 0.13047, 0.13054, 0.13065, 0.06844, 0.068464, 0.06842, 0.13679, 0.13687, 0.13688, 0.13697, 0.16193, 0.21229, 0.21204, 0.37514, 0.34519, 0.34514, 0.39363, 0.55636, 0.55605, 0.31453, 0.373, 0.37323, 0.37295, 0.40662, 0.38125, 0.38174, 0.36564, 0.39331, 0.41549, 0.41514, 0.38126, 0.3932, 0.39298, 0.62337, 0.6234, 0.62294, 0.62286, 0.60766, 0.61654, 0.61568, 0.67778, 0.58289, 0.58267, 0.58282, 0.6345, 0.60986, 0.61013, 0.55318, 0.25354, 0.25353, 0.25356, 0.22295, 0.23418, 0.23411, 0.23385, 0.16645, 0.16655, 0.16655, 0.090691, 0.10433, 0.10433, 0.11439, 0.10527, 0.10532, 0.10527, 0.064914, 0, 0.069214, 0.29111, 0.24901, 0.24896, 0.17753, 0.17759, 0.17749, 0.13126, 0.13135, 0.21021, 0.21018, 0.21043], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équivalent pétrole": {
men: [0.050382, 0.16224, 0.20198, 0.20195, 0.20192, 0.21896, 0.36638, 0.36629, 0.36649, 0.36663, 0.36657, 0.36653, 0.36691, 0.36694, 0.36839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44156, 0.44154, 0.88797, 0.88762, 0.88785, 0.88804, 0.88812, 0.88851, 0.88788, 0.94486, 0.94481, 0.94492, 0.94495, 0.94488, 0.94877, 0.94774, 0.94702, 0.94759, 0.94756, 0.95536, 0.95531, 0.95528, 0.71718, 0.71751, 0.71788, 0.71756, 0.7176, 0.71784, 0.63485, 0.63557, 0.63662, 0.6365, 0.63618, 0.2911, 0.29095, 0.29098, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champ pétrolifère": {
men: [0.11487, 0.15555, 0.19415, 0.20713, 0.30693, 0.55585, 0.44894, 0.44883, 0.44907, 0.44925, 0.23848, 0.23846, 0.28276, 0.28279, 0.2839, 0.10064, 0.16534, 0.16489, 0, 0, 0, 0.51983, 0.45141, 0.4511, 0.61844, 0.61859, 0.61826, 0.61827, 0.61795, 0.6182, 0.61794, 0.61931, 0.67947, 0.68005, 0.83851, 0.74746, 0.94517, 0.94472, 0, 0, 0.93997, 0.94068, 0.94031, 0.93922, 0.44455, 0.44461, 0.44455, 0.44462, 0.44454, 0.44429, 0.44438, 0.44446, 0.44474, 0.4444, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.82352, 0.82309, 0.82318, 0.82374, 0.9543, 0.95417, 0.9553], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux territoriales": {
men: [0, 0, 0, 0, 0, 0, 0.38585, 0.75637, 0.75677, 0.025592, 0.025587, 0.025584, 0.02561, 0.025613, 0.025714, 0.024098, 0.024117, 0.024051, 0.024048, 0.02403, 0, 0.038747, 0.16508, 0.79066, 0.81006, 0.78427, 0.78385, 0.78387, 0.7232, 0.82872, 0.82838, 0.83022, 0.83067, 0.83138, 0.65868, 0.63256, 0.47176, 0.30322, 0.16859, 0.1798, 0.17992, 0.18006, 0, 0.59947, 0.59973, 0.59981, 0.59972, 0.59981, 0.57572, 0.33705, 0.33897, 0.33903, 0.33924, 0.33898, 0.33886, 0.33871, 0.33915, 0.18044, 0.18024, 0.18012, 0.094493, 0.094399, 0.10355, 0.1191, 0, 0, 0, 0, 0, 0.096971, 0.096836, 0.081562, 0.081574, 0.081542, 0.18868, 0.18872, 0.18873, 0.32089, 0.47061, 0.47006, 0.47003, 0.47009, 0.4701, 0.28346, 0.28338, 0.7305, 0.72994, 0.73038, 0.73036, 0.73031, 0.73027, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise climatique": {
men: [0.71992, 0.71994, 0.71982, 0.71971, 0.71961, 0.76028, 0.69376, 0.63639, 0.39791, 0.39807, 0.398, 0.39796, 0.39837, 0.3984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15168, 0.22719, 0.23036, 0.23045, 0.22632, 0.22682, 0.22694, 0.30656, 0.38037, 0.25671, 0.2382, 0.31044, 0.31062, 0.31064, 0.15005, 0, 0, 0.15827, 0.14811, 0.1939, 0.34505, 0.34511, 0.29473, 0.26649, 0.24106, 0.24688, 0.24703, 0.24684, 0.23636, 0.23626, 0.22749, 0.17206, 0.15329, 0.11265, 0, 0, 0, 0, 0.056191, 0.060158, 0.060113, 0.14298, 0.19957, 0.19954, 0.26083, 0.26082, 0.35614, 0.48962, 0.52375, 0.66234, 0.6624, 0.66269, 0.71243, 0.72584, 0.7258, 0.66617, 0.61318, 0.49733, 0.40837, 0.40793, 0.40761, 0.35814, 0.28436, 0.28434, 0.27222, 0.27221, 0.13476, 0.070189, 0.055933, 0.043953, 0.04108, 0.042483, 0.04252, 0.039134, 0.039199, 0.044758, 0.036879, 0.03689, 0, 0, 0, 0.24833, 0.22542, 0.26105], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transport maritime": {
men: [0.23323, 0.27501, 0.28396, 0.30243, 0.30239, 0.33391, 0.33392, 0.34397, 0.25237, 0.16323, 0.1632, 0.16318, 0.17486, 0.18509, 0.081493, 0.043911, 0.043946, 0.043826, 0.04382, 0.021877, 0.021872, 0.022387, 0, 0, 0, 0, 0.30306, 0.14936, 0.12447, 0.12452, 0.12447, 0.12474, 0.12481, 0.12492, 0.12488, 0.12493, 0.12485, 0.14948, 0.14957, 0.14958, 0.16345, 0.28291, 0.95475, 0.95365, 0.95406, 0.95418, 0.95405, 0.9542, 0.95403, 0.95349, 0.95858, 0.958, 0.9586, 0.69201, 0.38876, 0.38859, 0.3891, 0.28727, 0.28696, 0.50049, 0.50007, 0.41075, 0.41095, 0.41072, 0.28793, 0.25901, 0.21262, 0.236, 0.26991, 0.26988, 0.2695, 0.32155, 0.21859, 0, 0, 0, 0, 0.25772, 0.28241, 0.28208, 0.33745, 0.3375, 0.33751, 0.33748, 0.33738, 0.195, 0.24295, 0.2431, 0.24309, 0.31135, 0.29172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations pétrolières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94575, 0.96006, 0.95957, 0.95994, 0.95955, 0.96167, 0.9622, 0.62953, 0.35599, 0.35611, 0.30049, 0.30034, 0.30052, 0.30053, 0.19504, 0, 0.056298, 0.056234, 0.056257, 0.056265, 0.056257, 0.05336, 0.081266, 0.073103, 0.080053, 0.080066, 0.080116, 0.080055, 0.12744, 0.12738, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60307, 0.60262, 0.60254, 0.60252, 0.60245, 0.60161, 0.60158, 0.60167, 0.60143, 0.60159, 0.60172, 0.9528, 0.95322, 0.47833, 0.24515, 0.24513, 0.24516, 0.24517, 0.24515, 0.32153, 0.32118, 0.32093, 0.32113, 0.32112, 0.32109, 0.20395, 0.20394, 0.14765, 0.14772, 0.1478, 0.14773, 0.14774, 0.14779, 0, 0, 0, 0, 0, 0.62663, 0.51636, 0.51642, 0.51677, 0.5175, 0.51743, 0.51804], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"woods hole oceanographic institution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77939, 0.83924, 0.85665, 0.60478, 0.60479, 0.66449, 0.66475, 0.69318, 0.69472, 0.69509, 0.69569, 0.69549, 0.69573, 0.69529, 0.65107, 0.57176, 0.52063, 0.8521, 0.76625, 0.56945, 0.56879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94629, 0.94576, 0.94575, 0.94537, 0.94467, 0.94455, 0.94452, 0.94439, 0.94308, 0.94305, 0.94318, 0.94281, 0.94305, 0.94325, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières fissiles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.090186, 0.090543, 0.097832, 0.067022, 0.06684, 0.06683, 0.058104, 0.058091, 0.058133, 0.086277, 0.11314, 0.11308, 0.1131, 0.11305, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94001, 0.93948, 0.93946, 0.93909, 0.93839, 0.93827, 0.93824, 0.93812, 0.93682, 0.93678, 0.93691, 0.93655, 0.93679, 0.93698, 0, 0, 0, 0.93018, 0.93013, 0.93024, 0.93027, 0.9302, 0.92991, 0.9289, 0.9282, 0.92875, 0.92873, 0.92866, 0.92861, 0.92859, 0.92878, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"raffinage": {
men: [0.15823, 0.15763, 0.1585, 0.14087, 0.20697, 0.20993, 0.20722, 0.21127, 0.22765, 0.22774, 0.2277, 0.23832, 0.17396, 0.13122, 0.11867, 0.12277, 0.092279, 0.11478, 0.06025, 0.0741, 0.078666, 0.10438, 0.10364, 0.10357, 0.10351, 0.10353, 0.095059, 0.10929, 0.13437, 0.058887, 0.073554, 0.079683, 0.070938, 0.072677, 0.072656, 0, 0, 0, 0, 0, 0, 0, 0, 0.14389, 0.15751, 0.15753, 0.17092, 0.13249, 0.18806, 0.31066, 0.32986, 0.38007, 0.36414, 0.36387, 0.36374, 0.34449, 0.34494, 0.27124, 0.26739, 0.2148, 0.21462, 0.28167, 0.18353, 0.24667, 0.28393, 0.41014, 0.44971, 0.48827, 0.53883, 0.45645, 0.44721, 0.43115, 0.4169, 0.46294, 0.46894, 0.48141, 0.44054, 0.41026, 0.43767, 0.32608, 0.31506, 0.30589, 0.28368, 0.31308, 0.32848, 0.32016, 0.33959, 0.30134, 0.29224, 0.27229, 0.31734, 0.36041, 0.3568, 0.54751, 0.45947, 0.40851, 0.4009, 0.38135, 0.3765, 0.38762, 0.38929, 0.37927, 0.38105, 0.38352, 0.37545, 0.35839, 0.33066, 0.069768, 0.10964, 0.16925], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits pétroliers": {
men: [0.45206, 0.34817, 0.34519, 0.34514, 0.36878, 0.38412, 0.40068, 0.40059, 0.36393, 0.41386, 0.41378, 0.41374, 0.071041, 0.071047, 0.055357, 0.065053, 0, 0, 0, 0, 0, 0.045971, 0.049369, 0.046425, 0.046397, 0.046409, 0.062079, 0.050654, 0.042758, 0.042775, 0.046596, 0.042795, 0.050026, 0.050069, 0.034874, 0, 0, 0, 0, 0, 0, 0.087936, 0.25438, 0.13064, 0.12897, 0.13264, 0.13263, 0.13265, 0.10775, 0.10769, 0.11535, 0.12001, 0.1146, 0.11451, 0.11447, 0.076661, 0.017109, 0, 0, 0, 0, 0, 0.27955, 0.19485, 0.3342, 0.28131, 0.39756, 0.44961, 0.578, 0.50488, 0.50418, 0.44167, 0.41168, 0.47386, 0.48598, 0.49448, 0.50022, 0.48684, 0.4644, 0.33747, 0.35674, 0.35973, 0.29115, 0.30293, 0.30262, 0.34225, 0.38285, 0.35711, 0.35614, 0.35232, 0.33617, 0.35964, 0.3794, 0.55007, 0.48305, 0.46241, 0.57862, 0.56913, 0.60384, 0.54536, 0.44039, 0.41826, 0.39417, 0.3683, 0.42394, 0.28894, 0.22532, 0.14967, 0.18179, 0.14983], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt boréale": {
men: [0.067118, 0.06712, 0.093656, 0, 0.039816, 0.039867, 0.039869, 0.03986, 0.039881, 0.039897, 0.03989, 0.039885, 0.039927, 0.92201, 0.92566, 0.089445, 0.089515, 0.21277, 0.14724, 0.14713, 0.14709, 0.1159, 0.11591, 0.11583, 0.11577, 0.11579, 0.11573, 0.11574, 0.11568, 0.34289, 0.34275, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95078, 0.95024, 0.95045, 0.95061, 0.95121, 0.95048, 0.95015, 0.94972, 0.95096, 0.96644, 0.96537, 0.96472, 0.96391, 0.96295, 0.96115, 0.96061, 0.9606, 0.96022, 0.9595, 0.95938, 0.95935, 0.95923, 0.95789, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise énergétique": {
men: [0.17017, 0.33345, 0.3334, 0.23024, 0.23021, 0.23051, 0.23052, 0.23047, 0.23059, 0.23068, 0.23064, 0.23061, 0.23085, 0.23087, 0.93766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37895, 0.37875, 0.3789, 0.37874, 0.31476, 0.41968, 0.42004, 0.41992, 0.42006, 0.20174, 0.20164, 0.20176, 0.20177, 0.18582, 0, 0, 0.17381, 0.15823, 0.16514, 0.27178, 0.24223, 0.24218, 0.23294, 0.3264, 0.26201, 0.26217, 0.26198, 0.28282, 0.28269, 0.28306, 0.16498, 0.18185, 0.19814, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5015, 0.5008, 0.54893, 0.54901, 0.5488, 0.54894, 0.75754, 0.95131, 0.95173, 0.95385, 0.95274, 0.95268, 0.9528, 0.95425, 0.94709, 0.27336, 0.22093, 0.22076, 0.22089, 0.22089, 0.22087, 0.22086, 0.22085, 0.076822, 0.076857, 0.076897, 0.076862, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie pétrolière": {
men: [0.11638, 0.1178, 0.10776, 0.083121, 0.080872, 0.041572, 0.038071, 0.077123, 0.098536, 0.096389, 0.096372, 0.096361, 0.08247, 0.14274, 0.15064, 0.14446, 0.14858, 0.13829, 0.10949, 0.10074, 0.12367, 0.038707, 0, 0, 0, 0, 0.041061, 0.17316, 0.18654, 0.20206, 0.20198, 0.21543, 0.22778, 0.22823, 0.23555, 0.25758, 0.24662, 0.37818, 0.41628, 0.41936, 0.47783, 0.41523, 0.35978, 0.28292, 0.26386, 0.26389, 0.26329, 0.28536, 0.31088, 0.25729, 0.26413, 0.11111, 0.064347, 0.064298, 0.047116, 0.045761, 0.10185, 0.11492, 0.10814, 0.10487, 0.1064, 0.10629, 0.062635, 0.083846, 0.14855, 0.14073, 0.41054, 0.5211, 0.53623, 0.54905, 0.51328, 0.52003, 0.51464, 0.54233, 0.54247, 0.55171, 0.5146, 0.45612, 0.50908, 0.50996, 0.34858, 0.28776, 0.28499, 0.26688, 0.26158, 0.27225, 0.27003, 0.2453, 0.26483, 0.29274, 0.29156, 0.30989, 0.24173, 0.29696, 0.30706, 0.2968, 0.31266, 0.33061, 0.33155, 0.33454, 0.3257, 0.32891, 0.31859, 0.2648, 0.27768, 0.27462, 0.27861, 0.089653, 0.13353, 0.17606], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploration offshore": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9472, 0.94775, 0.94779, 0.94843, 0.95964, 0.95925, 0.95815, 0.95855, 0.95868, 0.95854, 0.95869, 0.95852, 0.95798, 0.96947, 0.96858, 0.96918, 0.96844, 0.96811, 0.96513, 0.96639, 0.96694, 0.96586, 0.96521, 0.96441, 0.96345, 0.96392, 0.96338, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gisement pétrolier": {
men: [0.03889, 0.038891, 0.038885, 0, 0, 0, 0, 0.35205, 0.35223, 0.33792, 0.24974, 0.24971, 0.3593, 0.35933, 0.36075, 0.36065, 0.36093, 0.35995, 0.58121, 0.58078, 0.61883, 0.52858, 0.52865, 0.54875, 0.8223, 0.8225, 0.82207, 0.82209, 0.82166, 0.82199, 0.82165, 0.82347, 0.3921, 0.39244, 0.9462, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014364, 0.014353, 0.014351, 0.014351, 0.014349, 0.014329, 0.014329, 0.014331, 0.01317, 0.013173, 0.011755, 0.011756, 0.011761, 0.01946, 0, 0, 0, 0, 0.13204, 0.132, 0.13186, 0.13176, 0.17546, 0.17546, 0.18145, 0.57318, 0.57317, 0.57328, 0.57354, 0.57384, 0.57358, 0.57362, 0.64832, 0.64888, 0.64962, 0.6507, 0.65057, 0.65024, 0.95398, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"méthane": {
men: [0.08437, 0.060554, 0.11639, 0.10581, 0.10253, 0.087037, 0.089906, 0.089287, 0.10278, 0.10348, 0.19177, 0.21367, 0.21732, 0.25371, 0.2672, 0.3112, 0.23325, 0.25817, 0.25522, 0.18696, 0.19097, 0.16982, 0.15355, 0.17423, 0.13705, 0.13709, 0.16329, 0.14751, 0.15181, 0.10377, 0.10373, 0.12625, 0.12306, 0.20299, 0.22539, 0.28774, 0.32407, 0.33799, 0.33819, 0.33821, 0.3199, 0.3914, 0.39012, 0.38039, 0.40984, 0.37127, 0.48524, 0.47035, 0.39661, 0.40242, 0.35036, 0.14182, 0.11917, 0.11908, 0.36113, 0.36097, 0.47202, 0.57336, 0.45015, 0.44984, 0.44947, 0.51086, 0.51112, 0.49027, 0.46411, 0.47676, 0.51706, 0.51699, 0.33734, 0.26897, 0.2185, 0.090713, 0.23781, 0.18688, 0.20818, 0.18625, 0.14112, 0.15728, 0.15465, 0.15007, 0.15006, 0.15008, 0.17238, 0.18435, 0.17189, 0.19857, 0.12778, 0.14093, 0.11244, 0.067462, 0.10593, 0.069452, 0.07226, 0.12604, 0.11943, 0.11121, 0.094599, 0.09463, 0.14136, 0.16366, 0.14946, 0.16443, 0.17771, 0.17993, 0.16887, 0.1864, 0.1945, 0.17965, 0.18792, 0.20099], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"oléoduc": {
men: [0.17355, 0.15722, 0.15366, 0.15364, 0.15865, 0.14529, 0.14611, 0.15925, 0.15998, 0.16865, 0.16145, 0.16362, 0.066588, 0.071022, 0.13958, 0.17355, 0.21352, 0.21294, 0.1386, 0.1385, 0.25974, 0.25993, 0.24427, 0.28903, 0.25826, 0.26751, 0.30247, 0.38715, 0.34996, 0.40303, 0.40286, 0.40375, 0.60543, 0.58375, 0.48851, 0.42806, 0.49224, 0.42505, 0.64509, 0.64512, 0.54046, 0.34569, 0.30122, 0.30087, 0.301, 0.30104, 0.22727, 0.25306, 0.21856, 0.20997, 0.12115, 0.11567, 0.11574, 0.10879, 0.10875, 0.070637, 0.072026, 0.072067, 0.052891, 0.051148, 0.052846, 0.16869, 0.13734, 0.14583, 0.21169, 0.22292, 0.29341, 0.49056, 0.37334, 0.37329, 0.37277, 0.36104, 0.44567, 0.44301, 0.44312, 0.39402, 0.45206, 0.45226, 0.43109, 0.35497, 0.17661, 0.13245, 0.13317, 0.14351, 0.13885, 0.13977, 0.13776, 0.13626, 0.13092, 0.11965, 0.11964, 0.11964, 0.11575, 0.054763, 0.034082, 0.035374, 0.040596, 0, 0, 0.04504, 0.047231, 0.050438, 0.059447, 0.071369, 0.071331, 0.071339, 0.09274, 0.31837, 0.43704, 0.43756], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone portuaire": {
men: [0.75733, 0.75736, 0.76963, 0.76952, 0.76941, 0.7704, 0.77043, 0.77025, 0.77066, 0.77097, 0.77083, 0.77075, 0.93243, 0.93251, 0, 0, 0.95229, 0.9497, 0.94956, 0.94886, 0.94864, 0.94933, 0.94947, 0.94881, 0.94825, 0.94849, 0.94799, 0.94801, 0.94751, 0.94789, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036787, 0.043185, 0.047827, 0.047791, 0.04782, 0.047818, 0.047815, 0.047812, 0.050198, 0.050208, 0.050231, 0.050257, 0.053274, 0.2017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"composés organiques": {
men: [0.24882, 0.24883, 0.19802, 0.16525, 0.16523, 0.16544, 0.16545, 0.23099, 0.23111, 0.2312, 0.23116, 0.13198, 0.13212, 0.83777, 0.74814, 0.74794, 0.79462, 0.79246, 0.79235, 0.79177, 0.80859, 0.73137, 0.73147, 0.73097, 0.73054, 0.73072, 0.74794, 0.25336, 0.26797, 0.26807, 0.2884, 0.28904, 0.2892, 0.28945, 0.19145, 0.25641, 0.22647, 0.22636, 0.22649, 0.2265, 0.080903, 0.11356, 0.06698, 0.066903, 0.10905, 0.10906, 0.10905, 0.10907, 0.10905, 0.058951, 0.07352, 0.073533, 0.073579, 0.073522, 0.28332, 0.28319, 0.28356, 0.28372, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050799, 0.050793, 0.050722, 0.05072, 0.050727, 0.050708, 0.065757, 0.086832, 0.08684, 0.064247, 0.069332, 0.069252, 0.069247, 0.069256, 0, 0.21327, 0.2132, 0.16844, 0.16831, 0.16841, 0.14056, 0.14055, 0.13459, 0.1925, 0.2303, 0.23041, 0.23053, 0.23042, 0.23044, 0, 0, 0.30416, 0.18184, 0.1818, 0.23703, 0.23711, 0.19848, 0.1985, 0.22525, 0.22557, 0.22554, 0.22581], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 