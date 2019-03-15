import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
const style = {
  btnstyle: {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "#04B486",
    "color": "white",
    textTransform: "none",
  },
  selectProjectModalStyle: {
    display:"inline-block",
    marginTop:"250px",
    height:"200px",
    //widthはGridでレスポンシブに
    minWidth: "300px",
    backgroundColor:"white",
    textAlign:"center",
    "outline":"none",
    borderRadius:"30px",
    fontFamily:"Avenir",
  },
  disabledstyle: {
    marginRight: "10px",
    marginBottom: "10px",
    backgroundColor: "gray",
    "color": "white",
    textTransform: "none",
  },
}
const CommentModal = ({CommentModalOpen, onCommentModalClose}) => {
  let input
  const handleChange = (e) => {input = e.target.value}
  return(
    <div>
        <Modal open={CommentModalOpen}
               onClose={() => onCommentModalClose()}>
          <div>
            <div style={style.selectProjectModalStyle}>
              <h3>コメントする</h3>
              <TextField label={"Page"}
                         value={input}
                         style={{marginRight: "10px"}} autoFocus
                         onChange={(e) => handleChange(e)}/>
              <div>
               <TextField label={"コメント"}
                          value={input}
                          style={{marginRight: "10px"}} autoFocus
                          onChange={(e) => handleChange(e)}/>
              </div>
               <Button style={style.btnstyle}
                       variant="outlined"
                       disabled={input === ""}
                       value="保存"
                       onClick={() => {
                         onCommentModalClose();
                       }}>
               投稿
               </Button>

            </div>
          </div>
        </Modal>
    </div>
  )
}

export default CommentModal;
