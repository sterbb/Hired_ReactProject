import React from "react";
import { toast } from "sonner";

const addJob = async (newJob): Promise<void> => {
  const addJobPromise = async () => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  };

  toast.promise(addJobPromise(), {
    loading: "Adding...",
    success: "Job has been added",
    error: "Transaction Unsuccessful",
  });

  return;
};

const deleteJob = async (id: string): Promise<void> => {
  const deletePromise = async () => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  toast.promise(deletePromise(), {
    loading: "Deleting...",
    success: "Job has been deleted",
    error: "Deletion Unsuccessful",
  });

  return;
};

const editJob = async (job): Promise<void> => {
  const editJobPromise = async () => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };

  toast.promise(editJobPromise(), {
    loading: "Processing...",
    success: "Job has been successfully edited",
    error: "Transaction Unsuccessful",
  });

  return;
};

export {addJob,editJob,deleteJob };
