import BlogModal from "@/components/BlogModal";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import { Dialog } from "@/components/ui/dialog";
import { DialogContextType, DialogType, Type } from "@/types";
import { createContext, useContext, useState } from "react";

const DialogContext = createContext<DialogContextType | null>(null);

const DialogProvier = ({ children }: { children: React.ReactNode }) => {
  const [dialogType, setDialogType] = useState<DialogType | null>(null);
  return (
    <DialogContext.Provider value={{ dialogType, setDialogType }}>
      {children}
      <Dialog
        open={Type.login === dialogType?.type}
        onOpenChange={() => setDialogType(null)}
      >
        <LoginModal />
      </Dialog>
      <Dialog
        open={Type.register === dialogType?.type}
        onOpenChange={() => setDialogType(null)}
      >
        <RegisterModal />
      </Dialog>
      <Dialog
        open={Type.blogCard === dialogType?.type}
        onOpenChange={() => setDialogType(null)}
      >
        {dialogType?.data?.blog && (
          <BlogModal
            id={dialogType?.data?.blog.id}
            title={dialogType?.data?.blog.title}
            description={dialogType?.data?.blog.description}
            content={dialogType?.data?.blog.content}
            imgUrl={dialogType?.data?.blog.imgUrl}
            createdAt={dialogType?.data?.blog.createdAt}
            user={dialogType?.data?.blog.user}
            likeCount={dialogType?.data?.blog.likeCount}
            comments={dialogType?.data?.blog.comments}
          />
        )}
      </Dialog>
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export default DialogProvier;
