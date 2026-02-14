import { deleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteProductAlertDialogContentProps {
    productId: string;
}

const DeleteProductAlertDialogContent = ({productId}: DeleteProductAlertDialogContentProps) => {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });
      toast.success("Produto deletado com sucesso!");
    }catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar o produto. Por favor, tente novamente.");
    }
  }
    return ( 
        <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso irá deletar permanentemente o produto. Deseja continuar?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinueClick}>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
     );
}
 
export default DeleteProductAlertDialogContent;