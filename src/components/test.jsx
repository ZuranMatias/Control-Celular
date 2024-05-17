typedef struct PCBNode {
    t_pcb data;
    struct PCBNode* next;
} PCBNode;

PCBNode* head = NULL;

void insert(t_pcb newData, PCBNode** listHead) {
    PCBNode* newPCBNode = (PCBNode*)malloc(sizeof(PCBNode));
    newPCBNode->data = newData;
    newPCBNode->next = NULL;

    if (*listHead == NULL) {
        *listHead = newPCBNode;
    } else {
        PCBNode* temp = *listHead;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newPCBNode;
    }
}