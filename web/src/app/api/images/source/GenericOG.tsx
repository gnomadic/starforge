
export default function GenericOG() {

  // export default async function GenericOG() {

  return (

    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d0c1d',
        backgroundImage: 'radial-gradient(circle at 50% 30%, #34284f, #0d0c1d 80%)',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
      }}
    >
      {/* Icon placeholder */}
      <img
        src="https://starforge-git-moremini-gnomadics-projects.vercel.app/.assets/blockholeicon.png"
        alt="Starforge Icon"
        style={{
          width: 200,
          height: 200,
          marginBottom: '1.5rem',
          filter: 'drop-shadow(0 0 10px #7f5aff)',
        }}
      />

      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          backgroundImage: 'linear-gradient(90deg, #7f5aff, #00f7ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '0.5rem',
        }}
      >
        STARFORGE
      </div>

      <div
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: '#c2bafc',
        }}
      >
        Regenerate the stars. Rewrite the future.
      </div>
    </div>
  );
}