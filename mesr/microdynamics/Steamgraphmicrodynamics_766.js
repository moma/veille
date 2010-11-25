var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"gaz nocifs": {
men: [0, 0.34712, 0.58797, 0.58784, 0.32117, 0.32101, 0.32111, 0.32092, 0.42374, 0.42381, 0.42429, 0.42406, 0.51412, 0.51415, 0.51476, 0.50972, 0.40717, 0.40727, 0.77336, 0.77316, 0.7723, 0.77283, 0.35751, 0.3574, 0.35718, 0.35695, 0.35624, 0.35599, 0.35524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16311, 0.16327, 0.16329, 0.16341, 0.16381, 0.94217, 0.94272, 0.9431, 0.94355, 0.22621, 0.22619, 0.48172, 0.48162, 0.48151, 0.39308, 0.39302, 0.39312, 0.39307, 0.39265, 0.3927, 0.39268, 0.39261, 0.39255, 0.94923, 0.94907, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94637, 0.94614, 0.94596, 0.94637, 0.94665, 0.94618], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équivalent pétrole": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94425, 0.9436, 0.94161, 0.94037, 0.93945, 0.93901, 0.93874, 0.93795, 0.93804, 0.9377, 0.93737, 0.93748, 0.93758, 0.93774, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44438, 0.44433, 0.89313, 0.89293, 0.89272, 0.89335, 0.89322, 0.89343, 0.89332, 0.95074, 0.95087, 0.95083, 0.95064, 0.9505, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2372, 0.23705, 0.23699, 0.9498, 0.95022, 0.9505, 0.95003], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"graves dangers": {
men: [0, 0, 0, 0, 0, 0.67608, 0.74081, 0.32803, 0.29398, 0.28092, 0.28124, 0.28488, 0.27929, 0.27311, 0.2675, 0.27818, 0.27852, 0.2786, 0.27864, 0, 0, 0, 0, 0.25981, 0.25965, 0.21163, 0.21803, 0.21862, 0.20245, 0.20218, 0.17499, 0.17001, 0.16996, 0.16206, 0.17459, 0.19595, 0.19588, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1415, 0.24834, 0.24842, 0.34555, 0.54275, 0.59186, 0.6548, 0.76259, 0.76298, 0.76292, 0.91337, 0.91368, 0.91364, 0.96374, 0.87546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0852, 0.26044, 0.34629, 0.34631, 0.34722, 0.34718, 0.44939, 0.44926, 0.44897, 0.70994, 0.7098, 0.71011, 0.71032, 0.70997], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079496, 0.079408, 0.079463, 0.079484, 0.12964, 0.94961, 0.949, 0.9471, 0.95029, 0.94829, 0.94704, 0.94611, 0.94567, 0.9454, 0.94078, 0.94087, 0.94053, 0.94019, 0.94031, 0.93391, 0.93407, 0.93453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045628, 0.080307, 0.26594, 0.26593, 0.26584, 0.26596, 0.2658, 0.26582, 0.26651, 0.15505, 0.15507, 0.26645, 0.26628, 0.18957, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies auto-immunes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.90668, 0.57273, 0.57247, 0.5723, 0.57182, 0.39158, 0.39555, 0.3954, 0.37921, 0.37925, 0.37931, 0.3795, 0.37962, 0.29453, 0.0070287, 0.0095912, 0.0095941, 0.0095988, 0.0071887, 0.010874, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96773, 0.90812, 0.90759, 0.90764, 0.91002, 0.90992, 0.91008, 0.9098, 0.90922, 0.87581, 0.80362, 0.75516, 0.75539, 0.70086], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"oxydes d' azote": {
men: [0, 0, 0.20499, 0.2105, 0.21046, 0.1662, 0.11519, 0.11513, 0.11513, 0.11515, 0.11528, 0.11521, 0.11532, 0.13339, 0.14561, 0.13893, 0.049698, 0.049113, 0.049121, 0.056344, 0.083151, 0.056621, 0.056635, 0.056617, 0.056582, 0.056546, 0.056433, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25019, 0.2502, 0.25024, 0.25029, 0.25024, 0.28844, 0.28841, 0.45013, 0.45029, 0.45027, 0.63386, 0.82675, 0.82685, 0.70618, 0.69779, 0.69799, 0.6984, 0.69868, 0.69902, 0.69828, 0.40143, 0.40129, 0.40119, 0.32573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075378, 0.066149, 0.051062, 0.055747, 0.055737, 0.055775, 0.066966, 0.066965, 0.058112, 0.058086, 0.058083, 0.064194, 0.087254, 0.087203, 0.16743, 0.19234, 0.2987, 0.29875, 0.29866, 0.29847, 0.26476, 0.26471, 0.39127, 0.39138, 0.39119], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033776, 0.033772, 0.033783, 0.033782, 0.036014, 0.066658, 0.066666, 0.085373, 0.94141, 0.94169, 0.94224, 0.94261, 0.94307, 0.94874, 0.9422, 0.94186, 0.94165, 0.94143, 0.9421, 0.94196, 0.94218, 0.94206, 0.94105, 0.94118, 0.94114, 0.94095, 0.94081, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sous-marins nucléaires": {
men: [0, 0, 0.10574, 0.10571, 0.10569, 0.10564, 0.051929, 0.051898, 0.051899, 0.073173, 0.051966, 0.045348, 0.042682, 0.042685, 0.037978, 0.038014, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063917, 0.063914, 0.074754, 0.079019, 0.25251, 0.94181, 0.94412, 0.9444, 0.94495, 0.94533, 0.94579, 0.94478, 0.94468, 0.32084, 0, 0, 0, 0, 0, 0, 0.31982, 0.31986, 0.31985, 0.31979, 0.31974, 0.31993, 0.31988, 0.43218, 0.95087, 0.95087, 0.9507, 0.95135, 0.95172, 0.9517, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion des déchets radioactifs": {
men: [0, 0, 0.54844, 0.48153, 0.48144, 0.4812, 0.48134, 0.48105, 0.48106, 0.24739, 0.24767, 0.24754, 0.24777, 0.24779, 0.24808, 0.27606, 0.15137, 0, 0, 0, 0, 0, 0, 0, 0.011309, 0.011302, 0.010114, 0.010107, 0.0092651, 0.0092528, 0.0092438, 0.008018, 0.0080157, 0.0088873, 0.01401, 0.014004, 0.013999, 0.014609, 0, 0, 0, 0, 0, 0, 0, 0.77083, 0.52231, 0.38831, 0.38777, 0.38783, 0.38795, 0.42839, 0.4284, 0.42847, 0.42856, 0.15013, 0.1502, 0.15019, 0.15017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063359, 0.052772, 0.05276, 0.052748, 0.049263, 0.040703, 0.040712, 0.040707, 0.041397, 0.074578, 0.074574, 0.074559, 0.08006, 0.096716, 0.078969, 0.11133, 0.11133, 0.11133, 0.13519, 0.69537, 0.69563, 0.23249, 0.27145, 0.2331, 0.22101, 0.22094, 0.16367, 0.13682, 0.18974, 0.18926, 0.1854, 0.18543, 0.16538, 0.12178, 0.12175, 0.14426, 0.11897, 0.11901, 0.12335], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biosynthétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95457, 0.95364, 0.9532, 0.95293, 0.95212, 0.95222, 0.9521, 0.95176, 0.95188, 0.95198, 0.95213, 0.95261, 0.95292, 0.95385, 0.91998, 0.92102, 0.9213, 0.038892, 0.038963, 0.038909, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effets sanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52056, 0.52074, 0.93983, 0.93919, 0.94015, 0.94026, 0.94091, 0.94322, 0.9435, 0.94405, 0.94443, 0.94489, 0.55453, 0.66501, 0.19098, 0.19094, 0.1909, 0.086827, 0.086814, 0.069576, 0.069567, 0.069493, 0.069503, 0.061729, 0.061717, 0.061707, 0.06649, 0, 0.43317, 0.4332, 0.43321, 0.16016, 0.11094, 0.10443, 0.092354, 0.0924, 0.092359, 0.094168, 0.094136, 0.094178, 0.094123, 0.094128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émanations toxiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93836, 0.93823, 0.93855, 0.93851, 0.93787, 0.93882, 0.93893, 0.93959, 0.94189, 0.94217, 0.94272, 0.9431, 0.94355, 0.94255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux usées": {
men: [0.27231, 0.25187, 0.27191, 0.26372, 0.25385, 0.27341, 0.23202, 0.12273, 0.11774, 0.13103, 0.084312, 0.085215, 0.063697, 0.006306, 0.056293, 0.059147, 0.053239, 0.054341, 0.055825, 0.075082, 0.085059, 0.23812, 0.22174, 0.22167, 0.16716, 0.20028, 0.24537, 0.2219, 0.14691, 0.14445, 0.14431, 0.14425, 0.16804, 0.15757, 0.10757, 0.077747, 0.083175, 0.083185, 0.085888, 0.071424, 0.041546, 0.044051, 0.049748, 0.058603, 0.055377, 0.049546, 0.029226, 0.014316, 0.01977, 0.020537, 0.019538, 0.050471, 0.057177, 0.064655, 0.19153, 0.16306, 0.17599, 0.12971, 0.13016, 0.14739, 0.15184, 0.15598, 0.19444, 0.18881, 0.21519, 0.19077, 0.19471, 0.19483, 0.09209, 0.096654, 0.05821, 0.087637, 0.15552, 0.15549, 0.15298, 0.14286, 0.28032, 0.34376, 0.28323, 0.26995, 0.28434, 0.28432, 0.35543, 0.39801, 0.47829, 0.39297, 0.34131, 0.34134, 0.32926, 0.24728, 0.080928, 0.080959, 0.088485, 0.082392, 0.082356, 0.082351, 0, 0, 0.015086, 0.014863, 0.014331, 0.013697, 0.013422, 0.016239, 0.049111, 0.047069, 0.046164, 0.048375, 0.048389, 0.06308], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"plutonium": {
men: [0, 0.10685, 0.25774, 0.3604, 0.42201, 0.4218, 0.42192, 0.4458, 0.26822, 0.16041, 0.15264, 0.15256, 0.16731, 0.1441, 0.13716, 0.14041, 0.080537, 0.032789, 0.031722, 0.031714, 0.031679, 0.032941, 0.036511, 0.057779, 0.027483, 0.027465, 0.02741, 0.029786, 0.030728, 0.0078467, 0.0086877, 0.0087515, 0.0090046, 0.008997, 0.0089979, 0.0089947, 0.009831, 0.0098322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21462, 0.21461, 0.21457, 0.21454, 0.21467, 0.21463, 0.21427, 0.21429, 0.21429, 0.21425, 0.35759, 0.35773, 0.5599, 0.56018, 0.95285, 0.95279, 0.95247, 0.95289, 0.57074, 0.45427, 0.40398, 0.40394, 0.35981, 0.25134, 0.18225, 0.13053, 0.077439, 0.077473, 0.073989, 0.073952], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie nucléaire": {
men: [0, 0, 0.06456, 0.077859, 0.079353, 0.073384, 0.075298, 0.12303, 0.1219, 0.11852, 0.11866, 0.11859, 0.1187, 0.12142, 0.14196, 0.16826, 0.2116, 0.19473, 0.17091, 0.22543, 0.22518, 0, 0, 0, 0.01457, 0.014266, 0.012165, 0.012156, 0.010541, 0.008934, 0.0092901, 0.010098, 0.01078, 0.010771, 0.010772, 0.0096538, 0.010178, 0.0109, 0, 0, 0, 0, 0, 0.099314, 0.077749, 0.13117, 0.11928, 0.11949, 0.1073, 0.12318, 0.1082, 0.103, 0.10301, 0.10302, 0.085582, 0.085565, 0.090192, 0.058651, 0.068669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055604, 0.053634, 0.066303, 0.064524, 0.059201, 0.094083, 0.11527, 0.09993, 0.081308, 0.14156, 0.14155, 0.14152, 0.15139, 0.23236, 0.12245, 0.13487, 0.13488, 0.14428, 0.18915, 0.32297, 0.29147, 0.46145, 0.8287, 0.79137, 0.79132, 0.79105, 0.55472, 0.55439, 0.50511, 0.26524, 0.24549, 0.23212, 0.20264, 0.16629, 0.14232, 0.12219, 0.095168, 0.095196, 0.095149], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pression psychologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.054242, 0.054222, 0.05421, 0.054197, 0.051217, 0.05121, 0.051222, 0.051215, 0.2205, 0.46466, 0.46464, 0.46455, 0.46448, 0.46476, 0.65023, 0.64914, 0.64919, 0.64919, 0.94539, 0.94604, 0.94641, 0.94639, 0.94686, 0.94644, 0.94639, 0.94606, 0.94649, 0.94594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"radioactivité": {
men: [0, 0.033832, 0.038849, 0.037636, 0.037629, 0.03761, 0.037621, 0.18924, 0.1682, 0.088274, 0.081964, 0.07707, 0.074383, 0.066699, 0.043907, 0.043197, 0.041736, 0.041324, 0.041004, 0.040993, 0.039628, 0.0078929, 0.0081068, 0.0086705, 0.011934, 0.012609, 0.01276, 0.014928, 0.028584, 0.0092893, 0.01068, 0.011393, 0.011827, 0.011817, 0.014103, 0.013841, 0.013836, 0.078834, 0, 0, 0, 0, 0, 0, 0, 0.55214, 0.55241, 0.55341, 0.55264, 0.58234, 0.58252, 0.30242, 0.25991, 0.2216, 0.18686, 0.12966, 0.10682, 0.10634, 0.16234, 0.072377, 0.072373, 0.069937, 0.070008, 0.070016, 0.066945, 0.072607, 0.076547, 0.082039, 0.090161, 0.087773, 0.1892, 0.24263, 0.21765, 0.2415, 0.24145, 0.23259, 0.26286, 0.23674, 0.25143, 0.25785, 0.29306, 0.28329, 0.28324, 0.34141, 0.27805, 0.22131, 0.16769, 0.16771, 0.15921, 0.18649, 0.20922, 0.27004, 0.22735, 0.27351, 0.20226, 0.19823, 0.19816, 0.15632, 0.13262, 0.18058, 0.091499, 0.089024, 0.1126, 0.10247, 0.089042, 0.087026, 0.079816, 0.07296, 0.073345, 0.073889], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transport maritime": {
men: [0.22086, 0.20813, 0.20592, 0.2193, 0.21926, 0.21436, 0.21443, 0.2208, 0.14665, 0.094826, 0.094934, 0.094881, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.043822, 0.18615, 0.62909, 0.6298, 0.63051, 0.63071, 0.63102, 0.63217, 0.63129, 0.63139, 0.76318, 0.82335, 0.82337, 0.59494, 0.33155, 0.33149, 0.33166, 0.24471, 0.24468, 0.1678, 0.16779, 0.24231, 0.24256, 0.24259, 0.11948, 0.12487, 0.10261, 0.11397, 0.11328, 0.11334, 0.11322, 0.13507, 0.091776, 0.11913, 0.1191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes biologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2424, 0.24262, 0.24264, 0.24293, 0.24316, 0.24346, 0.24352, 0.32589, 0.50943, 0.41862, 0.67723, 0.67741, 0.67719, 0.75602, 0.6927, 0.69131, 0.76227, 0.76066, 0.75965, 0.75891, 0.57943, 0.57926, 0.48291, 0.5962, 0.59598, 0.59577, 0.23663, 0.13443, 0.13445, 0.13452, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"capacités cognitives": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94626, 0.94568, 0.94507, 0.94318, 0.94253, 0.94055, 0.9393, 0.93838, 0.93795, 0.93768, 0.93689, 0.93698, 0.93664, 0.9363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enquête épidémiologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0.66478, 0.66479, 0.66489, 0.66565, 0.66528, 0.6659, 0.66594, 0.54833, 0.54883, 0.54952, 0.54966, 0.54975, 0.73147, 0.48418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61213, 0.36302, 0.36297, 0.36305, 0.3924, 0.39198, 0.39204, 0.39202, 0.39194, 0.39188, 0.34094, 0.2548, 0.25437, 0.25439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9391, 0.94016, 0.94046, 0.94091, 0.94263, 0.94132, 0.94147, 0.94177, 0.94031, 0.94033, 0.94049, 0.61592, 0.6158, 0.61612, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70968, 0.70933], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ours brun": {
men: [0.031244, 0.029741, 0.029714, 0.029708, 0.029702, 0.029687, 0.029696, 0.029678, 0.029679, 0.036761, 0.036803, 0.036782, 0, 0, 0, 0, 0.94691, 0.94716, 0.94731, 0.94706, 0.94601, 0.94667, 0.94691, 0.94661, 0.94603, 0.94542, 0.94352, 0.94288, 0.94089, 0.93965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.024133, 0.024117, 0.024069, 0.024053, 0.025417, 0.025383, 0.025358, 0.02914, 0.036935, 0.13198, 0.13199, 0.13194, 0.92325, 0.92337, 0, 0, 0, 0, 0, 0, 0, 0, 0.93394, 0.93564, 0.93435, 0.93449, 0.93479, 0.93334, 0.93337, 0.93353, 0.93371, 0.93353, 0.93401, 0.17433, 0.17431, 0.17437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dalian": {
men: [0.021098, 0.021075, 0.018141, 0.018137, 0.018134, 0.019024, 0.018808, 0.019974, 0.026666, 0.028989, 0.029572, 0.029555, 0.063523, 0.043271, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50922, 0.94866, 0.94844, 0.94823, 0.9489, 0.94875, 0.94898, 0.94886, 0.94784, 0.94798, 0.94793, 0.94774, 0.9476, 0.94817, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants lourds": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93856, 0.93868, 0.93878, 0.93894, 0.9394, 0.93971, 0.94063, 0.9417, 0.94276, 0.94306, 0.94352, 0.94524, 0.94392, 0.94407, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore": {
men: [0.21485, 0.29228, 0.29202, 0.29195, 0.2919, 0.30422, 0.25842, 0.25827, 0.19387, 0.1939, 0.19412, 0.23008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16634, 0.1665, 0.10758, 0.1077, 0.10773, 0.10956, 0.087964, 0.087841, 0.087855, 0.087884, 0.084909, 0.084911, 0.071235, 0.071249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.82728, 0.82747, 0.65205, 0.73187, 0.59797, 0.59795, 0.52658, 0.47253, 0.47281, 0.42878, 0.33039, 0.33042, 0.31678, 0.21929, 0, 0, 0, 0, 0, 0, 0, 0.055042, 0.070809, 0.07453, 0.078564, 0.078555, 0.080257, 0.10437, 0.21665, 0.12258, 0.12256, 0.12261, 0.1281, 0.12803], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"harcèlement sexuel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93845, 0.93881, 0.9388, 0.93926, 0.93885, 0.93879, 0.93847, 0.93889, 0.93835, 0.93839, 0.94085, 0.94075, 0.94091, 0.94063, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"recherche médicale": {
men: [0.37245, 0.37204, 0.37347, 0.37338, 0.37332, 0.37313, 0.37324, 0.38554, 0.41192, 0.40893, 0.18359, 0.6079, 0.76502, 0.35324, 0.35366, 0.24276, 0.11854, 0.10755, 0.1044, 0.10437, 0.10425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.070597, 0.41111, 0.34912, 0.43455, 0.5928, 0.59274, 0.59284, 0.55456, 0.55421, 0.35103, 0.3796, 0.37977, 0.43616, 0.43308], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 