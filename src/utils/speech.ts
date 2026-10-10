/**
 * Web Speech API text-to-speech utility
 */

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices().filter((v) => v.lang.startsWith('en'));
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  public speak(
    text: string,
    rate: number = 1.0,
    voiceURI?: string,
    onEnd?: () => void,
    onError?: () => void
  ): boolean {
    if (!this.synth) return false;

    // Clean text: remove bracketed stage directions like [WOOD SNAPPING], [SCREAMING]
    const cleanText = text
      .replace(/\[.*?\]/g, '')
      .replace(/^[A-Z\s]+:/gm, '')
      .trim();

    if (!cleanText) return false;

    this.stop();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    if (voiceURI) {
      const selectedVoice = this.voices.find((v) => v.voiceURI === voiceURI);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    } else {
      // Pick best English voice if available (e.g., Google US English or Samantha or Daniel)
      const preferred = this.voices.find(
        (v) =>
          v.name.includes('Google') ||
          v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Daniel')
      );
      if (preferred) {
        utterance.voice = preferred;
      }
    }

    if (onEnd) utterance.onend = onEnd;
    if (onError) utterance.onerror = onError;

    this.synth.speak(utterance);
    return true;
  }

  public stop(): void {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
  }

  public isSpeaking(): boolean {
    return !!this.synth && this.synth.speaking;
  }
}

export const speechService = new SpeechService();
