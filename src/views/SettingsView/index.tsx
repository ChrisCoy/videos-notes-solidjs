import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import { useAuth } from "../../hooks/useAuth";
import * as Styles from "./styles";
import useVideos from "../../hooks/useVideos";
import { FiLogOut } from "solid-icons/fi";
import { TbFileExport } from "solid-icons/tb";
import { BiRegularImport } from "solid-icons/bi";
import { AiFillGithub } from "solid-icons/ai";
import { AiFillHeart } from "solid-icons/ai";
import { VsFeedback } from "solid-icons/vs";
import { useToast } from "../../hooks/useToast";
import { useLoading } from "../../hooks/useLoading";
import Swal from "sweetalert2";

const SettingsView: Component = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { getVideoInfoFromTab, notes, createManyNotes } = useVideos();
  const toast = useToast();
  const { setIsLoading } = useLoading();

  async function handleDownloadNotes() {
    const download = document.createElement("a");
    const notesToDownload = notes()?.map((note) => ({
      text: note.text,
      time: note.time,
      title: note.title,
      url: note.url,
      thumbnail: note.thumbnail,
      createdAt: note.createdAt,
    }));
    var dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(notesToDownload));
    download.setAttribute("href", dataStr);
    download.setAttribute("download", "notes.json");
    download.click();

    download.remove();
  }

  async function handleImportNotes(event: any) {
    try {
      const file = event?.currentTarget.files[0];
      if (!file) return;

      const result = await Swal.fire({
        title: `You are about to import ${file.name}, are you sure?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });

      if (!result.isConfirmed) {
        event!.target!.value = "";
        return;
      }

      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const notesFromFile = JSON.parse(e.target?.result as string);
          notesFromFile.forEach((note: any) => {
            Object.keys(note).forEach((key) => {
              if (["title", "thumbnail", "time", "url", "text", "createdAt"].includes(key)) {
                return;
              }
              throw new Error("Invalid note format");
            });
          });

          createManyNotes(notesFromFile);

          event!.target!.value = "";
        } catch (error) {
          console.log(error);

          toast.error("Invalid file format");
        } finally {
          setIsLoading(false);
        }
      };
      reader.readAsText(file);
    } catch (error) {
      toast.error("Invalid file format");
    }
  }

  function handleSendFeedback() {
    navigate("/send-feedback");
  }

  return (
    <Styles.SettingsViewWrapper>
      <Styles.MenuWrapper>
        <Styles.MenuItem onClick={handleDownloadNotes}>
          <TbFileExport />
          Export Notes
        </Styles.MenuItem>
        <Styles.SendFileButton>
          <input type="file" accept="application/JSON" onChange={handleImportNotes} />
          <BiRegularImport />
          Import notes
        </Styles.SendFileButton>
        <a
          href="https://github.com/ChrisCoy/videos-notes-solidjs"
          target="_blank"
          style={{ all: "unset" }}
        >
          <Styles.MenuItem tabIndex={-1}>
            <AiFillGithub />
            GitHub repository
          </Styles.MenuItem>
        </a>
        <Styles.MenuItem onClick={handleSendFeedback}>
          <VsFeedback /> Give feedback
        </Styles.MenuItem>
        <Styles.MenuItem onClick={logout}>
          <FiLogOut /> Log out
        </Styles.MenuItem>
        <Styles.MadeWithLove>
          Made with <AiFillHeart /> by
          <a href="https://github.com/ChrisCoy" target="_blank">
            Chris Coy
          </a>
        </Styles.MadeWithLove>
      </Styles.MenuWrapper>
    </Styles.SettingsViewWrapper>
  );
};

export { SettingsView };
