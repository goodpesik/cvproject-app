'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export enum ConfirmationModalMode {
  Warning,
  Danger
}

interface ConfirmationModalProps {
  onContinue?: (data: any) => void;
  onClose?: (data: any) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode?: ConfirmationModalMode;
}

export function ConfirmationModal({
  onContinue,
  onClose,
  open,
  onOpenChange,
  mode = ConfirmationModalMode.Danger
}: ConfirmationModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          { mode === ConfirmationModalMode.Danger ? 
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription> : null
          }
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button variant="outline" onClick={onContinue}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
