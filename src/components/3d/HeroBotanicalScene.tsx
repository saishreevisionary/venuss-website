import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroBotanicalScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // WebGL support check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    // Clear existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lighting System
    const ambientLight = new THREE.AmbientLight(0xF2F7FA, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
    mainLight.position.set(8, 12, 10);
    scene.add(mainLight);

    const amberLight = new THREE.PointLight(0xE5A853, 4, 20);
    amberLight.position.set(-5, -3, 4);
    scene.add(amberLight);

    const blueLight = new THREE.PointLight(0x0084C9, 4, 20);
    blueLight.position.set(6, 4, -2);
    scene.add(blueLight);

    // Botanical Composition Group
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Golden Oil Droplet (Refractive Amber/Blue Sphere)
    const dropGeo = new THREE.SphereGeometry(1.6, 64, 64);
    // Deform drop to liquid droplet shape
    const dropPos = dropGeo.attributes.position;
    for (let i = 0; i < dropPos.count; i++) {
      let y = dropPos.getY(i);
      if (y > 0) {
        dropPos.setX(i, dropPos.getX(i) * (1 - y * 0.25));
        dropPos.setZ(i, dropPos.getZ(i) * (1 - y * 0.25));
      }
    }
    dropGeo.computeVertexNormals();

    const dropMat = new THREE.MeshPhysicalMaterial({
      color: 0xE5A853,
      emissive: 0x0084C9,
      emissiveIntensity: 0.15,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      thickness: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const oilDrop = new THREE.Mesh(dropGeo, dropMat);
    oilDrop.position.set(0, 0.2, 0);
    group.add(oilDrop);

    // 2. Cardamom Pod 1 (Organic Ribbed Capsule in Logo Sapphire Blue)
    const podGeo = new THREE.CapsuleGeometry(0.7, 1.6, 16, 32);
    const podMat = new THREE.MeshStandardMaterial({
      color: 0x0084C9,
      roughness: 0.4,
      metalness: 0.2,
      bumpScale: 0.05,
    });
    const pod1 = new THREE.Mesh(podGeo, podMat);
    pod1.position.set(-3.2, 1.8, 1.2);
    pod1.rotation.set(0.4, 0.6, -0.5);
    group.add(pod1);

    // Cardamom Pod 2
    const pod2 = pod1.clone();
    pod2.position.set(3.4, -1.8, -0.8);
    pod2.rotation.set(-0.5, 0.3, 0.8);
    pod2.scale.set(0.85, 0.85, 0.85);
    group.add(pod2);

    // 3. Curved Botanical Leaves in Deep Sapphire Blue
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(1, 1, 1.2, 2.5, 0, 4);
    leafShape.bezierCurveTo(-1.2, 2.5, -1, 1, 0, 0);

    const leafGeo = new THREE.ShapeGeometry(leafShape, 24);
    const leafPos = leafGeo.attributes.position;
    for (let i = 0; i < leafPos.count; i++) {
      const y = leafPos.getY(i);
      leafPos.setZ(i, Math.sin(y * 0.8) * 0.4);
    }
    leafGeo.computeVertexNormals();

    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x0A3B59,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    const leaf1 = new THREE.Mesh(leafGeo, leafMat);
    leaf1.position.set(2.8, 2.2, 0.5);
    leaf1.rotation.set(0.2, -0.4, -0.8);
    leaf1.scale.set(0.6, 0.6, 0.6);
    group.add(leaf1);

    const leaf2 = leaf1.clone();
    leaf2.position.set(-3.5, -2.4, 1.5);
    leaf2.rotation.set(-0.3, 0.5, 1.2);
    leaf2.scale.set(0.7, 0.7, 0.7);
    group.add(leaf2);

    // 4. Molecular Nodes & Connecting Glass Beams
    const moleculeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x2FA0E0,
      roughness: 0.2,
      metalness: 0.4,
    });

    const nodePositions = [
      new THREE.Vector3(-1.8, 2.8, -1),
      new THREE.Vector3(-2.8, 3.4, -0.5),
      new THREE.Vector3(-1.2, 3.8, -1.5),
    ];

    nodePositions.forEach((pos) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.copy(pos);
      moleculeGroup.add(node);
    });

    // Connecting Lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0084C9, transparent: true, opacity: 0.6 });
    const lineGeo = new THREE.BufferGeometry().setFromPoints(nodePositions);
    const line = new THREE.Line(lineGeo, lineMat);
    moleculeGroup.add(line);

    group.add(moleculeGroup);

    // 5. Floating Amber/Blue Droplet Particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 16;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xE5A853,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    group.add(particleSystem);

    setIsLoaded(true);

    // Interactive Mouse Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX + elapsedTime * 0.12;
      group.rotation.x = targetY + Math.sin(elapsedTime * 0.5) * 0.05;

      // Floating animations
      oilDrop.position.y = 0.2 + Math.sin(elapsedTime * 1.5) * 0.15;
      pod1.rotation.z += 0.003;
      pod2.rotation.x += 0.004;
      moleculeGroup.rotation.y = elapsedTime * 0.3;

      // Pulse particles
      const pPositions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F2F7FA] via-[#E8F2F8] to-[#0084C9]/20 rounded-3xl p-8 border border-[#0084C9]/20">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full bg-[#0084C9]/10 flex items-center justify-center border-2 border-[#E5A853]/40 shadow-inner mb-4">
            <span className="text-4xl text-[#0084C9]">💧</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#E5A853] font-bold">Natural Botanical Extract</p>
          <h3 className="font-serif-editorial text-2xl text-[#0B2536] mt-1">Nature, Extracted with Precision</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[550px] overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F2F7FA]/60 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#0084C9] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs tracking-widest uppercase text-[#0084C9] font-bold">Initializing 3D Scene...</span>
          </div>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default HeroBotanicalScene;
