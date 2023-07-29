declare module 'use-sound' {
  export interface UseSoundControls {
    pause: () => void;
    play: () => void;
    sound: any; // Replace 'any' with the appropriate type for your use case
  }

  export default function useSound(
    src: string,
    options?: {
      volume?: number;
      onplay?: () => void;
      onpause?: () => void;
      onend?: () => void;
      format?: string[];
    }
  ): [() => void, UseSoundControls];
}
