import { useCallback, useRef } from 'react';

// Create short sound effects using Web Audio API for mobile compatibility
export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.warn('Web Audio API not supported:', error);
      }
    }
    
    // Resume context if suspended (required for mobile browsers)
    if (audioContextRef.current?.state === 'suspended') {
      audioContextRef.current.resume();
    }
    
    return audioContextRef.current;
  }, []);

  const playSuccessSound = useCallback(() => {
    const context = initAudioContext();
    if (!context) return;

    try {
      // Create cheerful clapping/celebration sound
      const gainNode = context.createGain();
      gainNode.connect(context.destination);

      // Create multiple oscillators for a rich, cheerful sound
      const oscillators: OscillatorNode[] = [];
      const frequencies = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      // Create celebration melody (like kids game success)
      frequencies.forEach((freq, index) => {
        const osc = context.createOscillator();
        const oscGain = context.createGain();
        
        osc.connect(oscGain);
        oscGain.connect(gainNode);
        
        osc.frequency.setValueAtTime(freq, context.currentTime);
        osc.type = 'triangle'; // Warmer sound than sine
        
        // Create bouncy, cheerful envelope for each note
        const startTime = context.currentTime + (index * 0.08);
        const attackTime = 0.02;
        const releaseTime = 0.15;
        
        oscGain.gain.setValueAtTime(0, startTime);
        oscGain.gain.linearRampToValueAtTime(0.2, startTime + attackTime);
        oscGain.gain.exponentialRampToValueAtTime(0.001, startTime + releaseTime);
        
        osc.start(startTime);
        osc.stop(startTime + releaseTime);
        
        oscillators.push(osc);
      });

      // Add extra sparkle with higher frequency burst (like clapping)
      const sparkleOsc = context.createOscillator();
      const sparkleGain = context.createGain();
      
      sparkleOsc.connect(sparkleGain);
      sparkleGain.connect(gainNode);
      
      sparkleOsc.frequency.setValueAtTime(1568, context.currentTime + 0.1); // G6
      sparkleOsc.type = 'sawtooth';
      
      sparkleGain.gain.setValueAtTime(0, context.currentTime + 0.1);
      sparkleGain.gain.linearRampToValueAtTime(0.15, context.currentTime + 0.12);
      sparkleGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.25);
      
      sparkleOsc.start(context.currentTime + 0.1);
      sparkleOsc.stop(context.currentTime + 0.25);

    } catch (error) {
      console.warn('Failed to play success sound:', error);
    }
  }, [initAudioContext]);

  const playErrorSound = useCallback(() => {
    const context = initAudioContext();
    if (!context) return;

    try {
      // Create a gentle error beep (low frequency, brief)
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      // Low frequency for gentle error indication
      oscillator.frequency.setValueAtTime(220, context.currentTime); // A3
      oscillator.type = 'sine';

      // Brief, soft envelope
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);

      const startTime = context.currentTime;
      const stopTime = startTime + 0.2;

      oscillator.start(startTime);
      oscillator.stop(stopTime);
    } catch (error) {
      console.warn('Failed to play error sound:', error);
    }
  }, [initAudioContext]);

  return {
    playSuccessSound,
    playErrorSound
  };
}