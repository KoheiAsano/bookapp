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
const CommentModal = ({bookId,commentId,CommentModalOpen, onCommentModalClose, onSave}) => {
  let input1,input2
  const handleChange1 = (e) => {input1 = e.target.value}
  const handleChange2 = (e) => {input2 = e.target.value}
  return(
    <div>
        <Modal open={CommentModalOpen}
               onClose={() => onCommentModalClose()}>
          <div>
            <div style={style.selectProjectModalStyle}>
              <h3>コメントする</h3>
              <TextField label={"Page"}
                         value={input1}
                         style={{marginRight: "10px"}} autoFocus
                         onChange={(e) => handleChange1(e)}/>
              <div>
               <TextField label={"コメント"}
                          value={input2}
                          style={{marginRight: "10px"}} autoFocus
                          onChange={(e) => handleChange2(e)}/>
              </div>
               <Button style={style.btnstyle}
                       variant="outlined"
                       value="投稿"
                       disabled={input1 == "" || input2 == ""}
                       onClick={() => {
                         onSave(bookId, "asako",input2, commentId || null, input1 )
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
