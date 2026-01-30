// ==========================================
// CONFIGURAÇÕES E CONSTANTES
// ==========================================
const STORAGE_KEY = 'docz_mirrors_v8'; 

const MirrorType = {
    CAIXA: 'caixa',
    DOCUMENTO: 'documento',
    AVULSO: 'avulso'
};

const defaultMirrorConfig = {
    id: '',
    name: '',
    type: MirrorType.CAIXA,
    includeLogo: true,
    logoImage: null,
    logoSize: 2,
    
    customValues: {
        // Cabeçalho
        'top_label': 'SETOR', 
        'top_value': '',
        
        'title_label': 'TÍTULO', 
        'title_value': '',
        
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
        try { state.mirrors = JSON.parse(saved); } catch (e) { state.mirrors = []; }
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

function renderForm() {
    const container = document.getElementById('form-container');
    if (!container) return;

    const config = state.currentConfig;
    const values = config.customValues || {};

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
                
                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" onchange="updateCustomValue('top_label', this.value)">
                        ${labelOptions.map(opt => `
                            <option value="${opt.value}" ${values.top_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                        `).join('')}
                    </select>
                    ${renderPencilButton('top_value', 'Valor da Linha 1')}
                </div>

                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" onchange="updateCustomValue('title_label', this.value)">
                        ${titleOptions.map(opt => `
                            <option value="${opt.value}" ${values.title_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                        `).join('')}
                    </select>
                    ${renderPencilButton('title_value', 'Valor da Linha 2')}
                </div>
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
        </div>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW (DIREITA)
// ==========================================

function renderPreview() {
    const container = document.getElementById('preview-content');
    if (!container) return;

    const config = state.currentConfig;
    const vals = config.customValues || {};

    const data = {
        topLabel: vals.top_label || 'SETOR',
        topValue: vals.top_value || '',
        
        titleLabel: vals.title_label || 'TÍTULO',
        titleValue: vals.title_value || '', 
        
        text: vals.main_text || '',     
        
        // Datas
        d1Val: vals.data_1_value || '',
        d2Val: vals.data_2_value || '',

        // Rodapé
        intermLabel: vals.interm_label || 'INTERMEDIÁRIO',
        intermVal: vals.interm_value || '',
        
        destLabel: vals.dest_label || 'DESTINAÇÃO FINAL',
        destVal: vals.dest_value || '',
        
        barcodeVal: vals.barcode_value || ''
    };

    // Lógica para juntar os anos com traço
    let anoDisplay = data.d1Val;
    if (data.d2Val) {
        if (anoDisplay) {
            anoDisplay += ' - ' + data.d2Val;
        } else {
            anoDisplay = data.d2Val;
        }
    }

    container.innerHTML = `
        <div class="senac-container">
            
            <div class="senac-row" style="justify-content: center; padding: 10px; border-bottom: 1px solid #000; min-height: 60px;">
                ${config.includeLogo && config.logoImage ? 
                    `<img src="${config.logoImage}" style="max-height: 50px; object-fit: contain;">` : 
                    '' 
                }
            </div>

            <div class="senac-row" style="min-height: 35px;">
                <div class="senac-col-label">
                    <span class="senac-label">${data.topLabel}:</span>
                </div>
                <div class="senac-col-value">
                    <span class="senac-value">${data.topValue}</span>
                </div>
            </div>

            <div class="senac-row" style="min-height: 35px;">
                <div class="senac-col-label">
                    <span class="senac-label">${data.titleLabel}:</span>
                </div>
                <div class="senac-col-value">
                    <span class="senac-value">${data.titleValue}</span>
                </div>
            </div>

            <div class="senac-row">
                <div class="senac-text-block">
                    ${data.text ? data.text.replace(/\n/g, '<br>') : ''}
                </div>
            </div>

            <div class="senac-row" style="padding: 0; display: block; border-bottom: 1px solid #000;">
                <table class="senac-footer-table">
                    <tr>
                        <th style="width: 25%;">ANO</th>
                        <th colspan="2">RODAPÉ</th> 
                    </tr>
                    <tr>
                        <td rowspan="2" style="vertical-align: middle; height: 50px; font-weight: bold;">
                            ${anoDisplay}
                        </td>
                        <td style="width: 37.5%;">${data.intermLabel}</td>
                        <td style="width: 37.5%;">${data.destLabel}</td>
                    </tr>
                    <tr>
                        <td style="height: 40px; vertical-align: middle;">${data.intermVal}</td>
                        <td style="height: 40px; vertical-align: middle;">${data.destVal}</td>
                    </tr>
                </table>
            </div>

            <div class="senac-barcode-container" style="min-height: 80px;">
                ${data.barcodeVal ? `
                    <div style="font-family: 'Libre Barcode 39', monospace; font-size: 48px; height: 40px; overflow: hidden; white-space: nowrap;">
                        *${data.barcodeVal}*
                    </div>
                    <div style="font-family: monospace; font-size: 11px; letter-spacing: 1px; margin-top: 5px;">
                        ${data.barcodeVal}
                    </div>
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
    if(confirm("Tem certeza que deseja excluir?")) {
        state.mirrors = state.mirrors.filter(m => m.id !== id);
        if(state.selectedMirrorId === id) createNew();
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
        if(state.selectedMirrorId) loadMirror(state.selectedMirrorId);
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
