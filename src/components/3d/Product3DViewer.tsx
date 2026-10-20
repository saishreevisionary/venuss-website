import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Product3DViewerProps {
  ingredientName?: string;
  category?: string;
}

export const Product3DViewer: React.FC<Product3DViewerProps> = ({
  ingredientName = 'Cardamom Oil',
  category = 'Essential Oil',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xF2F7FA, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xE5A853, 3, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Botanical Specimen Mesh (Cardamom capsule/leaf in Logo Sapphire Blue)
    const podGeo = new THREE.CapsuleGeometry(0.8, 1.4, 16, 32);
    const podMat = new THREE.MeshStandardMaterial({
      color: 0x0084C9,
      roughness: 0.4,
      metalness: 0.2,
    });
    const pod = new THREE.Mesh(podGeo, podMat);
    pod.position.set(-2.2, 0, 0);
    pod.rotation.z = -0.3;
    group.add(pod);

    // 2. Translucent Glass Flask / Extraction Vessel Representation
    const flaskGeo = new THREE.CylinderGeometry(0.9, 1.2, 2.2, 32);
    const flaskMat = new THREE.MeshPhysicalMaterial({
      color: 0x2FA0E0,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 0.8,
    });
    const flask = new THREE.Mesh(flaskGeo, flaskMat);
    flask.position.set(0, 0, 0);
    group.add(flask);

    // Liquid inside flask
    const liquidGeo = new THREE.CylinderGeometry(0.85, 1.15, 1.4, 32);
    const liquidMat = new THREE.MeshStandardMaterial({
      color: 0xE5A853,
      roughness: 0.2,
      metalness: 0.1,
    });
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.set(0, -0.3, 0);
    group.add(liquid);

    // 3. Extracted Pure Oil Drop (Final Product)
    const dropGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const dropMat = new THREE.MeshPhysicalMaterial({
      color: 0xE5A853,
      roughness: 0.05,
      transmission: 0.85,
      clearcoat: 1.0,
    });
    const drop = new THREE.Mesh(dropGeo, dropMat);
    drop.position.set(2.2, 0, 0);
    group.add(drop);

    // Connecting Arrows / Stream Lines
    const streamGeo = new THREE.TorusGeometry(1.2, 0.03, 16, 100, Math.PI);
    const streamMat = new THREE.MeshBasicMaterial({ color: 0x0084C9, transparent: true, opacity: 0.6 });
    const stream = new THREE.Mesh(streamGeo, streamMat);
    stream.rotation.x = Math.PI / 2;
    stream.position.set(0, 0.8, 0);
    group.add(stream);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      group.rotation.y = elapsedTime * 0.4;
      pod.rotation.x = elapsedTime * 0.5;
      drop.position.y = Math.sin(elapsedTime * 2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] bg-white border border-[#0084C9]/20 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-sm">
      <div className="flex justify-between items-center z-10">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#E5A853] font-bold">{category}</span>
          <h4 className="font-serif-editorial text-lg text-[#0B2536] font-bold">{ingredientName} — Extraction View</h4>
        </div>
        <span className="px-2.5 py-1 text-[11px] rounded-full bg-[#0084C9]/15 text-[#0084C9] font-bold border border-[#0084C9]/25">
          3D Interactive Model
        </span>
      </div>

      <div ref={containerRef} className="w-full h-[220px]" />

      <div className="flex justify-between items-center text-xs text-[#456375] z-10 border-t border-[#0084C9]/15 pt-2 font-medium">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0084C9]" /> 1. Raw Botanical</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2FA0E0]" /> 2. Process Vessel</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E5A853]" /> 3. Concentrated Oil</span>
      </div>
    </div>
  );
};

export default Product3DViewer;
