// ==========================================
// CONFIGURAÇÕES E CONSTANTES
// ==========================================
const STORAGE_KEY = 'docz_mirrors_v8';

const MirrorType = {
    CAIXA: 'caixa',
    DOCUMENTO: 'documento',
    DOCUMENTO_CODIGO: 'documento_codigo',
    AVULSO: 'avulso',
};

const headerLinesByModel = {
    'Modelo Código Único': 1,
    'Modelo CADE': 1,
    'Modelo MTE': 1,
    'Modelo HOME ASSISTENCE': 1,

    'Modelo HMAB': 2,

    'Modelo Diretoria': 3,
    'Modelo Novacap': 3,

    'Modelo GRUPO EQUATORIAL ENERGIA': 5,

    'Modelo IGES': 6
};




const defaultMirrorConfig = {
    id: '',
    name: '',
    type: MirrorType.CAIXA,
    includeLogo: true,
    logoImage: null,
    logoSize: 2,

    customValues: {
        // Cabeçalho - Atualizado para 5 linhas
        'top_label': 'SETOR',
        'top_value': '',

        'title_label': 'TÍTULO',
        'title_value': '',

        'extra_label': '',      // ← Novo campo para terceira linha
        'extra_value': '',      // ← Novo campo para terceira linha

        'line4_label': '',      // ← Novo campo para quarta linha
        'line4_value': '',      // ← Novo campo para quarta linha

        'line5_label': '',      // ← Novo campo para quinta linha
        'line5_value': '',      // ← Novo campo para quinta linha

        // Texto Central
        'main_text': '',

        // Datas
        'data_1_label': 'ANO PRODUÇÃO',
        'data_1_value': '',
        'data_2_label': 'ANO DESTINAÇÃO',
        'data_2_value': '',

        // Rodapé
        'interm_label': 'INTERMEDIÁRIO',
        'interm_value': '',

        'dest_label': 'DESTINAÇÃO FINAL',
        'dest_value': '',

        'barcode_label': 'CÓDIGO DE BARRAS',
        'barcode_value': ''
    },

    layoutOption: 2
};

const igesMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO,
    name: 'Modelo IGES',
    includeLogo: true,
    logoImage: './logo9.png',  // ← Adicionado ./
    customValues: {
        top_label: 'UNIDADE',
        top_value: '',

        title_label: 'Nº CAIXA',
        title_value: '',

        extra_label: 'DEPARTAMENTO',
        extra_value: '',

        line4_label: 'TIPO DOCUMENTAL',
        line4_value: '',

        main_text: 'PACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE'
    }
};


const codigoUnicoMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo Código Único',
    includeLogo: true,
    logoImage: './logo1.png',  // ← Adicionado ./
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const diretoriaMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_DIRETORIA,
    name: 'Modelo Diretoria',
    includeLogo: true,
    logoImage: './logo2.png',  // ← Adicionado ./
    customValues: {
        top_label: 'DIRETORIA / ORGÃO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};


const novacapMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo Novacap',
    includeLogo: true,
    logoImage: './logo3.png',  // ← Adicionado ./
    customValues: {
        top_label: 'DEPARTAMENTO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const mteMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo MTE',
    includeLogo: true,
    logoImage: './logo4.png',  // ← Adicionado ./
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const cadeMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo CADE',
    includeLogo: true,
    logoImage: './logo5.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const hmabMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo HMAB',
    includeLogo: true,
    logoImage: './logo6.png',  // Nova logo específica para HMAB
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: '',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const homeAssistenceMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO,
    name: 'Modelo HOME ASSISTENCE',
    includeLogo: true,
    logoImage: './logo7.png',
    customValues: {
        top_label: 'CONVÊNIO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: '',
        data_1_value: '',
        data_2_label: '',
        data_2_value: '',
        interm_label: '',
        interm_value: '',
        dest_label: '',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const equatorialEnergiaMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo GRUPO EQUATORIAL ENERGIA',
    includeLogo: true,
    logoImage: './logo8.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        line4_label: 'CÓDIGO',
        line4_value: '',
        line5_label: 'CÓDIGO',
        line5_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};




function createCodigoUnico() {
    state.currentConfig = {
        ...codigoUnicoMirrorConfig,
        id: '',
        customValues: { ...codigoUnicoMirrorConfig.customValues }
    };
    state.selectedMirrorId = null;
    renderForm();
    renderPreview();
}

const headerLabelOptionsByModel = {
    'Modelo Código Único': {
        top: ['{CAMPO} - {CHAVE}']
    },
    'Modelo CADE': {
        top: ['{CAMPO} - {CHAVE}']
    },
    'Modelo MTE': {
        top: ['{CAMPO} - {CHAVE}']
    },
    'Modelo HMAB': {
        top: ['{CAMPO} - {CHAVE}'],
        title: ['{CAMPO} - {CHAVE}']
    },
    'Modelo Diretoria': {
        top: ['{CAMPO} - {CHAVE}'],
        title: ['{CAMPO} - {CHAVE}'],
        extra: ['{CAMPO} - {CHAVE}']
    },
    'Modelo Novacap': {
        top: ['{CAMPO} - {CHAVE}'],
        title: ['{CAMPO} - {CHAVE}'],
        extra: ['{CAMPO} - {CHAVE}']
    },

    'Modelo IGES': {
        top: ['UNIDADE'],
        title: ['Nº CAIXA - {CHAVE}'],
        extra: ['DEPARTAMENTO - {CHAVE}'],
        line4: ['TIPO DOCUMENTAL - {CHAVE}'],
        line5: ['CÓDIGO - {CHAVE}'],
        line6: ['PACIENTE - {CHAVE}'],
    },

    'Modelo HOME ASSISTENCE': {
        top: ['{CAMPO} - {CHAVE}']
    },
    'Modelo GRUPO EQUATORIAL ENERGIA': {
        top: ['{CAMPO} - {CHAVE}'],
        title: ['{CAMPO} - {CHAVE}'],
        extra: ['{CAMPO} - {CHAVE}'],
        line4: ['{CAMPO} - {CHAVE}'],
        line5: ['{CAMPO} - {CHAVE}']
    }
};



// --- OPÇÕES DOS DROPDOWNS ---

// Cabeçalho
const labelOptions = [
    { value: 'SETOR', label: 'Setor' },
    { value: 'DEPARTAMENTO', label: 'Departamento' },
    { value: 'UNIDADE', label: 'Unidade' },
    { value: 'CLIENTE', label: 'Cliente' },
    { value: 'EMPRESA', label: 'Empresa' }
];

const titleOptions = [
    { value: 'TÍTULO', label: 'Título' },
    { value: 'ASSUNTO', label: 'Assunto' },
    { value: 'CLASSE', label: 'Classe Documental' },
    { value: 'PROJETO', label: 'Projeto' }
];

// Datas
const data1Options = [
    { value: 'ANO PRODUÇÃO', label: 'Ano Produção' },
    { value: 'DATA INICIAL', label: 'Data Inicial' },
    { value: 'VIGÊNCIA', label: 'Vigência' }
];

const data2Options = [
    { value: 'ANO DESTINAÇÃO', label: 'Ano Destinação' },
    { value: 'DATA FINAL', label: 'Data Final' },
    { value: 'VALIDADE', label: 'Validade' }
];

// Rodapé
const intermOptions = [
    { value: 'INTERMEDIÁRIO', label: 'Intermediário' },
    { value: 'PRAZO', label: 'Prazo' },
    { value: 'CORRENTE', label: 'Fase Corrente' },
    { value: 'F. INTERM.', label: 'F. Interm.' }
];

const destOptions = [
    { value: 'DESTINAÇÃO FINAL', label: 'Destinação Final' },
    { value: 'DESTINAÇÃO', label: 'Destinação' },
    { value: 'DESTINO', label: 'Destino' },
    { value: 'AÇÃO FINAL', label: 'Ação Final' }
];

const barcodeOptions = [
    { value: 'CÓDIGO DE BARRAS', label: 'Código de Barras' },
    { value: 'IDENTIFICADOR', label: 'Identificador' },
    { value: 'PROTOCOLO', label: 'Protocolo' },
    { value: 'CHAVE', label: 'Chave' }
];

let state = {
    mirrors: [],
    currentConfig: { ...defaultMirrorConfig },
    selectedMirrorId: null,
    editContext: { key: null, label: '' }
};

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

function generateId() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.mirrors));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            state.mirrors = JSON.parse(saved);
        } catch (e) {
            state.mirrors = [];
        }
    } else {
        state.mirrors = [];
    }

    // 🔹 GARANTIR QUE O MODELO CÓDIGO ÚNICO SEMPRE EXISTA
    const jaExiste = state.mirrors.some(
        m => m.type === MirrorType.DOCUMENTO_CODIGO
    );

    if (!jaExiste) {
        const modeloCodigo = {
            ...codigoUnicoMirrorConfig,
            id: generateId(),
            customValues: { ...codigoUnicoMirrorConfig.customValues }
        };

        state.mirrors.unshift(modeloCodigo);

        // 🔥 SELECIONA AUTOMATICAMENTE
        state.currentConfig = modeloCodigo;
        state.selectedMirrorId = modeloCodigo.id;

        saveToLocalStorage();
    }

    const jaExisteDiretoria = state.mirrors.some(
        m => m.type === MirrorType.DOCUMENTO_DIRETORIA
    );

    if (!jaExisteDiretoria) {
        state.mirrors.push({
            ...diretoriaMirrorConfig,
            id: generateId(),
            customValues: { ...diretoriaMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }

    // 🔹 ADICIONAR IGES SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo IGES')) {
        state.mirrors.push({
            ...igesMirrorConfig,
            id: generateId(),
            customValues: { ...igesMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }


    // 🔹 ADICIONAR NOVACAP SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo Novacap')) {
        state.mirrors.push({
            ...novacapMirrorConfig,
            id: generateId(),
            customValues: { ...novacapMirrorConfig.customValues }
        });
    }

    // 🔹 ADICIONAR MTE SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo MTE')) {
        state.mirrors.push({
            ...mteMirrorConfig,
            id: generateId(),
            customValues: { ...mteMirrorConfig.customValues }
        });
    }

    // 🔹 ADICIONAR CADE SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo CADE')) {
        state.mirrors.push({
            ...cadeMirrorConfig,
            id: generateId(),
            customValues: { ...cadeMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }

    // 🔹 ADICIONAR HMAB SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo HMAB')) {
        state.mirrors.push({
            ...hmabMirrorConfig,
            id: generateId(),
            customValues: { ...hmabMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }

    // 🔹 ADICIONAR HOME ASSISTENCE SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo HOME ASSISTENCE')) {
        state.mirrors.push({
            ...homeAssistenceMirrorConfig,
            id: generateId(),
            customValues: { ...homeAssistenceMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }

    // 🔹 ADICIONAR GRUPO EQUATORIAL ENERGIA SE NÃO EXISTIR
    if (!state.mirrors.some(m => m.name === 'Modelo GRUPO EQUATORIAL ENERGIA')) {
        state.mirrors.push({
            ...equatorialEnergiaMirrorConfig,
            id: generateId(),
            customValues: { ...equatorialEnergiaMirrorConfig.customValues }
        });

        saveToLocalStorage();
    }


}


function showToast(message) {
    const toast = document.createElement('div');
    toast.className = `toast toast-success`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; top: 1rem; right: 1rem;
        background: #10b981; color: white; padding: 0.75rem 1rem;
        border-radius: 0.375rem; z-index: 1000;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// COMPONENTES DE RENDERIZAÇÃO
// ==========================================

function renderPencilButton(key, label) {
    const hasValue = state.currentConfig.customValues[key]?.length > 0;
    const btnClass = hasValue ? 'btn-primary' : 'btn-outline';

    return `
        <button type="button" 
                class="btn ${btnClass}" 
                style="padding: 0.5rem; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;" 
                onclick="openEditModal('${key}', '${label}')" 
                title="Editar ${label}">
            ✏️
        </button>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO FORMULÁRIO (ESQUERDA)
// ==========================================

function renderHeaderSelect(lineKey, valueKey) {
    const config = state.currentConfig;
    const values = config.customValues || {};
    const headerOptions = headerLabelOptionsByModel[config.name] || {};
    const options = headerOptions[lineKey] || [];

    if (options.length === 0) return '';

    return `
        <select class="form-input flex-1"
            onchange="updateCustomValue('${valueKey}', this.value)"
            ${options.length <= 1 ? 'disabled' : ''}>
            ${options.map(opt => `
                <option value="${opt}" ${values[valueKey] === opt ? 'selected' : ''}>
                    ${opt}
                </option>
            `).join('')}
        </select>
    `;
}


function renderForm() {
    const container = document.getElementById('form-container');
    if (!container) return;

    const config = state.currentConfig;
    const totalHeaderLines = headerLinesByModel[config.name] || 1;
    const values = config.customValues || {};
    const headerOptions =
        headerLabelOptionsByModel[config.name] || {};


    // Verificar qual modelo está sendo editado
    const isEquatorialEnergia = config.name === 'Modelo GRUPO EQUATORIAL ENERGIA';
    const isHomeAssistence = config.name === 'Modelo HOME ASSISTENCE';

    container.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-4">
                <h3 class="section-header">Configuração Geral</h3>
                <input type="text" class="form-input" placeholder="Nome do Modelo (ex: Padrão RH)" 
                       value="${config.name}" oninput="updateConfig('name', this.value)">
                
                <div class="flex items-center justify-between">
                    <div class="checkbox-item">
                        <input type="checkbox" id="includeLogo" ${config.includeLogo ? 'checked' : ''}
                               onchange="updateConfig('includeLogo', this.checked)">
                        <label for="includeLogo">Incluir Logo</label>
                    </div>
                    
                    ${config.includeLogo ? `
                        <div class="flex items-center gap-2">
    ${config.logoImage ?
                `<img src="${config.logoImage}" style="height:30px; border:1px solid #ccc;">
         <button type="button" class="btn btn-outline btn-sm" onclick="removeLogo()">❌</button>` :
                `<button type="button" class="btn btn-outline btn-sm" onclick="document.getElementById('logoUpload').click()">Selecionar</button>`
            }
    <input type="file" id="logoUpload" hidden accept="image/*" onchange="handleLogoUpload(event)">
</div>
                    ` : ''}
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

           <div class="space-y-3">
    <h3 class="section-header">Cabeçalho</h3>

   ${totalHeaderLines >= 1 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('top', 'top_label')}
    ${renderPencilButton('top_value', 'Valor da Linha 1')}
</div>` : ''}

${totalHeaderLines >= 2 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('title', 'title_label')}
    ${renderPencilButton('title_value', 'Valor da Linha 2')}
</div>` : ''}

${totalHeaderLines >= 3 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('extra', 'extra_label')}
    ${renderPencilButton('extra_value', 'Valor da Linha 3')}
</div>` : ''}

${totalHeaderLines >= 4 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line4', 'line4_label')}
    ${renderPencilButton('line4_value', 'Valor da Linha 4')}
</div>` : ''}

${totalHeaderLines >= 5 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line5', 'line5_label')}
    ${renderPencilButton('line5_value', 'Valor da Linha 5')}
</div>` : ''}

${totalHeaderLines >= 6 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line6', 'line6_label')}
    ${renderPencilButton('line6_value', 'Valor da Linha 6')}
</div>` : ''}

${totalHeaderLines >= 7 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line7', 'line7_label')}
    ${renderPencilButton('line7_value', 'Valor da Linha 7')}
</div>` : ''}

${totalHeaderLines >= 8 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line8', 'line8_label')}
    ${renderPencilButton('line8_value', 'Valor da Linha 8')}
</div>` : ''}

${totalHeaderLines >= 9 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line9', 'line9_label')}
    ${renderPencilButton('line9_value', 'Valor da Linha 9')}
</div>` : ''}

${totalHeaderLines >= 10 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line10', 'line10_label')}
    ${renderPencilButton('line10_value', 'Valor da Linha 10')}
</div>` : ''}

${totalHeaderLines >= 11 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line11', 'line11_label')}
    ${renderPencilButton('line11_value', 'Valor da Linha 11')}
</div>` : ''}

${totalHeaderLines >= 12 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line12', 'line12_label')}
    ${renderPencilButton('line12_value', 'Valor da Linha 12')}
</div>` : ''}

${totalHeaderLines >= 13 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line13', 'line13_label')}
    ${renderPencilButton('line13_value', 'Valor da Linha 13')}
</div>` : ''}

${totalHeaderLines >= 14 ? `
<div class="flex gap-2 items-center">
    ${renderHeaderSelect('line14', 'line14_label')}
    ${renderPencilButton('line14_value', 'Valor da Linha 14')}
</div>` : ''}

</div>



            <hr style="border-color: var(--color-border);">

            <div class="space-y-3">
                <h3 class="section-header">Texto Central</h3>
                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" disabled style="background-color: #f1f5f9; cursor: default; opacity: 1; color: #334155;">
                        <option selected>Conteúdo do Bloco</option>
                    </select>
                    ${renderPencilButton('main_text', 'Texto Central')}
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

            <!-- Rodapé (esconder para HOME ASSISTENCE) -->
            ${!isHomeAssistence ? `
            <div class="space-y-3">
                <h3 class="section-header">Rodapé</h3>
                
                <div class="grid grid-cols-2 gap-2">
                    
                    <div class="flex gap-1 items-center">
                        <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('data_1_label', this.value)">
                            ${data1Options.map(opt => `
                                <option value="${opt.value}" ${values.data_1_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('data_1_value', 'Valor Data 1')}
                    </div>

                    <div class="flex gap-1 items-center">
                        <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('data_2_label', this.value)">
                            ${data2Options.map(opt => `
                                <option value="${opt.value}" ${values.data_2_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('data_2_value', 'Valor Data 2')}
                    </div>

                    <div class="flex gap-1 items-center">
                        <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('interm_label', this.value)">
                            ${intermOptions.map(opt => `
                                <option value="${opt.value}" ${values.interm_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('interm_value', 'Valor Intermediário')}
                    </div>

                    <div class="flex gap-1 items-center">
                        <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('dest_label', this.value)">
                            ${destOptions.map(opt => `
                                <option value="${opt.value}" ${values.dest_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('dest_value', 'Valor Destinação')}
                    </div>

                    <div class="col-span-2 flex gap-2 items-center">
                        <select class="form-input flex-1" onchange="updateCustomValue('barcode_label', this.value)">
                            ${barcodeOptions.map(opt => `
                                <option value="${opt.value}" ${values.barcode_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('barcode_value', 'Valor Código')}
                    </div>
                </div>
            </div>
            ` : `
            <!-- Rodapé simplificado para HOME ASSISTENCE -->
            <div class="space-y-3">
                <h3 class="section-header">Código de Barras</h3>
                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" onchange="updateCustomValue('barcode_label', this.value)">
                        ${barcodeOptions.map(opt => `
                            <option value="${opt.value}" ${values.barcode_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                        `).join('')}
                    </select>
                    ${renderPencilButton('barcode_value', 'Valor Código de Barras')}
                </div>
            </div>
            `}
        </div>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW (DIREITA)
// ==========================================

// ==========================================
// RENDERIZAÇÃO DO PREVIEW (DIREITA)
// ==========================================

function renderPreview() {
    const container = document.getElementById('preview-content');
    if (!container) return;

    const config = state.currentConfig;
    const vals = config.customValues || {};

    const isCodigoUnico = config.name === 'Modelo Código Único';
    const isDiretoria = config.name === 'Modelo Diretoria';
    const isNovacap = config.name === 'Modelo Novacap';
    const isMTE = config.name === 'Modelo MTE';
    const isCADE = config.name === 'Modelo CADE';
    const isHMAB = config.name === 'Modelo HMAB';
    const isHomeAssistence = config.name === 'Modelo HOME ASSISTENCE';
    const isEquatorialEnergia = config.name === 'Modelo GRUPO EQUATORIAL ENERGIA';
    const isIGES = config.name === 'Modelo IGES';


    const d1 = vals.data_1_value || '';
    const d2 = vals.data_2_value || '';
    const ano = d1 && d2 ? `${d1} - ${d2}` : d1 || d2;

    const labelStyle = "flex: 0 0 100%; max-width: 38%;";

    // VERIFICA SE A LOGO EXISTE E É UMA URL DE IMAGEM
    let logoHtml = '';
    if (config.includeLogo && config.logoImage) {
        // Verifica se é uma data URL (imagem carregada) ou caminho de arquivo
        if (config.logoImage.startsWith('data:image') || config.logoImage.startsWith('./') || config.logoImage.includes('.png')) {
            logoHtml = `<img src="${config.logoImage}" style="max-height:60px; max-width:100%;" alt="Logo">`;
        }
    }

    if (isIGES) {

        container.innerHTML = `
        <div style="
            border:1px solid #000;
            font-family: Arial, sans-serif;
            font-size:12px;
        ">

            <!-- LOGO -->
            <div style="
                border-bottom:1px solid #000;
                height:80px;
                display:flex;
                align-items:center;
                justify-content:center;
            ">
                ${logoHtml}
            </div>

            <!-- UNIDADE / Nº CAIXA -->
            <div style="display:grid; grid-template-columns: 2fr 1fr;">
                <div style="border-right:1px solid #000; border-bottom:1px solid #000; padding:6px;">
                    <strong>Unidade:</strong> ${vals.top_value || ''}
                </div>
                <div style="border-bottom:1px solid #000; padding:6px;">
                    <strong>Nº Caixa:</strong> ${vals.title_value || ''}
                </div>
            </div>

            <!-- DEPARTAMENTO -->
            <div style="border-bottom:1px solid #000; padding:6px;">
                <strong>Departamento:</strong> ${vals.extra_value || ''}
            </div>

            <!-- TIPO DOCUMENTAL / CÓDIGO -->
            <div style="display:grid; grid-template-columns: 2fr 1fr;">
                <div style="border-right:1px solid #000; border-bottom:1px solid #000; padding:6px;">
                    <strong>Tipo Documental:</strong> ${vals.line4_value || ''}
                </div>
                <div style="border-bottom:1px solid #000; padding:6px;">
                    <strong>Código:</strong>
                </div>
            </div>

            <!-- CONTEÚDO -->
            <div style="border-bottom:1px solid #000; padding:6px;">
                <strong>Conteúdo:</strong>
            </div>

            <!-- LINHAS (PACIENTE) -->
            ${(vals.main_text || '')
                .split('\n')
                .filter(l => l.trim())
                .map(l => `
        <div style="
            border-bottom:1px solid #000;
            text-align:center;
            padding:6px;
        ">
            ${l}
        </div>
    `).join('')}



        </div>
    `;

        return; // ⛔ impede cair no render padrão
    }


    container.innerHTML = `
        <div class="senac-container">

            <!-- LOGO -->
            <div class="senac-row" style="display:flex;justify-content:center;align-items:center;padding:10px;border-bottom:1px solid #000;min-height:60px;">
                ${logoHtml}
            </div>

            <!-- TOPO MODELOS -->

            ${isCodigoUnico ? `
                <!-- Código Único -->
                <div class="senac-row" style="min-height:35px;">
                    <div class="senac-col-label" style="${labelStyle}">
                        <span class="senac-label">${vals.top_label || 'CÓDIGO'}:</span>
                    </div>
                    <div class="senac-col-value">
                        <span class="senac-value">${vals.top_value || ''}</span>
                    </div>
                </div>
            ` : ''}

            ${(isDiretoria || isNovacap) ? `
                <!-- Linha 0: top_label -->
                <div class="senac-row" style="min-height:35px;">
                    <div class="senac-col-label" style="${labelStyle}">
                        <span class="senac-label">${vals.top_label || (isDiretoria ? 'DIRETORIA / ORGÃO' : 'DEPARTAMENTO')}:</span>
                    </div>
                    <div class="senac-col-value">
                        <span class="senac-value">${vals.top_value || ''}</span>
                    </div>
                </div>

                <!-- Linha 1: title_label -->
                <div class="senac-row" style="min-height:35px;">
                    <div class="senac-col-label" style="${labelStyle}">
                        <span class="senac-label">${vals.title_label || 'CÓDIGO'}:</span>
                    </div>
                    <div class="senac-col-value">
                        <span class="senac-value">${vals.title_value || ''}</span>
                    </div>
                </div>

                <!-- Linha 2: extra_label -->
                <div class="senac-row" style="min-height:35px;">
                    <div class="senac-col-label" style="${labelStyle}">
                        <span class="senac-label">${vals.extra_label || 'CÓDIGO'}:</span>
                    </div>
                    <div class="senac-col-value">
                        <span class="senac-value">${vals.extra_value || ''}</span>
                    </div>
                </div>
            ` : ''}

            ${isMTE ? `
                <!-- MTE -->
                <div class="senac-row" style="min-height:35px;">
                    <div class="senac-col-label" style="${labelStyle}">
                        <span class="senac-label">${vals.top_label || 'CÓDIGO'}:</span>
                    </div>
                    <div class="senac-col-value">
                        <span class="senac-value">${vals.top_value || ''}</span>
                    </div>
                </div>
            ` : ''}

            ${isCADE ? `
    <!-- CADE -->
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.top_value || ''}</span>
        </div>
    </div>
` : ''}

${isHMAB ? `
    <!-- HMAB -->
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.top_value || ''}</span>
        </div>
    </div>
    
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.title_value || ''}</span>
        </div>
    </div>
` : ''}

${isHomeAssistence ? `
    <!-- HOME ASSISTENCE -->
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CONVÊNIO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.top_value || ''}</span>
        </div>
    </div>
` : ''}

${isEquatorialEnergia ? `
    <!-- GRUPO EQUATORIAL ENERGIA -->
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.top_value || ''}</span>
        </div>
    </div>
    
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.title_value || ''}</span>
        </div>
    </div>
    
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.extra_value || ''}</span>
        </div>
    </div>
    
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.line4_value || ''}</span>
        </div>
    </div>
    
    <div class="senac-row" style="min-height:35px;">
        <div class="senac-col-label" style="${labelStyle}">
            <span class="senac-label">CÓDIGO:</span>
        </div>
        <div class="senac-col-value">
            <span class="senac-value">${vals.line5_value || ''}</span>
        </div>
    </div>
` : ''}

            <!-- TEXTO PRINCIPAL -->
            <div class="senac-row">
                <div class="senac-text-block">
                    ${(vals.main_text || '').replace(/\n/g, '<br>')}
                </div>
            </div>

            <!-- RODAPÉ -->
${!isHomeAssistence ? `
<div class="senac-row" style="padding:0;display:block;border-bottom:1px solid #000;">
    <table class="senac-footer-table">
        <tr>
            <th style="width:25%;">ANO</th>
            <th colspan="2">RODAPÉ</th>
        </tr>
        <tr>
            <td rowspan="2" style="font-weight:bold;">${ano}</td>
            <td>${vals.interm_label || 'INTERMEDIÁRIO'}</td>
            <td>${vals.dest_label || 'DESTINAÇÃO FINAL'}</td>
        </tr>
        <tr>
            <td style="min-height:40px;">${vals.interm_value || '&nbsp;'}</td>
            <td style="min-height:40px;">${vals.dest_value || '&nbsp;'}</td>
        </tr>
    </table>
</div>
` : ''}

            <!-- CÓDIGO DE BARRAS -->
            <div class="senac-barcode-container" style="min-height:80px;">
                ${vals.barcode_value ? `
                    <div style="font-family:'Libre Barcode 39';font-size:48px;">*${vals.barcode_value}*</div>
                    <div style="font-family:monospace;font-size:11px;">${vals.barcode_value}</div>
                ` : ''}
            </div>

        </div>
    `;
}



// ==========================================
// LÓGICA DO MODAL (POP-UP)
// ==========================================

function openEditModal(key, label) {
    state.editContext = { key, label };

    const modal = document.getElementById('edit-modal');
    const input = document.getElementById('edit-modal-input');
    const title = document.getElementById('edit-modal-title');

    if (!modal || !input) return;

    title.textContent = `Editar ${label}`;
    input.value = state.currentConfig.customValues[key] || '';

    modal.style.display = 'flex';
    setTimeout(() => input.focus(), 50);
}

function saveEditModal() {
    const input = document.getElementById('edit-modal-input');
    const { key } = state.editContext;
    if (key) updateCustomValue(key, input.value);
    closeEditModal();
}

function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.style.display = 'none';
    state.editContext = { key: null, label: '' };
}

// ==========================================
// ATUALIZAÇÃO DE DADOS
// ==========================================

function updateConfig(key, value) {
    state.currentConfig[key] = value;
    renderForm();
    renderPreview();
}

function updateCustomValue(key, value) {
    if (!state.currentConfig.customValues) {
        state.currentConfig.customValues = {};
    }
    state.currentConfig.customValues[key] = value;
    renderForm();
    renderPreview();
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            updateConfig('logoImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    updateConfig('logoImage', null);
}

// ==========================================
// GESTÃO DA LISTA E BOTÕES
// ==========================================

function renderMirrorList() {
    const container = document.getElementById('mirror-list-container');
    if (!container) return;

    container.innerHTML = `
        <div class="mirror-list-header">
            <span class="section-header">Modelos</span>
            <button type="button" class="action-button" onclick="createNew()" title="Novo Espelho">+</button>
        </div>
        <div class="mirror-list-content">
            ${state.mirrors.length === 0 ?
            '<div class="p-4 text-center text-muted-foreground text-sm">Nenhum modelo salvo</div>' :
            state.mirrors.map(mirror => `
                    <div class="mirror-item ${state.selectedMirrorId === mirror.id ? 'mirror-item-selected' : ''}" 
                         onclick="loadMirror('${mirror.id}')">
                        <div class="mirror-info">
                            <div class="mirror-name">${mirror.name || 'Sem nome'}</div>
                        </div>
                        <button type="button" class="action-button-destructive" onclick="deleteMirror('${mirror.id}', event)">🗑️</button>
                    </div>
                `).join('')
        }
        </div>
    `;
}

function saveMirror() {
    const config = state.currentConfig;
    if (!config.name) {
        alert("Por favor, dê um nome ao modelo antes de salvar.");
        return;
    }
    if (!config.id) config.id = generateId();

    const existingIndex = state.mirrors.findIndex(m => m.id === config.id);
    if (existingIndex >= 0) {
        state.mirrors[existingIndex] = config;
    } else {
        state.mirrors.push(config);
    }

    state.selectedMirrorId = config.id;
    saveToLocalStorage();
    renderMirrorList();
    showToast("Modelo salvo com sucesso!");
}

function createNew() {
    state.currentConfig = { ...defaultMirrorConfig, customValues: {}, id: '' };
    state.selectedMirrorId = null;
    renderForm();
    renderPreview();
    renderMirrorList();
}

function loadMirror(id) {
    const mirror = state.mirrors.find(m => m.id === id);
    if (mirror) {
        state.currentConfig = { ...mirror };
        state.selectedMirrorId = id;
        renderForm();
        renderPreview();
        renderMirrorList();
    }
}

function deleteMirror(id, event) {
    event.stopPropagation();
    if (confirm("Tem certeza que deseja excluir?")) {
        state.mirrors = state.mirrors.filter(m => m.id !== id);
        if (state.selectedMirrorId === id) createNew();
        saveToLocalStorage();
        renderMirrorList();
    }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function init() {
    loadFromLocalStorage();

    document.getElementById('save-button')?.addEventListener('click', saveMirror);
    document.getElementById('default-button')?.addEventListener('click', createNew);
    document.getElementById('print-button')?.addEventListener('click', () => window.print());
    document.getElementById('cancel-button')?.addEventListener('click', () => {
        if (state.selectedMirrorId) loadMirror(state.selectedMirrorId);
        else createNew();
    });

    document.getElementById('edit-modal')?.addEventListener('click', e => {
        if (e.target.id === 'edit-modal') closeEditModal();
    });

    renderMirrorList();
    renderForm();
    renderPreview();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
