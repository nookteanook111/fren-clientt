
"use client";

import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ModalPromotion() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Promotion</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image src={"/promotion.jpg"} width={1000} height={1000} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Link href={'/courses'}>
          <Button onClick={() => setOpenModal(false)}>สนใจ</Button>
            </Link>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
