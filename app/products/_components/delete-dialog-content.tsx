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
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface DeleteProductAlertDialogContentProps {
    productId: string;
}

const DeleteProductAlertDialogContent = ({productId}: DeleteProductAlertDialogContentProps) => {
  const {execute: executeDeliteProduct} = useAction(deleteProduct, {
    onSuccess: () => {
      toast.success("Produto deletado com sucesso!")
    },
      onError: () => {
        toast.error("Ocorreu um erro ao deletar o produto. Por favor, tente novamente.");
      },
    
  });
  const handleContinueClick = () => executeDeliteProduct({ id: productId });
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