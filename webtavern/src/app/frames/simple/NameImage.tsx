export default function NameImage() {

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
    <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}>Help us find a name</div>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>play forge</div>
  </div>


    <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>one page protocol</div>
  </div>

     <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>mint play</div>
  </div>

       <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-start', paddingLeft: 15 }}>on-chain rpg (ocrpg)</div>
  </div>



         <div style={{ display: 'flex', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
    <div style={{ flexBasis: '50%', justifyContent: 'flex-end', color: '#000' }}></div>
    <div style={{ flexBasis: '50%', color:`#0`, justifyContent: 'flex-start', paddingLeft: 15 }}>vote or suggest below</div>
  </div>

</div>



  )
}