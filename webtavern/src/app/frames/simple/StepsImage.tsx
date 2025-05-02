export default function StepsImage() {

  return (

    <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      fontSize: 32,
      fontWeight: 600,
      color: "#fff",
      backgroundImage: 'linear-gradient(to right, #334d50, #cbcaa5)',
  
    }}
  >
  
    <div style={{ display: 'flex', marginTop: 0, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>create your game</div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>with a game gactory</div>
    </div>
  
  
      <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>choose your modules</div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>from the registry</div>
    </div>
  
       <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>configure your modules</div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>with entities</div>
    </div>
  
         <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>combine module functions</div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>into game gunctions</div>
    </div>
  
           <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
      <div style={{ flexBasis: '50%', color:`#0`, justifyContent: 'flex-start', paddingLeft: 15 }}>play </div>
    </div>
  
  </div>
  


  )
}