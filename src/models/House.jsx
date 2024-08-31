import { memo } from "react";
import { useGLTF } from "@react-three/drei";
import forestScene from "../assets/3D/forest_house.glb";

const House = ({ ...props }) => {
  const { nodes, materials } = useGLTF(forestScene);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Windows001_Window_0.geometry}
        material={materials.Window}
        position={[-29.37439728, 190.51974487, -176.05490112]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Windows_Window_0.geometry}
        material={materials.Window}
        position={[-163.3993988, 264.28561401, -120.46076965]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Windows002_Window_0.geometry}
        material={materials.Window}
        position={[-32.36590576, 214.06829834, 45.68387604]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.SideRoofBase_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-94.24456787, 237.14541626, -218.0756073]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.RoofMoss_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-84.56111908, 400.34796143, -46.87354279]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Roof009_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-94.70793915, 404.74194336, -53.052948]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.RoofBase001_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-79.64601135, 389.72467041, -64.2797699]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.HouseFence_WoodPlanks_0.geometry}
        material={materials.WoodPlanks}
        position={[-242.29977417, 149.19664001, -75.04785919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Stairs_WoodPlanks_0.geometry}
        material={materials.WoodPlanks}
        position={[-287.10848999, 99.56698608, -139.08639526]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.HouseSupportBeams_WoodPlanks_0.geometry}
        material={materials.WoodPlanks}
        position={[-199.33517456, 114.96331787, -78.7526474]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.HouseWoodFloor_WoodPlanks_0.geometry}
        material={materials.WoodPlanks}
        position={[-144.55133057, 131.33308411, -86.311409]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Chimney_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-9.02058506, 511.89678955, 16.75220108]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Moss_WoodPlanks_0.geometry}
        material={materials.WoodPlanks}
        position={[-201.24533081, 158.93060303, -135.53463745]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.DoorRoof_RoofMoss_0.geometry}
        material={materials.RoofMoss}
        position={[-201.52563477, 278.94226074, -23.1042614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.House_House_0.geometry}
        material={materials.House}
        position={[-123.97986603, 269.21817017, -49.26436234]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.TallGrass_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-235.47647095, 129.6025238, -16.82303619]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines001_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-262.52603149, 118.89016724, -198.81506348]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines002_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-221.34500122, 257.51599121, -17.50670433]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines003_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-75.13280487, 260.81860352, 69.64633179]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines004_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[35.94245148, 470.14089966, -54.29335785]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines005_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[34.41051102, 290.92059326, -120.07565308]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Vines_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-74.45200348, 241.75799561, -224.93942261]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.SupportBeams_Window_0.geometry}
        material={materials.Window}
        position={[-77.06499481, 201.39326477, -235.65861511]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.FenceRight_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-353.6227417, 93.42756653, 93.86466217]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.FenceRight015_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-383.25796509, 94.91769409, -275.51818848]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.FenceLeft_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-389.18466187, 98.81045532, -264.9743042]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.FenceRight003_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-349.68261719, 89.40654755, 101.41391754]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.SmallRocks_BigRock_0.geometry}
        material={materials.BigRock}
        position={[4.02344704, 131.40785217, -227.80995178]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Rocks_BigRock_0.geometry}
        material={materials.BigRock}
        position={[19.77474022, 143.78738403, -172.87322998]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BTree001_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-206.55780029, 534.7387085, -287.13647461]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BTree_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-248.64671326, 380.85003662, 155.38673401]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.BTree002_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-289.37997437, 414.45623779, -310.23989868]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Redwood_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-78.67937469, 344.71478271, -68.30635071]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.RedwoodAlpha_TreeLeafs_0.geometry}
        material={materials.TreeLeafs}
        position={[-90.08565521, 598.71777344, -98.58604431]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.RedwoodChopped_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-189.72317505, 107.18492126, 84.87630463]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.RedwoodMoss_BrichTree_0.geometry}
        material={materials.BrichTree}
        position={[-325.99703979, 85.00357056, -64.98543549]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Stump001_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-381.08251953, 93.12072754, -193.85444641]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Stump002_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-563.25640869, 83.95752716, -253.34460449]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Stump003_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-565.75244141, 84.05016327, -61.295681]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Stump_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-575.72076416, 89.22019958, -23.81482506]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ground_Ground_0.geometry}
        material={materials.Ground}
        position={[-235.19006348, 93.31025696, -97.72872162]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.GrassOrange_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-124.50974274, 299.65881348, -165.86643982]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.GrassRoof_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-100.38671875, 330.23370361, -133.3979187]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.GrassGround_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-244.99137878, 103.41627502, -133.90820313]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.GrassRoof001_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-76.65290833, 524.2053833, -58.85779953]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane001_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-248.74090576, 102.9144516, -291.70373535]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane002_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-258.47000122, 103.09368134, -284.02618408]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane005_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-249.00863647, 83.64547729, 147.93690491]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane006_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-235.18540955, 81.35015106, 142.99813843]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane007_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-99.99072266, 337.48165894, -177.37075806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane008_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-588.00305176, 76.93345642, -128.01925659]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane009_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-484.16052246, 62.47919846, -121.99821472]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane010_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-477.78329468, 66.67345428, -109.07762909]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Racoon_Animals_0.geometry}
        material={materials.Animals}
        position={[-288.98428345, 129.2852478, -295.16513062]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Bird_Animals_0.geometry}
        material={materials.Animals}
        position={[-288.44146729, 253.04606628, -280.86257935]}
        rotation={[-1.57817508, -0.01615924, 0.10553193]}
        scale={[100.00000763, 100, 100]}
      />
      <mesh
        geometry={nodes.Bird001_Animals_0.geometry}
        material={materials.Animals}
        position={[-528.88592529, 813.77954102, -51.37948227]}
        rotation={[-1.52029953, -0.01787818, -0.20709613]}
        scale={[99.99999237, 100.00000763, 100]}
      />
      <mesh
        geometry={nodes.Bird002_Animals_0.geometry}
        material={materials.Animals}
        position={[-349.92739868, 975.39788818, -386.83776855]}
        rotation={[-1.55644053, -0.01631844, 0.51433781]}
        scale={[100, 100, 100.00000763]}
      />
      <mesh
        geometry={nodes.GroundPlane_Plane_0.geometry}
        material={materials.Plane}
        position={[-220.83137512, 59.32322693, -82.06577301]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Powerlines_WoodFence_0.geometry}
        material={materials.WoodFence}
        position={[-442.46530151, 851.4196167, -74.76498413]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Powerlines001_GrassALPHA_0.geometry}
        material={materials.GrassALPHA}
        position={[-443.43041992, 870.02514648, -75.07297516]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
};

export default memo(House);
