export default function CTAImage() {

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
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>If you are interested</div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>follow us</div>
    </div>
  
       <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>share your ideas for games</div>
    </div>
  
         <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>share your ideas for modules</div>
    </div>
  
  
  
           <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
      <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
      <div style={{ flexBasis: '50%', color:`#0`, justifyContent: 'flex-start', paddingLeft: 15 }}>help us find a name </div>
    </div>
  
  </div>
  

  )
}