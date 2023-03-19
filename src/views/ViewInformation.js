import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import getInformationFormatted from "../util/getInformationFormatted";
import getWordCount from "../util/getWordCount";

const ViewInformation = ({ open, handleClose, information, word }) => {
  const [wordCount, setWordCount] = useState(0);
  const [informationFormatted, setInformationFormatted] = useState("");

  const formatedInformattion = useCallback(
    (information, word) => {
      setInformationFormatted(getInformationFormatted(information, word));
      setWordCount(getWordCount(informationFormatted, word));
    },
    [informationFormatted]
  );

  useEffect(() => {
    if (information && word) {
      formatedInformattion(information, word);
    }
  }, [information, word, formatedInformattion]);

  if (!open) return null;

  if (!information || !word) return null;

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Articulo encontrado</DialogTitle>
        <DialogContent dividers={"paper"}>
          <DialogContentText id="scroll-article-description" tabIndex={-1}>
            <div dangerouslySetInnerHTML={{ __html: informationFormatted }} />
          </DialogContentText>
          <DialogContentText
            id="word-counter-description"
            tabIndex={-1}
            sx={{ marginTop: "1rem", fontSize: "1.5rem" }}
          >
            <b>{`La palabra (${word}) se repite ${wordCount} veces`}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ViewInformation;
