import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';

import { ListarTarefaComponent } from './listar';

import { EditarTarefaComponent } from './editar';


export const TarefaRoutes: Routes = [
{
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
},
{
    path: 'tarefas/listar',
    component: ListarTarefaComponent
},
{
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
},
{
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
}


];