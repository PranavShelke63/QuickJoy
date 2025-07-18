import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../global.css';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const gameStyles = StyleSheet.create({
  bg: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlayLight,
    zIndex: 2,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: SCREEN_WIDTH,
    minHeight: SCREEN_HEIGHT,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: colors.secondary,
    textShadowColor: colors.primary,
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 2,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginVertical: 12,
    alignItems: 'center',
    width: SCREEN_WIDTH > 350 ? 260 : 200,
    elevation: 3,
    backgroundColor: colors.button,
  },
  playButton: {
    backgroundColor: colors.accent,
  },
  helpButton: {
    backgroundColor: colors.secondary,
  },
  scoreButton: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  playText: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  helpText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: 'rgba(255,255,255,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  scoreText: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  // Add more shared styles as needed
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 28,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 10,
  },
});

export default gameStyles; 