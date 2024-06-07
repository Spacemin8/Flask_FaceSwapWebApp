//declarations
main_face_display = document.getElementById('mface');
mf_upload_btn = document.getElementsByClassName('mf')[0];
second_face_display = document.getElementById('sface');
sf_upload_btn = document.getElementsByClassName('sf')[0];
land_mark_display = document.getElementById('aface');
output_face_display = document.getElementById('oface');
merge_btn = document.getElementById('mergebtn');
downloadbtn = document.getElementById('o_down');

updateFace = (evt, disp) => {
  var tgt = evt.target,
    files = tgt.files;
  var fr = new FileReader();
  fr.onload = () => {
    disp.src = fr.result;
    var fileName = files[0].name;
    console.log('File Name:', fileName);
  };
  if (files.length > 0) {
    fr.readAsDataURL(files[0]);
  }
};
updateLandMark = (disp) => {
  var fr = new FileReader();
  fr.onload = () => {
    disp.src = fr.result;
  };
};
//load Main Face
mf_upload_btn.onchange = (evt) => {
  console.log('Updating Main Face');
  console.log('Updating land mark');
  updateFace(evt, main_face_display);
  updateLandMark(land_mark_display);
};
//load Second Face
sf_upload_btn.onchange = (evt) => {
  console.log('Updating Second Face');
  updateFace(evt, second_face_display);
};
