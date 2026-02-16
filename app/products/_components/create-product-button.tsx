"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import UpsertProductDialogContent from "./upsert-dialog-content";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const CreateProductButton = () => {
const [dialogOpen, setDialogOpen] = useState(false);



  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent onSuccess={() => setDialogOpen(false)} />
    </Dialog>
  );
};

export default CreateProductButton;
